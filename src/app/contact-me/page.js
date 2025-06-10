"use client";
import styles from "../../styles/contact-me.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function contactMe() {
  const [openContacts, setOpenContacts] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("form-name", "contact");
    Object.keys(formData).forEach((key) => {
      formDataToSubmit.append(key, formData[key]);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (response.ok) {
        alert("Message envoyé avec succès!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section>
      <Header />
      <main className='main-contact'>
        <section className='section-1'>
          <div className='section-1-container-titre'>
            <p onClick={() => setOpenContacts((o) => !o)}>
              <img
                src='icon-arrow-about-pleine.svg'
                style={{
                  transform: openContacts ? "rotate(0deg)" : "rotate(270deg)",
                  transition: "transform 0.2s",
                }}
              />
              contacts
            </p>
          </div>
          <div
            className='section-1-container-texte'
            style={{
              display: openContacts ? "flex" : "none",
              flexDirection: "column",
              gap: "10px",
              paddingTop: openContacts ? "4px" : "0",
              paddingBottom: openContacts ? "12px" : "0",
            }}>
            <p>
              {" "}
              <img src='icon-mail-about.svg' /> samuelpouardpro@gmail.com
            </p>
            <p>
              {" "}
              <img src='icon-phone-about.svg' /> +33 7 43 33 55 48
            </p>
          </div>
        </section>

        <section className='section-2'>
          <form
            name='contact'
            method='POST'
            data-netlify='true'
            netlify-honeypot='bot-field'
            onSubmit={handleSubmit}
            className={open ? "form-visible" : "form-hidden"}>
            <input type='hidden' name='form-name' value='contact' />
            <input type='hidden' name='bot-field' />

            <TextField
              type='text'
              label='Votre nom'
              name='name'
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin='normal'
              required
            />

            <TextField
              label='Votre email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin='normal'
              required
            />

            <TextField
              type='text'
              label='Votre message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              margin='normal'
              required
            />

            <Button
              type='submit'
              variant='outlined'
              sx={{
                marginTop: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(122, 70, 177, 0.1)",
                },
              }}>
              Envoyer
            </Button>
          </form>
        </section>

        <section className='section-3'></section>
      </main>
      <Footer />
    </section>
  );
}
