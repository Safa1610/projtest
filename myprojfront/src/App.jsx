import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/navbar";
import Register from "./components/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Login from "./components/loginForm";
import Offres from "./pages/offres";
import ContactForm from "./components/contactForm";
import JobDetails from "./pages/jobDetails";
import Footer from "./components/footer";
import CandidateDashboard from "./pages/candidateDashboard";
import SocieteDashboard from "./pages/societeDashboard";
import CompaniesListing from "./pages/companiesListing";
import ProfileSettings from "./pages/profileSettings";
import LoginCompanyForm from "./components/LoginCompanyForm";
import RegisterCompanyForm from "./components/registerCompanyForm";
import AddJob from "./pages/addJob";
import Myjobs from "./pages/Myjobs";
import Seecandidates from "./pages/Seecandidates";
import Application from "./pages/Application";
import ChangeCV from "./pages/ChangeCV";

function App() {
  return (
    <>
      <NavbarTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginCompany" element={<LoginCompanyForm />} />
          <Route path="/registerCompany" element={<RegisterCompanyForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/offres" element={<Offres />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/dashutil" element={<CandidateDashboard />} />
          <Route path="/dashsoc" element={<SocieteDashboard />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/companies" element={<CompaniesListing />} />
          <Route path="/add_job" element={<AddJob />} />
          <Route path="/myjobs" element={<Myjobs />} />
          <Route path="/candidates/:id" element={<Seecandidates />} />
          <Route path="/applications" element={<Application />} />
          <Route path="/changeCV" element={<ChangeCV />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
