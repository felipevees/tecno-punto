import React, { useEffect, useState } from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import { useFormik } from "formik";
import { map } from "lodash";
import * as yup from "yup";
import { useClient, useUser } from "../../../../hooks";
import "./AddEditClientForm.css";

export function AddEditClientForm({ onClose, onRefetch, client }) {
  const [usersFormat, setUsersFormat] = useState([]);

  const { addClient, updateClient } = useClient();

  const { getUsers, users } = useUser();

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setUsersFormat(formatDropDownData(users));
  }, [users]);
  console.log(users);

  const formik = useFormik({
    initialValues: initialValues(client),
    validationSchema: yup.object(client ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (client) await updateClient(client.id, formValue);
        else await addClient(formValue);
        onRefetch();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <div>
      <Form className="add-edit-client-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          name="cc"
          placeholder="cedula"
          value={formik.values.cc}
          onChange={formik.handleChange}
          error={formik.errors.cc}
        />
        <Form.Input
          name="first_name"
          placeholder="nombre"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.errors.first_name}
        />
        <Form.Input
          name="last_name"
          placeholder="Apellidos"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          error={formik.errors.last_name}
        />
        <Form.Input
          name="payment_value"
          placeholder="valor de la cuota"
          value={formik.values.payment_value}
          onChange={formik.handleChange}
          error={formik.errors.payment_value}
        />
        <Form.Input
          name="payments"
          placeholder="cuotas"
          value={formik.values.payments}
          onChange={formik.handleChange}
          error={formik.errors.payments}
        />
        <Dropdown
          className="text-color"
          value={formik.values.asesor}
          error={formik.errors.asesor}
          onChange={(_, data) => formik.setFieldValue("asesor", data.value)}
          placeholder="asesor"
          fluid
          selection
          search
          options={usersFormat}
        />

        <Button
          type="submit"
          content={client ? "Actualizar" : "Crear"}
          primary
          fluid
        />
      </Form>
    </div>
  );
}

function formatDropDownData(data) {
  return map(data, (item) => ({
    key: item.id,
    text: item.first_name + " " + item.last_name + " " + item.cc,
    value: item.id,
  }));
}

function initialValues(client) {
  return {
    first_name: client?.first_name || "",
    last_name: client?.last_name || "",
    cc: client?.cc || "",
    payment_value: client?.payment_value || "",
    payments: client?.payments || "",
    asesor: client?.asesor || "",
  };
}
function newSchema() {
  return {
    first_name: yup.string().required(true),
    last_name: yup.string().required(true),
    cc: yup.string().required(true),
    payment_value: yup.number().required(true),
    payments: yup.number().required(true),
    asesor: yup.number().required(true),
  };
}
function updateSchema() {
  return {
    first_name: yup.string().required(true),
    last_name: yup.string().required(true),
    cc: yup.string().required(true),
    payment_value: yup.number().required(true),
    payments: yup.number().required(true),
    asesor: yup.number().required(true),
  };
}
