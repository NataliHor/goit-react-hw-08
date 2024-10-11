import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in the format 111-11-11")
    .min(9, "Too short!")
    .max(9, "Too long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  function handleSubmit(data, acts) {
    dispatch(addContact({ name: data.name, number: data.number }));

    acts.resetForm();
  }

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label>Name</label>

          <Field type="text" className={css.field} name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.formGroup}>
          <label>Number</label>
          <Field type="text" className={css.field} name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
