import React, { useState, useEffect } from "react";
import {
  MyButton,
  ConsultCreditForm,
  Credit,
} from "../../../Components/Client";
import "./ConsultCredit.css";
import { useClient } from "../../../hooks";
import { ModalBasic } from "../../../Components/common";
import { toast } from "react-toastify";

export function ConsultCredit() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);

  const { getClientByCc, client } = useClient();

  const openCloseModal = () => setShowModal((prev) => !prev);

  const getMyCredit = async (data) => {
    try {
      const cc = parseFloat(data.cc);
      await getClientByCc(cc);
    } catch (error) {
      toast.error(error.message);
    }
    if (client != "") {
      console.log(client);
      setTitleModal("Credito");
      setContentModal(<Credit client={client} />);
      openCloseModal();
    }
  };

  return (
    <div className="consult-credit">
      <div className="consult-credit__content">
        <h1 className="h1custom">Consultar tu credito</h1>
        <ConsultCreditForm getMyCredit={getMyCredit} />
      </div>
      <MyButton nombre="Volver a HOME" />
      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </div>
  );
}
