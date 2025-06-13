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
  const [isSubmitted, setIsSubmitted] = useState(false);
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
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSubmit).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Une erreur est survenue");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
    setOpen(true);
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
          {!isSubmitted ? (
            <form
              name='contact'
              method='POST'
              data-netlify='true'
              netlify
              onSubmit={handleSubmit}
              className={open ? "form-visible" : "form-hidden"}>
              {/* Nécessaire pour le parsing du formulaire par Netlify */}
              <input type='hidden' name='form-name' value='contact' />

              <TextField
                type='text'
                label='_name'
                name='name'
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
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
                Envoyer-le-message
              </Button>
            </form>
          ) : (
            <div
              className='success-message'
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                padding: "40px",
              }}>
              <h2
                style={{
                  color: "var(--primitive-slate-50, #f8fafc)",
                  fontFamily: 'var(--font-family-text, "Fira Code")',
                  fontSize: "var(--font-size-heading-h4, 30px)",
                  fontWeight: "450",
                }}>
                Message envoyé ! 🤘
              </h2>
              <p
                style={{
                  color: "var(--theme-foreground, #90a1b9)",
                  fontFamily: 'var(--font-family-text, "Fira Code")',
                  fontSize: "var(--font-size-body-md, 16px)",
                  textAlign: "center",
                }}>
                Merci pour votre message. Je vous répondrai dans les plus brefs
                délais.
              </p>
              <Button
                onClick={handleNewMessage}
                variant='outlined'
                sx={{
                  borderColor: "#314158",
                  padding:
                    "var(--button-top-bottom, 10px) var(--button-left-right, 12px)",
                  color: " var(--primitive-slate-500, #62748E)",
                  "&:hover": {
                    borderColor: "#314158",
                    backgroundColor: "rgba(122, 70, 177, 0.1)",
                  },
                }}>
                Envoyer-un-nouveau-message
              </Button>
            </div>
          )}
        </section>
        {/* !!!!!!!!!!!!!!!!!!!section 3 !!!!!!!!!!!!!!!!!!!!!! */}
        <section className='section-3'>
          <div className='heade-div'></div>
          <div className='section-3-container-numero'>
            {[...Array(12)].map((_, index) => (
              <p key={index}>{index + 1}</p>
            ))}
          </div>
          <div className='section-3-container-main'>
            <p>
              <span className='keyword'>const</span>{" "}
              <span className='variable'>button</span> = document.querySelector(
              <span className='string'>'#sendBtn'</span>);
            </p>
            <p>
              <span className='keyword'>const</span>{" "}
              <span className='variable'>message</span> = {"{"}
              <span className='variable'>name</span>:{" "}
              <span className='string'>"{formData.name}"</span>,
              <span className='variable'>email</span>:{" "}
              <span className='string'>"{formData.email}"</span>,
              <span className='variable'>message</span>:{" "}
              <span className='string'>"{formData.message}"</span>,
              <span className='variable'>date</span>:{" "}
              <span className='string'>"Thu 21 Apr"</span>
              {"}"}
            </p>
            <p>
              <span className='variable'>button</span>.
              <span className='function'>addEventListener</span>(
              <span className='string'>'click'</span>, () ={">"}{" "}
              form.send(message));
            </p>
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
