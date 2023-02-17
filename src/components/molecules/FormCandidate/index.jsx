import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './styles.module.scss'
import Button from "../../atoms/Button";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <label className={styles.formInputTitle}>Nome</label>
      <input className={styles.formInput} type="text" name="user_name"  />
      <label className={styles.formInputTitle} >Telefone</label>
      <input className={styles.formInput} type="number" name="number" />
      <label className={styles.formInputTitle} >E-mail</label>
      <input className={styles.formInput} type="email" name="user_email" />
      

      <Button className={styles.btnForm} >Submeter CV</Button>
      
    </form>
  );
};