"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const ContactForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    legalChecked: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
 
    // Basic validation
    const { firstName, lastName, email, phone, message, legalChecked } =
      formData;
  
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !message ||
      !legalChecked
    ) {
     
      // Show SweetAlert 2 alert if any field is empty
      Swal.fire({
        icon: "error",
        text: t("ContactForm:error"),
      });
      return;
    }
  
    try {
      setLoading(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
  
      // Show success message if email was sent successfully
      Swal.fire({
        icon: 'success',
        title: t("ContactForm:success_title"),
        text: t("ContactForm:success_message"),
      });


    } catch (error) {
      setLoading(false);
      console.error('Error sending email:', error);
      // Show error message if sending email failed
      Swal.fire({
        icon: 'error',
        text: 'Failed to send email',
      });
    }
    
    setLoading(false);
  };


  return (
    <section className="flex flex-col bg-lighterBlack p-5 lg:p-24" id="contact">
      <div className="flex flex-col lg:flex-row my-12 justify-evenly">
        <div className="flex flex-col mx-auto my-10 max-w-[40rem] lg:px-10">
          <h3 className="text-white uppercase text-[1.5rem]">
            {t("ContactForm:contact_title")}
          </h3>
          <h4 className="text-white font-[600] mt-5 mb-2">
            {t("ContactForm:contact_sub_title")}
          </h4>
          <p className="text-white text-[0.9rem] mt-5">
            {t("ContactForm:contact_text")}
          </p>
          <h4 className="text-white text-[0.9rem] my-10">
            {t("ContactForm:contact_motto")}
          </h4>
        </div>
        <div className="flex flex-col mx-auto w-full">
          <input
            name="firstName"
            type="text"
            className="contact-input"
            title={t("ContactForm:contact_first_name")}
            placeholder={t("ContactForm:first_name")}
            onChange={handleInputChange}
          />
          <input
            name="lastName"
            type="text"
            className="contact-input"
            title={t("ContactForm:last_name")}
            placeholder={t("ContactForm:last_name")}
            onChange={handleInputChange}
          />
          <input
            name="email"
            type="text"
            className="contact-input"
            title={t("ContactForm:email")}
            placeholder={t("ContactForm:email")}
            onChange={handleInputChange}
          />
          <input
            name="phone"
            type="text"
            className="contact-input"
            title={t("ContactForm:phone")}
            placeholder={t("ContactForm:phone")}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <textarea
          name="message"
          className="contact-message"
          title={t("ContactForm:message")}
          placeholder={t("ContactForm:message")}
          onChange={handleInputChange}
        ></textarea>

        <div className="my-7">
          <input
            name="legalChecked"
            type="checkbox"
            id="box-1"
            title={t("ContactForm:legal_text")}
            onChange={handleInputChange}
          />
          <label htmlFor="box-1">{t("ContactForm:legal_text")}</label>
        </div>
        {loading ? ( // Render spinner if loading is true
          <button type="button" className="sending-button flex flex-row text-center">
             {t("ContactForm:sending")}
             <span className="loader m-auto"></span>
          </button>
        ) : (
          <button
            type="submit"
            className="send-button mx-auto my-10"
            onClick={handleSubmit}
          >
            {t("ContactForm:send")}
          </button>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
