import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto text-center space-y-4">
        {/* Social Links */}
        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/Bikram1Biswas2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/bikrm.biawas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors text-blue-500"
          >
            <FaFacebook />
          </a>
        </div>
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Bikram Biswas. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
