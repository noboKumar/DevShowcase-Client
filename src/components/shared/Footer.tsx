import React from "react";
import Logo from "./Logo";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="mx-auto w-11/12">
        <div className="mb-6">
          <Logo />
          <p className="mt-4 w-xl text-gray-600">
            DevShowcase is the premium SaaS platform for developers to exhibit
            high-fidelity engineering projects and connect with top-tier tech
            companies.
          </p>
        </div>
        <div className="mb-6 text-center">
          <a href="/about" className="mx-4 text-blue-500 hover:underline">
            About Us
          </a>
          <a href="/contact" className="mx-4 text-blue-500 hover:underline">
            Contact
          </a>
          <a href="/privacy" className="mx-4 text-blue-500 hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="mx-4 text-blue-500 hover:underline">
            Terms of Service
          </a>
        </div>
        <div className="mb-6 text-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block text-gray-600 hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block text-gray-600 hover:text-blue-500"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block text-gray-600 hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block text-gray-600 hover:text-blue-500"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} DevShowcase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
