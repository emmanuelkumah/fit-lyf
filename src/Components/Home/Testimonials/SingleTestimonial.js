import React from "react";
import classes from "./Testimonials.module.css";

const SingleTestimonial = ({ testimonial }) => {
  const { name, title, review, img } = testimonial;
  return (
    <>
      <section className={classes.review}>
        <img src={img} alt={img} className={classes.review_img} />
        <p>{name}</p>
        <p>{title}</p>
        <p>{review}</p>
      </section>
    </>
  );
};

export default SingleTestimonial;
