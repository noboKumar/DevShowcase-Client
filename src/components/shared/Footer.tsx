import React from "react";
import Logo from "./Logo";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-slate-900">
      <div className="mx-auto w-11/12">
        {/* top section */}
        <div className="mb-6 flex flex-col items-center  md:items-start">
          <Logo />
          <p className="mt-4 text-center md:text-start text-gray-600 md:w-xl dark:text-slate-400">
            DevShowcase is the premium SaaS platform for developers to exhibit
            high-fidelity engineering projects and connect with top-tier tech
            companies.
          </p>
        </div>

        {/* links */}
        <div className="mb-6 text-center">
          <a
            href="/about"
            className="mx-4 text-blue-500 hover:underline dark:text-blue-400"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="mx-4 text-blue-500 hover:underline dark:text-blue-400"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="mx-4 text-blue-500 hover:underline dark:text-blue-400"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="mx-4 text-blue-500 hover:underline dark:text-blue-400"
          >
            Terms of Service
          </a>
        </div>

        {/* social icons */}
        <div className="mb-6 text-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block text-gray-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block text-gray-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block text-gray-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 inline-block text-gray-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* bottom */}
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} DevShowcase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
