import React, { useState } from "react";
import toast from "react-hot-toast";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LoadingSpinner from "../LoadingSpinner";

const NearbyPlaces = () => {
  const [serviceType, setServiceType] = useState("");
  const [location, setLocation] = useState(null); // {lat, lon}
  const [manualInput, setManualInput] = useState("");
  const [distance, setDistance] = useState(5);
  const [places, setPlaces] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  // Detect via GPS
  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          });
        },
        (err) => console.log("Failed to detect location: " + err.message)
      );
    }
  };

  // Convert manual input -> lat/lon using Nominatim
  const geocodeLocation = async () => {
    if (!manualInput.trim()) return;
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${manualInput}`
    );
    const data = await res.json();
    if (data.length > 0) {
      setLocation({
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
      });
    } else {
      toast.error("Location not found");
    }
  };

  // Helper: get address from lat/lon
  const getAddressFromCoords = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await res.json();
      return data.display_name || "Unnamed place";
    } catch (err) {
      return "Unnamed place";
    }
  };

  // Fetch nearby services from Overpass API
  const fetchNearbyServices = async () => {
    if (!serviceType || !location) {
      toast("Please select service type and location");
      return;
    }

    setLoading(true);
    setPlaces([]);

    let query = "";
    if (serviceType === "vet") query = "amenity=veterinary";
    if (serviceType === "groomer") query = "shop=pet";
    if (serviceType === "store") query = "shop=pet";

    const overpassQuery = `
      [out:json];
      (
        node[${query}](around:${distance * 1000},${location.lat},${location.lon});
        way[${query}](around:${distance * 1000},${location.lat},${location.lon});
        relation[${query}](around:${distance * 1000},${location.lat},${location.lon});
      );
      out center;
    `;

    try {
      const res = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: overpassQuery,
      });

      const data = await res.json();

      // resolve addresses for each place
      const results = await Promise.all(
        data.elements.map(async (el) => {
          const lat = el.lat || el.center?.lat;
          const lon = el.lon || el.center?.lon;
          const address = await getAddressFromCoords(lat, lon);

          return {
            id: el.id,
            name: el.tags?.name || address,
            lat,
            lon,
            address,
          };
        })
      );

      setPlaces(results);
      setSearched(true);
    } catch (err) {
      toast.error("Failed to fetch places");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-8">
      <h2 className="text-2xl font-bold text-[#2F4156] mb-6 text-center bg-white shadow-sm py-3 rounded-xl">
        Nearby Places
      </h2>

      <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-md">
        {/* Left side - Form */}
        <div className="flex-1">
          {/* Service Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Service Type
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a service</option>
              <option value="vet">Vet</option>
              <option value="groomer">Groomer</option>
              <option value="store">Store</option>
            </select>
          </div>

          {/* Manual Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Current Location
            </label>
            <input
              type="text"
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              placeholder="Enter location manually"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <div className="flex gap-4 mt-2">
              <button
                type="button"
                onClick={geocodeLocation}
                className="text-sm text-[#FF6B35] underline"
              >
                Use manual input
              </button>
              <button
                type="button"
                onClick={detectLocation}
                className="text-sm text-[#FF6B35] underline"
              >
                Detect via GPS
              </button>
            </div>
          </div>

          {/* Distance */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Distance Range: {distance} km
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full accent-[#FF6B35]"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={fetchNearbyServices}
              className="flex-1 bg-[#FF6B35] text-white py-2 rounded-lg shadow hover:bg-[#e55a27] transition"
            >
              Search
            </button>
            <button
              type="button"
              className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg shadow hover:bg-gray-300 transition"
              onClick={() => {
                setServiceType("");
                setManualInput("");
                setLocation(null);
                setDistance(5);
                setPlaces([]);
                setSearched(false);
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Right side - Map */}
        <div className="flex-1">
          {location ? (
            <MapContainer
              center={[location.lat, location.lon]}
              zoom={13}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {/* User location */}
              <Marker position={[location.lat, location.lon]}>
                <Popup>You are here</Popup>
              </Marker>
              {/* Places */}
              {places.map((p) => (
                <Marker key={p.id} position={[p.lat, p.lon]}>
                  <Popup>{p.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          ) : (
            <div className="h-60 md:h-full bg-gray-100 flex items-center justify-center rounded-lg border border-gray-300">
              <span className="text-gray-500 text-center">
                Set location to view map
              </span>
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <LoadingSpinner text="Loading nearby places..." />
      ) : (
        searched && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2 text-[#FF6B35]">
              Nearby Places:
            </h3>
            {places.length > 0 ? (
              <ul className="space-y-2">
                {places.map((p) => (
                  <li key={p.id} className="p-2 border-b">
                    <div className="font-bold text-[#2F4156]">{p.name}</div>
                    <span className="text-sm text-gray-600">{p.address}</span>
                  </li>
                ))}
              </ul>
            ) : (
              searched && (
                <p className="text-[#2F4156]">No Nearby Places Found</p>
              )
            )}
          </div>
        )
      )}
    </div>
  );
};

export default NearbyPlaces;
