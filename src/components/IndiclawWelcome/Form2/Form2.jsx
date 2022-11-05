import React from "react";

import registerCoaches from "../../../assets/png/register-coaches.png";
import "./Form2.css";

function Form2() {
  return (
    <div className="form-container">
      <div className="register-text mobile-size-register-text">
        <h2> Register and Join With Indic Law </h2>
      </div>
      <div className="register-form">
        <h1>Register</h1>
        <form
          action="https://formsubmit.co/support@indiclaw.com"
          method="post"
          id="form-registration"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Website registeration"
          />
          <div className="txt-field">
            <input type="text" name="person" required />
            <label for="person">Name</label>
          </div>
          <div className="txt-field">
            <input type="email" name="email" required />
            <label for="email">Email</label>
          </div>
          <div className="txt-field">
            <input type="tel" name="phone" required />
            <label for="phone">Phone No</label>
          </div>
          <div className="txt-field">
            <select id="state" name="state">
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
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

export default Form2;
