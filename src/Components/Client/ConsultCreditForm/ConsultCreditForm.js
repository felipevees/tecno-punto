import React from "react";
import "./ConsultCreditForm.css";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

export function ConsultCreditForm({ getMyCredit }) {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });

  return (
    <Form className="consult-credit-admin" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="cc"
        placeholder="Ingresa tu cedula"
        value={formik.values.cc}
        onChange={formik.handleChange}
        error={formik.errors.cc}
      />
      <Button type="submit" content="Buscar" primary fluid />
    </Form>
  );
}

function initialValues() {
  return {
    cc: "",
  };
}

function validationSchema() {
  return {
    cc: Yup.string().required(true),
  };
}
