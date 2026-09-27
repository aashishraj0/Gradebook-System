import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function GradebookFooter() {
  return (
    <footer>
      <div class="footer-icon">
        <a href="https://www.facebook.com/aashis.shertha">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/aashish_shrestha5/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/aashishrajshrestha/">
          <FaLinkedin />
        </a>
      </div>
      <p>Copyright &copy; <time datetime="1914-12-20">2023</time> | All rights reserved | Privacy Policy | Terms & Condition</p>
    </footer>
  );
}