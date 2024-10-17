import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import { Circle } from 'lucide-react';
import { Link } from 'lucide-react';
import { Smile } from 'lucide-react';
import farmScreenshot from './assets/img/25farmsscreenshot.png';
import oceanGuardScreenshot from './assets/img/oceanguardscreenshot.png';

function App() {

  return (
    <>
      <Header />
      <Layout>
        <div className="w-full h-screen flex flex-col justify-center items-start p-8 ">
          {/* Smooth scroll target */}
          <div id="about" className="mt-12 ml-8">
            <p className="text-sm text-gray-500 hover:text-gray-300 transition duration-300 ease-in-out">Hi, my name is</p>
            <h1 className="text-6xl font-bold text-gray-700 mt-4 hover:text-gray-100 transition duration-300 ease-in-out">Abdallah Hussein</h1>
            <h2 className="text-4xl font-semibold text-gray-600 mt-2 hover:text-gray-200 transition duration-300 ease-in-out">I build whatever I like on the web.</h2>
            <p className="text-lg text-gray-600 mt-6 max-w-xl hover:text-gray-400 transition duration-300 ease-in-out">
              I'm a web developer with a passion for creating engaging, accessible digital experiences. Currently, I'm working on building responsive and intuitive user interfaces, making sure they look great on all devices.
            </p>
          </div>
        </div>

        <div className="about-section max-w-3xl mx-auto text-left">
          {/* About Me Heading */}
          <h1 className="text-4xl font-bold text-indigo-500">
            <span className="text-indigo-500">1.</span> About Me
          </h1>
          <hr className="border-t-2 border-gray-300 my-4 w-1/4" />
          <br />

          {/* About Me Description */}
          <p className="mb-4 text-gray-600 text-lg hover:text-white-500">
            Hello! My name is Abdallah, and I enjoy building things on the web. My interest in web development started when I began experimenting with design and development, leading to a deeper understanding of creating engaging, accessible digital experiences.
          </p>

          <p className="mb-4 text-gray-600 text-lg">
            Fast-forward to today, I’ve worked on various projects, and my focus is currently on front-end development, working with a team on a full-stack library management system. I enjoy building responsive, intuitive user interfaces using modern technologies like React and Tailwind CSS.
          </p>

          <p className="mb-6 text-gray-600 text-lg">
            Here are a few technologies I’ve been working with recently:
          </p>

          {/* Technologies List in a Div with Border Radius and Grid Layout */}
          <div className="p-6 border-2 border-indigo-500 rounded-lg">
            <ul className="grid grid-cols-2 gap-4 text-gray-600 text-lg">
              <li className="flex items-center group hover:text-indigo-500 transition-all duration-300 ease-in-out">
                <Circle className="text-indigo-500 mr-2 group-hover:text-indigo-700" size={16} />
                JavaScript (ES6+)
              </li>
              <li className="flex items-center group hover:text-indigo-500 transition-all duration-300 ease-in-out">
                <Circle className="text-indigo-500 mr-2 group-hover:text-indigo-700" size={16} />
                React
              </li>
              <li className="flex items-center group hover:text-indigo-500 transition-all duration-300 ease-in-out">
                <Circle className="text-indigo-500 mr-2 group-hover:text-indigo-700" size={16} />
                Tailwind CSS
              </li>
              <li className="flex items-center group hover:text-indigo-500 transition-all duration-300 ease-in-out">
                <Circle className="text-indigo-500 mr-2 group-hover:text-indigo-700" size={16} />
                Axios
              </li>
              <li className="flex items-center group hover:text-indigo-500 transition-all duration-300 ease-in-out">
                <Circle className="text-indigo-500 mr-2 group-hover:text-indigo-700" size={16} />
                RESTful APIs
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-6">
          {/* Resume Header */}

          <h1 className="text-3xl font-bold text-[#6366F1] mb-4 ">2. My React Experience</h1>
          <hr className="border-t-2 border-gray-300 my-4 w-1/4 mx-auto" />
          <br />

          <p className="text-gray-300">A collection of my React projects that showcase my skills and experience.</p>


          {/* Section for React Projects */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {/* Project 1 */}
            <div className="bg-black/40 shadow-lg rounded-lg p-6 border border-white/20 hover:border-[#6366F1] transition-all duration-300">
              <h2 className="text-xl font-semibold text-[#6366F1]">Library Management System</h2>
              <p className="text-gray-300 mt-2">
                A full-stack library management application featuring a React front-end and RESTful API integration for managing books. The project uses Axios for data fetching and Tailwind for a modern UI.
              </p>
              <a
                href="/path-to-library-project"
                target="_blank"
                className="mt-4 inline-block text-white hover:text-[#6366F1] transition-colors duration-300"
              >
                View Project
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-black/40 shadow-lg rounded-lg p-6 border border-white/20 hover:border-[#6366F1] transition-all duration-300">
              <h2 className="text-xl font-semibold text-[#6366F1]">News and Live Scores Website</h2>
              <p className="text-gray-300 mt-2">
                A website developed using React and API integrations to display both the latest news and live sports scores in real-time.
              </p>
              <a
                href="/path-to-news-project"
                target="_blank"
                className="mt-4 inline-block text-white hover:text-[#6366F1] transition-colors duration-300"
              >
                View Project
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-black/40 shadow-lg rounded-lg p-6 border border-white/20 hover:border-[#6366F1] transition-all duration-300">
              <h2 className="text-xl font-semibold text-[#6366F1]">Portfolio Website</h2>
              <p className="text-gray-300 mt-2">
                A personal portfolio featuring smooth scrolling, responsive design, and interactive sections, inspired by Brittany Chiang's website. Includes dark and light mode toggle features.
              </p>
              <a
                href="/path-to-portfolio"
                target="_blank"
                className="mt-4 inline-block text-white hover:text-[#6366F1] transition-colors duration-300"
              >
                View Project
              </a>
            </div>

            {/* Project 4: Gender Prediction App */}
            <div className="bg-black/40 shadow-lg rounded-lg p-6 border border-white/20 hover:border-[#6366F1] transition-all duration-300">
              <h2 className="text-xl font-semibold text-[#6366F1]">Gender Prediction App</h2>
              <p className="text-gray-300 mt-2">
                A React-based gender prediction application that uses user input to predict gender based on name analysis. Built with a focus on user-friendly UI and smooth data processing.
              </p>
              <a
                href="/path-to-gender-prediction-app"
                target="_blank"
                className="mt-4 inline-block text-white hover:text-[#6366F1] transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>



        <div className="max-w-5xl mx-auto">
          {/* Projects Heading */}
          <h1 className="text-4xl font-bold text-indigo-500 text-center">
            3. PROJECTS
          </h1>
          <hr className="border-t-2 border-gray-300 my-4 w-1/4 mx-auto" />
          <br />

          {/* Project 1 */}
          <div className="mb-8">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
              src={farmScreenshot}
              alt="25 Farm website project"
            />
            <h4 className="text-2xl font-semibold text-gray-700 mt-4">25 Farm Website</h4>
            <button className="mt-4 inline-flex items-center px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-200">
              <a
                href="https://tardigrade180.github.io/farm-site/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Link className="mr-2" size={16} /> PREVIEW
              </a>
            </button>
          </div>

          {/* Project 2 */}
          <div className="mb-8">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
              src={oceanGuardScreenshot}
              alt="Ocean Guard project"
            />
            <h4 className="text-2xl font-semibold text-gray-700 mt-4">Ocean Guard Project</h4>
            <button className="mt-4 inline-flex items-center px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-200">
              <a
                href="https://tardigrade180.github.io/Anything/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Link className="mr-2" size={16} /> PREVIEW
              </a>
            </button>
          </div>
        </div>




        <div className="text-center">
          {/* Contact Heading */}
          <h1 className="text-4xl font-bold text-indigo-500">
            <span className="text-indigo-500">4.</span> CONTACT
          </h1>
          <hr className="border-t-2 border-gray-300 my-4 w-1/4 mx-auto" />
          <br />
          {/* Centered Text with Smiley Icon */}
          <h5 className="text-xl text-gray-600 hover:text-white">
            Looking forward to connecting <span><Smile className=" ml-[510px]" size={30} /></span>
          </h5>
        </div>
        <br />

        <div className="mt-8">
          {/* Contact Form */}
          <div className="form w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg border-4 border-indigo-500">
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />

              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />

              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />

              <input
                type="text"
                name="message"
                placeholder="Your Message"
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />

              <button className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default App;
