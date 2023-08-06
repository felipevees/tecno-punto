import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { MyButton } from "../../../Components/Client";
import "./ConsultCredit.css";
import { useClient } from "../../../hooks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function ConsultCredit() {
  const [error, setError] = useState(null);
  const [clientCc, setClientCc] = useState(null);

  const navigate = useNavigate();

  const { isExistClient } = useClient();

  const onSubmit = async () => {
    setError(null);
    if (!clientCc) {
      setError("No has introducido ninguna cedula");
    } else {
      const exist = await isExistClient(clientCc);
      if (exist) navigate(`/consultCredit/${clientCc}`);
      else {
        setError("El numero de cedula no existe");
        toast(error);
      }
    }
  };

  return (
    <div className="consult-credit">
      <div className="consult-credit__content">
        <h1 className="h1custom">Consultar tu credito</h1>
        <Form onSubmit={onSubmit}>
          <Form.Input
            name="cc"
            placeholder="Ingresa tu cedula"
            type="number"
            onChange={(_, data) => setClientCc(data.value)}
          />
          <Button primary fluid>
            Entrar
          </Button>
        </Form>
      </div>
      <MyButton nombre="Volver a HOME" />
    </div>
  );
}
