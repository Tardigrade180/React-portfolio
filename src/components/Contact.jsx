import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Smile } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // your service ID
        "YOUR_TEMPLATE_ID", // your template ID
        formData,
        "YOUR_USER_ID" // your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="py-12 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold">
          <span className="text-white"></span> CONTACT
        </h1>
        <hr className="border-t-2 border-white/20 my-4 w-1/4 mx-auto" />
        <h5 className="text-xl text-white/70">
          Looking forward to connecting{" "}
          <Smile className="ml-2 inline-block" size={30} />
        </h5>
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

const ContactForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="mt-8">
      <div className="form w-full max-w-lg mx-auto p-6 bg-black text-white shadow-md rounded-lg border-4 border-white/20">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-white/30 rounded-md text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-white/30 rounded-md text-black"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-white/30 rounded-md text-black"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 px-4 py-3 border border-white/30 rounded-md text-black"
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
