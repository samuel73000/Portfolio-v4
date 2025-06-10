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
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (response.ok) {
        alert("Message envoyé avec succès!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Une erreur est survenue");
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

        {/*!!!!!!!!!!!!!!!!!!!!!! section 2 !!!!!!!!!!!!!!!!!! */}
        <section className='section-2'>
          <div className='heade-div'></div>
          <form
            name='contact'
            method='POST'
            data-netlify='true'
            netlify
            className={open ? "form-visible" : "form-hidden"}>
            {/* Nécessaire pour le parsing du formulaire par Netlify */}
            <input type='hidden' name='form-name' value='contact' />

            <TextField
              type='text'
              label='_name'
              name='name'
              fullWidth
              margin='normal'
              sx={{
                backgroundColor: "black",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#314158" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root": {
                  color: " var(--primitive-slate-500, #62748E)",
                },
                "& .MuiInputBase-input": {
                  color: " var(--primitive-slate-500, #62748E)",
                },
              }}
            />

            <TextField
              label='_email'
              name='email'
              type='email'
              fullWidth
              margin='normal'
              sx={{
                backgroundColor: "black",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#314158" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root": {
                  color: " var(--primitive-slate-500, #62748E)",
                },
                "& .MuiInputBase-input": {
                  color: " var(--primitive-slate-500, #62748E)",
                },
              }}
            />

            <TextField
              type='text'
              label='_message'
              name='message'
              multiline
              rows={4}
              fullWidth
              margin='normal'
              sx={{
                backgroundColor: "black",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#314158" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root": {
                  color: " var(--primitive-slate-500, #62748E)",
                },
                "& .MuiInputBase-input": {
                  color: " var(--primitive-slate-500, #62748E)",
                },
              }}
            />

            <Button
              type='submit'
              variant='outlined'
              sx={{
                marginTop: "1rem",
                borderColor: "#314158",
                padding:
                  "var(--button-top-bottom, 10px) var(--button-left-right, 12px)",
                color: " var(--primitive-slate-500, #62748E)",

                "&:hover": {
                  borderColor: "#314158",
                  backgroundColor: "rgba(122, 70, 177, 0.1)",
                },
              }}>
              submit-message
            </Button>
          </form>
        </section>
        {/* !!!!!!!!!!!!!!!!!!!section 3 !!!!!!!!!!!!!!!!!!!!!! */}
        <section className='section-3'>
        <div className='heade-div'></div>
          <div className='section-3-container-numero'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
          </div>
          <div className='section-3-container-main'>
            <p>const button = document.querySelector('#sendBtn');</p>
            <p>
              const message = name: "Jonathan Davis", email: "", message: "",
              date: "Thu 21 Apr"
            </p>
            <p>button.addEventListener'click', form.send(message);</p>
          </div>

          <div className='section-3-container-right'>
            <div className='section-3-container-right-content'></div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
