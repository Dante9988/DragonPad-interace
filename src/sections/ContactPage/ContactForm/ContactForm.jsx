import Button from "components/button";
import ContactFormStyleWrapper from "./ContactForm.style";

const ContactForm = () => {
  return (
    <ContactFormStyleWrapper>
      <div className="contact_form">
        <h3 className="from_title">Leave a Message</h3>

        <div className="contact_user_form">
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="e.g.  Smith"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="e.g.  Smith"
                  className="form-control"
                />
              </div>
            </div>
            <div className="input_field_wrapper form-group col-md-12">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="e.g.  example@gmail.com"
                className="form-control"
              />
            </div>
            <div className="input_field_wrapper form-group col-md-12">
              <label htmlFor="phone">Phone (Optional)</label>
              <input
                type="text"
                id="phone"
                placeholder="e.g. +855 2586 25866"
                className="form-control"
              />
            </div>
            <div className="input_field_wrapper form-group col-md-12">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Type your message"
              ></textarea>
            </div>
          </form>
        </div>

        <Button variant="blue" href="# ">Send Message</Button>
      </div>
    </ContactFormStyleWrapper>
  );
};

export default ContactForm;
