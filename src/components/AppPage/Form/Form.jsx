import React from "react";

import registerCoaches from "../../../assets/png/register-coaches.png";
import "./Form.css";

function Form() {
  return (
    <div className="form-container">
      <div className="register-text mobile-size-register-text">
        <h2> Register and Join With Indic Law </h2>
      </div>
      <div className="register-form">
        <h1>Register</h1>
        <form action="" method="post">
          <div className="txt-field">
            <input type="text" required />
            <label>Name</label>
          </div>
          <div className="txt-field">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="txt-field">
            <input type="tel" required />
            <label>Phone No</label>
          </div>
          <div className="txt-field">
            <select id="">
              <option value="alappuzha">Alappuzha</option>
              <option value="ernakulam">Ernakulam</option>
              <option value="idukki">Idukki</option>
              <option value="kannur">Kannur</option>
              <option value="kasaragod">Kasaragod</option>
              <option value="kollam">Kollam</option>
              <option value="kottayam">Kottayam</option>
              <option value="kozhikode">Kozhikode</option>
              <option value="malappuram">Malappuram</option>
              <option value="palakkad">Palakkad</option>
              <option value="pathanamthitta">Pathanamthitta</option>
              <option value="thiruvananthapuram">Thiruvananthapuram</option>
              <option value="thrissur">Thrissur</option>
              <option value="wayanad">Wayanad</option>
            </select>
            <label for="state">State</label>
          </div>
          {/* <div className="txt-field">
            <textarea type="textarea" required />
            <label>Message</label>
          </div> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="register-text normal-size-register-text">
        <h2> Register and Join With Indic Law </h2>
        <div className="coaches-img-container">
          <img src={registerCoaches} alt="Img Not Found" />
        </div>
      </div>
    </div>
  );
}

export default Form;
