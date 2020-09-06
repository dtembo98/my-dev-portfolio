import React from 'react';
import Particles from '../particlesjs/Particle.component';
import './banner.style.css';
import ReactRotatingText from 'react-rotating-text';

const Banner = () => {
  return (
    <section className="home_banner_area">
      <Particles />
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner_content">
                <h3 className="text-uppercase">Hell0</h3>
                <h1 className="text-uppercase">I am David Tembo</h1>
                <h5 className="text-uppercase">
                  <ReactRotatingText
                    items={[
                      'software developer',
                      'data scientist',
                      'penetration tester',
                    ]}
                    className="react-rotating-text-cursor"
                  />
                </h5>
                <div className="d-flex align-items-center">
                  <a className="primary_btn" href="#">
                    <span>Hire Me</span>
                  </a>
                  <a className="primary_btn tr-bg" href="#">
                    <span>Get CV</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="home_right_img">
                <img className src="img/banner/home-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
