import React, { useState } from "react";


const HireMe = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hi, I'm ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;

    const whatsappURL = `https://wa.me/919369941973?text=${text}`;

    window.open(whatsappURL, "_blank");
   
  };

  return (
    <section className="min-h-screen bg-gray-100 text-black px-6 md:px-20 py-20">
      
      {/* Heading */}
      <div className="mb-2  w-fit">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-900 to-sky-100 underline">
          Get In Touch
        </h2>
        <p className="text-gray-500 mt-2 text-lg">
          I’m open to freelance & full-time opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 ">
        
        {/* LEFT */}
        <div className="space-y-2">
          <h3 className="text-2xl font-medium">Contact Information</h3>

          <div className="space-y-2 text-gray-600">
            <p>
              Email <br />
              <span className="text-black font-medium">
                ✉️ ankityadavpvs@gmail.com
              </span>
            </p>

            <p>
              Phone <br />
              <span className="text-black font-medium">
                📞  +91 9369941973
              </span>
            </p>
          </div>

          <div>
            <p className=" text-gray-600  ">Social</p>
             <div className="flex gap-6 ">
          
         <a href="https://www.linkedin.com/in/ankit-webdev/" target="_blank" rel="noreferrer"
          className="text-2 text-3xl  text-blue-700  hover:scale-120 transition-all duration-300"
          >
    <i className="ri-linkedin-box-fill"></i>
  </a>
        <a
  href="https://github.com/ankitshere"
  target="_blank"
  rel="noopener noreferrer"
  className="text-2 text-3xl  text-gray-500  hover:scale-120 transition-all duration-300"
>
  <i className="ri-github-fill"></i>
</a>
        
        </div>
          </div>
        </div>

        {/* RIGHT (FORM) */}
        <div className="bg-white p-8 rounded-2xl border border-blue-700  shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block mb-2 text-sm text-gray-500">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-500">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-2xl border border-blue-300 bg-linear-to-r from-blue-300 via-purple-200 font-medium"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default HireMe;