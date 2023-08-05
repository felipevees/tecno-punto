import React, { useState, useEffect } from "react";
import { map } from "lodash";
import { useClient } from "../../hooks";
import { HeaderPage, TableCredits } from "../../Components/Admin";

export function CreditAdmin() {
  const { clients, getClients } = useClient();

  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <HeaderPage title="Creditos" />

      {map(clients, (client) => (
        <TableCredits client={client} />
      ))}
    </>
  );
}
