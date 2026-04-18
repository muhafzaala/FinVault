import React, { useState, useContext } from "react";
import { UserProfileContext } from "../context/UserProfileContext";

const ProfileForm = () => {
  const { profile, setProfile } = useContext(UserProfileContext);

  const [formData, setFormData] = useState({
    age: profile?.age || "",
    income: profile?.income || "",
    riskTolerance: profile?.riskTolerance || "medium",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <h2>User Profile</h2>

      <label>Age</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />

      <label>Income</label>
      <input
        type="number"
        name="income"
        value={formData.income}
        onChange={handleChange}
      />

      <label>Risk Tolerance</label>
      <select
        name="riskTolerance"
        value={formData.riskTolerance}
        onChange={handleChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm;