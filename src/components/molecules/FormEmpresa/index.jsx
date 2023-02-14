
 import { useFormik } from 'formik';
import Button from '../../atoms/Button';
 import styles from './styles.module.scss'
 const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
      errors.firstName = 'Por favor insira um nome válido';
    }
  
    if (!values.number) {
      errors.number = 'Required';
    } else if (typeof(values.number) != number) {
      errors.number = 'Por favor insira apenas números';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

function SignupForm(){
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   const formik = useFormik({
     initialValues: {
       email: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
       console.log(values);
     },
   });
   return (
    
     <form className={styles.form} id="empresa" onSubmit={formik.handleSubmit}>
       <label htmlFor="name" className={styles.formInputTitle} >Nome</label>
       <input
       className={styles.formInput}
         id="name"
         name="name"
         type="text"
         placeholder='insira um nome válido'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
        
       />
      
       <label className={styles.formInputTitle} htmlFor="number">Número de contato</label>
       <input
        className={styles.formInput}
         id="number"
         name="number"
         type="number"
         placeholder='DDD + número'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.number}
        
       />
 <label className={styles.formInputTitle} htmlFor="email">E-mail</label>
       <input
        className={styles.formInput}
         id="email"
         name="email"
         type="email"
         placeholder='insira seu e-mail'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
 
       <Button type="submit" className={styles.btnForm}>Submeter CV</Button>
     </form>
     
   );
 };

 export default SignupForm