import "./App.css";
import Header from "./components/Header";
import Layout from "./assets/layouts/Layout";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PortfolioProjects from "./components/PortfolioProject";
import ProjectList from "./components/ProjectList";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <div className="space-y-12">
          <section id="about"><AboutMe /></section>
          <section id="technologies"><Technologies /></section>
          <section id="projects"><PortfolioProjects /><ProjectList /></section>
          <section id="contact"><Contact /></section>
          <Footer />
        </div>
      </Layout>
    </>
  );
}

export default App;
