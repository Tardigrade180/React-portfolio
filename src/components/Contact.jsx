import React from 'react';
import { Smile } from 'lucide-react';

const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-indigo-500">
        <span className="text-indigo-500">4.</span> CONTACT
      </h1>
      <hr className="border-t-2 border-gray-300 my-4 w-1/4 mx-auto" />
      <h5 className="text-xl text-gray-600">
        Looking forward to connecting <Smile className="ml-5" size={30} />
      </h5>
      <ContactForm />
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="mt-8">
      <div className="form w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg border-4 border-indigo-500">
        <form className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          <input type="text" name="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          <input type="text" name="phone" placeholder="Your Phone" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          <input type="text" name="message" placeholder="Your Message" className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md" />
          <button className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
