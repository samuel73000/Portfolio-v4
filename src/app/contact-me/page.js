"use client";
import styles from "../../styles/contact-me.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function contactMe() {
  const [openContacts, setOpenContacts] = useState(false);

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
        className={open ? "form-visible" : "form-hidden"}>
        {/* Nécessaire pour le parsing du formulaire par Netlify */}
        <input type='hidden' name='form-name' value='contact' />

        <TextField
          type='text'
          label='Votre nom'
          name='name'
          fullWidth
          margin='normal'
        />

        <TextField
          label='Votre email'
          name='email'
          type='email'
          fullWidth
          margin='normal'
        />

        <TextField
          type='text'
          label='Votre message'
          name='message'
          multiline
          rows={4}
          fullWidth
          margin='normal'
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
