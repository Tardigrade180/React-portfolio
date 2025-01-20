import './App.css';
import Header from './components/Header';
import Layout from './assets/layouts/Layout';
import AboutMe from './components/AboutMe';  // Add AboutMe component
import Contact from './components/Contact';  // Add Contact component
import Footer from './components/Footer';  // Add Footer component
import PortfolioProjects from './components/PortfolioProject';  // Add PortfolioProjects component
import ProjectList from './components/ProjectList';  // Add ProjectList component
import Technologies from './/components/Technologies';
function App() {
  return (
    <>
      <Header />
      <Layout>
        <div className="space-y-12"> {/* Add spacing between sections */}
          <AboutMe />
          <Technologies/>
          <PortfolioProjects />
          <ProjectList />
          <Contact />
          <Footer />
        </div>
      </Layout>
    </>
  );
}

export default App;
