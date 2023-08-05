import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableClients.css";

export function TableClients({ clients, updateClient, onDeleteClient }) {
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
        {map(clients, (client, index) => (
          <Table.Row key={index}>
            <Table.Cell>{client.cc}</Table.Cell>
            <Table.Cell>{client.first_name}</Table.Cell>
            <Table.Cell>{client.last_name}</Table.Cell>
            <Table.Cell>{client.payments}</Table.Cell>
            <Table.Cell>{client.payment_value}</Table.Cell>
            <Table.Cell>{client.asesor_data.first_name}</Table.Cell>
            <Table.Cell>{client.asesor_data.cc}</Table.Cell>
            <Actions
              client={client}
              updateClient={updateClient}
              onDeleteClient={onDeleteClient}
            />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

function Actions({ client, updateClient, onDeleteClient }) {
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateClient(client)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => onDeleteClient(client)}>
        <Icon name="trash" />
      </Button>
    </Table.Cell>
  );
}
