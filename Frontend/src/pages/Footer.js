import React from "react";
import image from "./logoo.png";
const Footer = () => {
  return (
    <div>
      <footer class="bg-dark text-white mt-5">
        <div class="container-fluid">
          <div class="row text-center">
            <div class="col-md-4 column">
              <a href="./pages/login.html" target="_blank">
                <img src={image} alt="logo" class="footer_icon" />
              </a>
              <p class="footer_text">Powered by Sandhu Cars</p>
              <div id="social">
                <i class="fab fa-facebook" aria-hidden="true"></i>
                <i class="fab fa-twitter" aria-hidden="true"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube" aria-hidden="true"></i>
              </div>
            </div>
            <div class="col-md-4 column">
              <hr class="lines w-75" />
              <h3 class="footer_header">Helpful Links</h3>
              <hr class="lines w-75" />
              <a href="" class="footer_links">
                Computer Accessories
              </a>
              <a href="" class="footer_links">
                Security Cameras
              </a>
              <a href="" class="footer_links">
                Top Picks
              </a>
              <a href="" class="footer_links">
                New Arrivals
              </a>
            </div>

            <div class="col-md-4 column">
              <hr class="lines w-75" />
              <h3 class="footer_header">Contact Us</h3>
              <hr class="lines w-75" />
              <a href="tel:+923320032005" class="footer_links">
                +923320032005
              </a>
              <a href="mailto:webmaster@example.com" class="footer_links">
                Mail Us
              </a>
              <a href="" class="footer_simple_links">
                100 Street Name
              </a>
              <a href="" class="footer_simple_links">
                City, State, 000000
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
