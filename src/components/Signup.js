import React from "react";

const Signup = ({ formData, setFormData }) => {
  return (
    <>
      <div className="sign-up-container">
        <input
          className="inp"
          type="text"
          placeholder="Email..."
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <input
          className="inp"
          type="text"
          placeholder="Password..."
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        <input
          className="inp"
          type="text"
          placeholder="Confirm Password..."
          value={formData.confirmPassword}
          onChange={(event) =>
            setFormData({ ...formData, confirmPassword: event.target.value })
          }
        />
      </div>
    </>
  );
};

export default Signup;
