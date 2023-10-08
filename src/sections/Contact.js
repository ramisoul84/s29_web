import "./contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <h5>CONTACT US</h5>
      <form>
        <label>name</label>
        <input type="text" name="name" />
        <label>e-mail</label>
        <input type="email" name="email" />
        <label>how can we help you?</label>
        <div className="container">
          <textarea />
          <div className="textarea-sq"></div>
        </div>
      </form>
    </section>
  );
};
export default Contact;
