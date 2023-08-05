import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableCredits.css";

export function TableCredits({ client }) {
  return (
    <Table className="table-clients-admin">
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
        <Table.Row key={client.id}>
          <Table.Cell>{client.cc}</Table.Cell>
          <Table.Cell>{client.first_name}</Table.Cell>
          <Table.Cell>{client.last_name}</Table.Cell>
          <Table.Cell>{client.payments}</Table.Cell>
          <Table.Cell>{client.payment_value}</Table.Cell>
          <Table.Cell>{client.asesor_data.first_name}</Table.Cell>
          <Table.Cell>{client.asesor_data.cc}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
