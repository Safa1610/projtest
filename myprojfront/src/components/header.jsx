import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";

const HeaderFirst = () => {
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/we-are-hiring-digital-collage_23-2149667034.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "3rem", fontWeight: "bold" }}
        >
          Welcome to My Website
        </motion.h1>
      </div>
    </>
  );
};

export default HeaderFirst;
