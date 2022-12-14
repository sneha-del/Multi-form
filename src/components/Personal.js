import React from "react";

const Personal = ({ formData, setFormData }) => {
  return (
    <>
      <div className="personal-info-container">
        <input
          className="inp"
          type="text"
          placeholder="First Name..."
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
        <input
          className="inp"
          type="text"
          placeholder="Last Name..."
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
        <input
          className="inp"
          type="text"
          placeholder="Contact Number..."
          value={formData.username}
          onChange={(e) => {
            setFormData({ ...formData, username: e.target.value });
          }}
        />
      </div>
    </>
  );
};

export default Personal;
