import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/navbar";
import Register from "./components/register";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/homePage";
import Login from "./components/loginForm";
import Offres from "./pages/offres";
import ContactForm from "./components/contactForm";
import JobDetails from "./pages/jobDetails";
import Footer from "./components/footer";
import jobsData from "./jobs";
import Filter from "./pages/filterjsx";
import CandidateDashboard from "./pages/candidateDashboard";
import SocieteDashboard from "./pages/societeDashboard";
import CompaniesListing from "./pages/companiesListing";
import ProfileSettings from "./pages/profileSettings";

function App() {
  const [jobs, setJobs] = useState(jobsData); // Holds all jobs
  const [filtered, setFiltered] = useState(jobsData); // Holds filtered jobs
  return (
    <>
      <NavbarTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/offres"
            element={<Offres jobs={jobs} setFiltered={setFiltered} />}
          />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/job/:id" element={<JobDetails jobs={jobs} />} />
          <Route path="/dashutil" element={<CandidateDashboard />} />
          <Route path="/dashsoc" element={<SocieteDashboard />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/companies" element={<CompaniesListing />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
