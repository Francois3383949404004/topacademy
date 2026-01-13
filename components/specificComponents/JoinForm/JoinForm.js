import React, { useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import css from "./JoinForm.module.scss";

const JoinForm = ({ blok }) => {
  // State to handle form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    plan: "athlete", // Default selection
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Mock Submission (Since we don't have a backend yet)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    // In the future, you would send 'formData' to an API/Email service here.
  };

  return (
    <div className={css.wrapper} {...storyblokEditable(blok)}>
      <div className={css.container}>
        
        {/* Header Text */}
        <div className={css.header}>
          <h1>{blok.title || "Join the Team"}</h1>
          <p>{blok.description || "Start your training journey today."}</p>
        </div>

        {/* The Form */}
        <div className={css.formCard}>
          {submitted ? (
            <div className={css.successMessage}>
              <div className={css.checkIcon}>✓</div>
              <h3>Registration Received!</h3>
              <p>Welcome to the team, {formData.firstName}. We will contact you shortly.</p>
              <button onClick={() => setSubmitted(false)} className={css.resetBtn}>Register another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={css.row}>
                <div className={css.group}>
                  <label>First Name</label>
                  <input type="text" name="firstName" required placeholder="John" onChange={handleChange} />
                </div>
                <div className={css.group}>
                  <label>Last Name</label>
                  <input type="text" name="lastName" required placeholder="Doe" onChange={handleChange} />
                </div>
              </div>

              <div className={css.group}>
                <label>Email Address</label>
                <input type="email" name="email" required placeholder="john@example.com" onChange={handleChange} />
              </div>

              <div className={css.group}>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+1 (555) 000-0000" onChange={handleChange} />
              </div>

              <div className={css.group}>
                <label>Selected Plan</label>
                <select name="plan" onChange={handleChange} className={css.select}>
                  <option value="starter">The Starter (49€)</option>
                  <option value="athlete">The Athlete (79€)</option>
                  <option value="pro">The Pro (129€)</option>
                </select>
              </div>

              <button type="submit" className={css.submitBtn}>
                Complete Registration
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinForm;