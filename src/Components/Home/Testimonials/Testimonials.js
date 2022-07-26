import React from "react";
import testimonials from "./Data";
import SingleTestimonial from "./SingleTestimonial";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  console.log(testimonials);
  const testimonialList = testimonials.map((testimonial) => (
    <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
  ));

  return (
    <>
      <section className={classes["testimonials_container"]} id="testimonials">
        <div className={classes["testimonial_sec"]}>
          <div className={classes["testimonial_heading"]}>
            <h5>Testimonials</h5>
            <h3>What our happy clients say about us</h3>
          </div>
          <div className={classes["testimonial_review-sec"]}>
            {testimonialList}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
