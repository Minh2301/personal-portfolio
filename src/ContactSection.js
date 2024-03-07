function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <h1>CONTACT</h1>
      <div className="contact-section-wrapper">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="access_key"
            value="ba197d34-8f3c-488e-95bd-598ee709393b"
          />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="contact-form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your mail"
            className="contact-form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-form-input contact-form-textarea"
            required
          ></textarea>
          <button type="submit" className="contact-form-button">
            Send Message
          </button>
        </form>
        <div className="contact-info-wrapper">
          <div className="contact-email">
            <h1 className="contact-header">My Email</h1>
            <a href="mailto:s4019811@rmit.edu.vn" className="contact-info">
              s4019811@rmit.edu.vn
            </a>
          </div>
          <div className="contact-other">
            <h1 className="contact-header">Other</h1>
            <a
              href="https://www.facebook.com/minh.tony.315/"
              className="contact-info"
            >
              Facebook
            </a>
            <a href="https://github.com/Minh2301" className="contact-info">
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
