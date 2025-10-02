import React, { useState, useEffect, useContext } from "react";
import UseSelectedPet from "../../hooks/UseSelectedPet";
import { UserPetsContext } from "../../contexts/UserPetsContext";
import toast from "react-hot-toast";
import UseUserPets from "../../hooks/UseUserPets";
import { confirmMessage } from "../../utils/confirmMessage";
import { toastPromise } from "../../utils/toastPromise";

const EditProfile = ({ open, setOpen }) => {
  const pet = UseSelectedPet();
  const pets = UseUserPets();
  const { editPet, setSelectedPet, setPets } = useContext(UserPetsContext);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      name: pet?.name || "",
      species: pet?.species || "",
      breed: pet?.breed || "",
      gender: pet?.gender || "",
      dateOfBirth: pet?.dateOfBirth || "",
      medicalHistory: pet?.medicalHistory || "",
      vaccinations: pet?.vaccinations || [],
      photo: pet?.photo || null,
    });
  }, [pet]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name?.trim()) newErrors.name = "Name is required";
    if (!formData.species?.trim()) newErrors.species = "Species is required";
    if (!formData.gender?.trim()) newErrors.gender = "Gender is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    return newErrors;
  };

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

  const handleAddVaccination = () => {
    setFormData((prev) => ({
      ...prev,
      vaccinations: [...(prev.vaccinations || []), ""],
    }));
  };

  const handleVaccinationChange = (index, value) => {
    const updated = [...formData.vaccinations];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, vaccinations: updated }));
  };

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

  const handleRemoveVaccination = (index) => {
    const updated = formData.vaccinations.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, vaccinations: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const willUpdate = await confirmMessage({
      text: "Are you sure you want to update your pet profile?",
      confirmText: "Yes",
      cancelText: "Cancel",
    });

    if (willUpdate) {
      const payload = {
        name: formData.name,
        species: formData.species,
        breed: formData.breed,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
      };
      toastPromise(editPet(pet?.id, payload), {
        loading: "Updating Pet Profile... ⏳",
        success: "Pet Profile updated successfully!",
        error: (err) =>
          err.response?.data?.message || "Updating profile failed ❌",
      });
    }
    reset();
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 overflow-y-auto">
        <div className="w-full max-w-4xl mx-4 my-6 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#2F4156] mb-4 text-center">
            Pet Information
          </h2>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Name
              </label>
              <input
                placeholder={pet?.name}
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleChange}
                className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14]"
              />
              <p className="text-red-500 text-xs h-4">{errors.name}</p>
            </div>

            {/* Species */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Species
              </label>
              <input
                placeholder={pet?.species}
                name="species"
                value={formData?.species || ""}
                onChange={handleChange}
                className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14]"
              ></input>
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
                value={formData?.breed || ""}
                placeholder={pet?.breed || "Breed"}
                onChange={handleChange}
                className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14]"
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
                value={formData?.gender || ""}
                onChange={handleChange}
                className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14]"
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <p className="text-red-500 text-xs h-4">{errors.gender}</p>
            </div>

            {/* dateOfBirth */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                placeholder={pet?.dateOfBirth || "Birthday"}
                value={formData?.dateOfBirth || ""}
                onChange={handleChange}
                className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14]"
              />
              <p className="text-red-500 text-xs h-4">{errors.dateOfBirth}</p>
            </div>

            {/* Photo */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Photo
              </label>
              <input
                type="file"
                accept="image/*"
                name="photo"
                onChange={handleChange}
                className="w-full px-4 py-2 border text-[#2f415677] rounded-lg cursor-pointer focus:ring-1 focus:ring-[#FD7E14]"
              />
              <p className="text-red-500 text-xs h-4">{errors.photo}</p>
            </div>

            {/* Medical History */}
            <div className="md:col-span-2">
              <label className="block text-[#2F4156] font-medium text-sm">
                Medical History
              </label>
              <textarea
                rows="3"
                name="medicalHistory"
                placeholder={pet?.medicalHistory || "Medical History"}
                value={formData?.medicalHistory || ""}
                onChange={handleChange}
                className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14]"
              />
            </div>

            {/* Vaccinations */}
            <div className="md:col-span-2">
              <label className="block text-[#2F4156] font-medium text-sm">
                Vaccination Dates
              </label>
              <div className="space-y-2">
                {formData?.vaccinations?.map((date, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) =>
                        handleVaccinationChange(index, e.target.value)
                      }
                      className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14]"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveVaccination(index)}
                      className="px-2 py-1 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleAddVaccination}
                className="mt-2 text-sm text-[#FD7E14] hover:underline"
              >
                + Add another date
              </button>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                onClick={() => {
                  setOpen(false);
                  reset();
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#FD7E14] text-white hover:bg-[#e86f0d] transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EditProfile;
