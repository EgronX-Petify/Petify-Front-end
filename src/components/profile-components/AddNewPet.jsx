import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { UserPetsContext } from "../../contexts/UserPetsContext";

function AddNewPet({ open, setOpen }) {
  const { setPets, createPet } = useContext(UserPetsContext);

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    gender: "",
    dateOfBirth: "",
    medicalHistory: "",
    vaccinations: [],
    photo: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files[0]) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        photo: URL.createObjectURL(file),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.species.trim()) newErrors.species = "Species is required.";
    if (!formData.breed.trim()) newErrors.breed = "Breed is required.";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.photo) newErrors.photo = "Photo is required.";
    if (formData.vaccinations.some((v) => !v)) {
      newErrors.vaccinations = "All vaccination dates must be filled.";
    }
    return newErrors;
  };

  function handleVaccinationChange(index, value) {
    const updated = [...formData.vaccinations];
    updated[index] = value;
    setFormData({ ...formData, vaccinations: updated });
  }

  function addVaccination() {
    setFormData((prev) => ({
      ...prev,
      vaccinations: [...prev.vaccinations, ""],
    }));
  }

  function removeVaccination(index) {
    const updated = formData.vaccinations.filter((_, i) => i !== index);
    setFormData({ ...formData, vaccinations: updated });
  }

  function reset() {
    setFormData({
      name: "",
      species: "",
      breed: "",
      gender: "",
      dateOfBirth: "",
      medicalHistory: "",
      vaccinations: [],
      photo: null,
    });
    setErrors({});
    setOpen(false);
  }

  const handleAddNewPet = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const payload = {
      name: formData.name,
      species: formData.species,
      breed: formData.breed,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
    };
    try {
      const { data } = await createPet(payload);
      // toast.success("Pet Added Successfully!");
    } catch (error) {
      console.log(error.response);
    } finally {
      reset();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 overflow-y-auto">
      <div className="w-full max-w-3xl mx-4 my-6 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-[#FD7E14] mb-4 text-center">
          Add New Pet
        </h2>

        <form
          onSubmit={handleAddNewPet}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Name */}
          <div>
            <label className="block text-[#2F4156] font-medium text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Pet name"
              className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
            />
            <p className="text-red-500 text-xs h-4">{errors.name}</p>
          </div>

          {/* Species */}
          <div>
            <label className="block text-[#2F4156] font-medium text-sm">
              Species
            </label>
            <input
              type="text"
              name="species"
              value={formData.species}
              onChange={handleChange}
              placeholder="Dog, Cat, Rabbit..."
              className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
            />
            <p className="text-red-500 text-xs h-4">{errors.species}</p>
          </div>

          {/* Breed */}
          <div>
            <label className="block text-[#2F4156] font-medium text-sm">
              Breed
            </label>
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              placeholder="Golden Retriever, Persian..."
              className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
            />
            <p className="text-red-500 text-xs h-4">{errors.breed}</p>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-[#2F4156] font-medium text-sm">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* dateOfBirth */}
          <div>
            <label className="block text-[#2F4156] font-medium text-sm">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
            />
            <p className="text-red-500 text-xs h-4">{errors.dateOfBirth}</p>
          </div>

          {/* Medical History */}
          <div className="md:col-span-2">
            <label className="block text-[#2F4156] font-medium text-sm">
              Medical History
            </label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              placeholder="Any previous illnesses, surgeries..."
              rows="2"
              className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
            ></textarea>
          </div>

          {/* Vaccinations */}
          <div className="md:col-span-2">
            <label className="block text-[#2F4156] font-medium text-sm">
              Vaccination Dates
            </label>
            <div className="space-y-2">
              {formData.vaccinations.map((date, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) =>
                      handleVaccinationChange(index, e.target.value)
                    }
                    className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => removeVaccination(index)}
                    className="cursor-pointer px-2 h-fit py-1 text-sm rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b]"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addVaccination}
              className="cursor-pointer mt-1 text-sm text-[#FD7E14] hover:underline"
            >
              + Add another date
            </button>
            <p className="text-red-500 text-xs h-4">{errors.vaccinations}</p>
          </div>

          {/* Photo */}
          <div className="md:col-span-2">
            <label className="block text-[#2F4156] font-medium text-sm">
              Photo
            </label>
            <input
              type="file"
              accept="image/*"
              name="photo"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg cursor-pointer focus:ring-1 focus:ring-[#FD7E14]"
            />
            <p className="text-red-500 text-xs h-4">{errors.photo}</p>
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
            <button
              type="button"
              className="w-full sm:w-fit cursor-pointer px-5 py-2 rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b]"
              onClick={reset}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-fit cursor-pointer px-5 py-2 rounded-lg bg-[#2F4156] text-white hover:bg-[#1f2d3a]"
            >
              Add Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewPet;
