import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useClient } from "../../hooks";
import {
  HeaderPage,
  TableClients,
  AddEditClientForm,
} from "../../Components/Admin";
import { ModalBasic } from "../../Components/common";

export function ClientsAdmin() {
  const [titleModal, setTitleModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const { loading, clients, getClients, deleteClient } = useClient();

  useEffect(() => {
    getClients();
  }, [refetch]);
  const onRefetch = () => setRefetch((prev) => !prev);

  const openCloseModal = () => setShowModal((prev) => !prev);

  const addClient = () => {
    setTitleModal("Nuevo cliente");
    setContentModal(
      <AddEditClientForm onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };
  const updateClient = (data) => {
    setTitleModal("Actualizar cliente");
    setContentModal(
      <AddEditClientForm
        onClose={openCloseModal}
        onRefetch={onRefetch}
        client={data}
      />
    );
    openCloseModal();
  };

  const onDeleteClient = async (data) => {
    const result = window.confirm(
      `¿Eliminar cliente ${data.cc} ${data.first_name}?`
    );
    if (result) {
      try {
        await deleteClient(data.id);
        onRefetch();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <HeaderPage
        title="Clientes"
        btnTitle="Nuevo cliente"
        btnClick={addClient}
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableClients
          clients={clients}
          updateClient={updateClient}
          onDeleteClient={onDeleteClient}
        />
      )}
      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
