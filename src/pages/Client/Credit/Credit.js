import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useClient } from "../../../hooks";
import { MyButton } from "../../../Components/Client";
import "./Credit.css";
import { Table, Loader } from "semantic-ui-react";

export function Credit() {
  const { getClientByCc, client } = useClient();
  const { clientCc } = useParams();

  useEffect(() => {
    getClientByCc(clientCc);
  }, []);
  console.log(client);
  return (
    <div className="credit">
      <div className="credit__content">
        {client ? (
          <Table className="table-credits">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Cc</Table.HeaderCell>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Apellidos</Table.HeaderCell>
                <Table.HeaderCell>Cuotas</Table.HeaderCell>
                <Table.HeaderCell>Valor de la cuota</Table.HeaderCell>
                <Table.HeaderCell>asesor</Table.HeaderCell>
                <Table.HeaderCell>Cc asesor</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row key={client[0].id}>
                <Table.Cell>{client[0].cc}</Table.Cell>
                <Table.Cell>{client[0].first_name}</Table.Cell>
                <Table.Cell>{client[0].last_name}</Table.Cell>
                <Table.Cell>{client[0].payments}</Table.Cell>
                <Table.Cell>{client[0].payment_value}</Table.Cell>
                <Table.Cell>{client[0].asesor_data.first_name}</Table.Cell>
                <Table.Cell>{client[0].asesor_data.cc}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        ) : (
          <Loader />
        )}
      </div>
      <MyButton nombre="Volver a HOME" />
    </div>
  );
}
