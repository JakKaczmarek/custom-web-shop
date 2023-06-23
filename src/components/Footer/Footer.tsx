import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

export default function Footer() {
  return (
    <div className="container-fluid">
      <footer className="text-white text-center text-lg-start bg-dark">
        <div className="container p-2">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About us</h5>

              <p>
                At eBike, we specialize in a wide range of electric bikes for
                every riders needs. Whether you are a city dweller or an outdoor
                enthusiast, we have the perfect e-bike for you
              </p>

              <p>
                Explore our curated selection of top-quality brands, from
                stylish urban cruisers to rugged mountain e-bikes, suited for
                any lifestyle and terrain.
              </p>

              <div className="mt-4">
                <a
                  href="/"
                  type="button"
                  className="btn btn-floating btn-light btn-lg"
                >
                  <FacebookIcon />
                  <i className="fab" />
                </a>
                <a
                  href="/"
                  type="button"
                  className="btn btn-floating btn-light btn-lg"
                >
                  <GitHubIcon />
                  <i className="fab" />
                </a>
                <a
                  href="/"
                  type="button"
                  className="btn btn-floating btn-light btn-lg"
                >
                  <TwitterIcon />
                  <i className="fab" />
                </a>
                <a
                  href="/"
                  type="button"
                  className="btn btn-floating btn-light btn-lg"
                >
                  <GoogleIcon />
                  <i className="fab" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">CONTACT</h5>

              <ul className="fa-ul">
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-home" />
                  </span>
                  <span className="ms-2">Warsaw, 00-967, Poland</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-envelope" />
                  </span>
                  <span className="ms-2">ebike@example.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-phone" />
                  </span>
                  <span className="ms-2">+48 100 989 001</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Opening hours</h5>

              <table className="table text-center text-white">
                <tbody className="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center p-3">
          © 2020 Copyright:
          <a className="text-white" href="http://localhost:3000">
            eBike.com
          </a>
        </div>
      </footer>
    </div>
  );
}
