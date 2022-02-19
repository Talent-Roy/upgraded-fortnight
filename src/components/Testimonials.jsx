import React from "react";
import "../static/styles/components/testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonial">
        <blockquote>
          <p className="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem quaerat dolore veniam tenetur labore minus voluptate, harum
            ducimus quibusdam.
          </p>
        </blockquote>
        <div className="details">
          <i>Lorem, ipsum.</i>

          <img
            src={require("../static/images/amazon.png")}
            alt="kaapo user review"
          />
        </div>
      </div>

      <div className="testimonial">
        <blockquote>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a est
            impedit cumque tempore quidem, neque perspiciatis maxime, facere,
            laboriosam culpa fugiat non veniam enim.
          </p>
        </blockquote>
        <div className="details">
          <i>Lorem, ipsum.</i>
          <img
            src={require("../static/images/amazon.png")}
            alt="kaapo user review"
          />
        </div>
      </div>

      <div className="testimonial">
        <blockquote>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a est
            impedit cumque tempore quidem, neque perspiciatis maxime, facere,
            laboriosam culpa fugiat non veniam enim.
          </p>
        </blockquote>
        <div className="details">
          <i>Lorem, ipsum.</i>
          <img
            src={require("../static/images/amazon.png")}
            alt="kaapo user review"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
