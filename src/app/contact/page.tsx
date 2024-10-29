"use client";
import React from "react";
import "../../../public/style/contact.css";
import { useForm, ValidationError } from "@formspree/react";


export default function Contact() {
  const [state, handleSubmit] = useForm("mbljdbbl");

  return (
    <main className="contact">
      <section>
        <h1 className="contactHeading">Contact Me</h1>
        <p className="para">
          {`I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the methods below. `}{" "}
        </p>
      </section>
      <section>
        <form onSubmit={handleSubmit} className="form" method="post">
          {/* Name Field */}
          <div className="fields">
            <label htmlFor="name" className="names">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              required
              className="input"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="error"
            />
          </div>

          {/* Email Field */}
          <div className="fields">
            <label htmlFor="email" className="names">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
              className="input"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="error"
            />
          </div>


          {/* Message Field */}
          <div className="fields">
            <label htmlFor="message" className="names">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write Message"
              required
              className="input textarea"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="error"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={state.submitting} className="button">
            Send Message
          </button>
        </form>
        {state.succeeded && (
          <p className="success">Message Successfully Send.</p>
        )}
      </section>
    </main>
  );
}
