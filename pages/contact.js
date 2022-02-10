import MainLayout from "../components/MainLayout";
import Map from "../components/Map";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import useWindowSize from "../components/windowSize";

import { TextField, Button, MobileStepper } from "@mui/material";

const ContactDesktop = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_js4chue",
        "template_h3ih17x",
        form.current,
        "user_AvdqkQRo1Tj2mPGvjiX7N"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setSubject("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <h2>Contact us</h2>
        <div
          style={{
            width: "100%",
            width: 800,
            marginTop: -50,
          }}
        >
          <form
            onSubmit={sendEmail}
            ref={form}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 50,
              marginBottom: 50,
            }}
            id="contact-form"
          >
            <TextField
              label="Name"
              name="from_name"
              variant="outlined"
              className="contact-field"
              size="small"
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              margin="normal"
            />
            <TextField
              label="Email"
              name="user_email"
              variant="outlined"
              className="contact-field"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              margin="normal"
            />
            <TextField
              label="Subject"
              name="subject"
              variant="outlined"
              className="contact-field"
              size="small"
              fullWidth
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              margin="normal"
            />
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              className="contact-field"
              size="small"
              multiline
              rows={6}
              fullWidth
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              margin="normal"
            />
            <br />
            <div style={{ width: "40%" }}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                color="error"
                type="submit"
                onClick={sendEmail}
                form="email"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
        <div
          style={{
            width: "100%",
            height: 400,
            paddingLeft: 200,
            paddingRight: 200,
          }}
        >
          <Map />
        </div>
      </div>
    </MainLayout>
  );
};

const ContactMobile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_js4chue",
        "template_h3ih17x",
        form.current,
        "user_AvdqkQRo1Tj2mPGvjiX7N"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setSubject("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <h2>Contact us</h2>
        <div
          style={{
            width: "100%",
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: -50,
          }}
        >
          <form
            onSubmit={sendEmail}
            ref={form}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 50,
              marginBottom: 50,
            }}
            id="contact-form"
          >
            <TextField
              label="Name"
              name="from_name"
              variant="outlined"
              className="contact-field"
              size="small"
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              margin="normal"
            />
            <TextField
              label="Email"
              name="user_email"
              variant="outlined"
              className="contact-field"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              margin="normal"
            />
            <TextField
              label="Subject"
              name="subject"
              variant="outlined"
              className="contact-field"
              size="small"
              fullWidth
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              margin="normal"
            />
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              className="contact-field"
              size="small"
              multiline
              rows={6}
              fullWidth
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              margin="normal"
            />
            <br />
            <div style={{ width: "100%" }}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                color="error"
                type="submit"
                onClick={sendEmail}
                form="email"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
        <div
          style={{
            width: "100%",
            height: 700,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Map />
        </div>
      </div>
    </MainLayout>
  );
};

const Contact = () => {
  const size = useWindowSize();
  return (
    <div>{size.width > 850 ? <ContactDesktop /> : <ContactMobile />}</div>
  );
};

export default Contact;
