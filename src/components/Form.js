import React, { useState } from "react";
import Personal from "./Personal";
import Signup from "./Signup";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    Mobile: "",
  });
  const [page, setPage] = useState(0);
  const FormTitles = ["Sign Up ", "Personal Details"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Signup formData={formData} setFormData={setFormData} />;
    } else {
      return <Personal formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="header">
          <h2>{FormTitles[page]}</h2>
          <div className="body">
            {PageDisplay()}
            <div className="footer">
              <button
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
              <button
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("FORM SUBMITTED");
                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
