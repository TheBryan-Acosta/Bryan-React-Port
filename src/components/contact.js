import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {register, handleSubmit, formState: { errors }} = useForm();

  const serviceID = "service_kqshg2a";
  const templateID = "template_t04pngc";
  const userID = "user_SOokSmosxIVMTDY9YL4vd";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfuly!");
      })
      .catch((err) => console.error(`Something went wrong" ${err}`));
  };

  return (
    <div id="contact" className="contacts">
      <div className="contacts">
        <div className="text-center">
          <h1>contact me</h1>
          <p>
            If you wish to contact me for any reason please fill out the form
            below!
          </p>
          <span className="success-message">{successMessage}</span>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="text-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("name", {
                      required: "Please enter your name",
                      maxLength: {
                        value: 20,
                        message:
                          "Please enter a name with fewer than 20 characters",
                      },
                    })}
                  ></input>
                  <div className="line"></div>
                </div>

                <span className="error-message">
                  {errors.name && errors.name.message}
                </span>
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                ></input>

                <input
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                ></input>

                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                ></input>
              </div>
              <div className="col-md-6 col-xs-12">
                <textarea
                  id="textarea"
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  name="description"
                ></textarea>
                <button className="btn-main-offer contact-btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
