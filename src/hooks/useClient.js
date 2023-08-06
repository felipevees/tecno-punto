import {
  getClientsApi,
  addClientApi,
  updateClientApi,
  deleteClientApi,
  getClientByCcApi,
} from "../api/client";
import { useState } from "react";
import { useAuth } from ".";
import { size } from "lodash";

export function useClient() {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clients, setClients] = useState(null);
  const [client, setClient] = useState(null);

  const getClients = async () => {
    try {
      setLoading(true);
      const response = await getClientsApi();
      setLoading(false);
      setClients(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const addClient = async (data) => {
    try {
      setLoading(true);
      await addClientApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const updateClient = async (id, data) => {
    try {
      setLoading(true);
      await updateClientApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const deleteClient = async (id) => {
    try {
      setLoading(true);
      await deleteClientApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const getClientByCc = async (data) => {
    try {
      setLoading(true);
      const response = await getClientByCcApi(data);
      setLoading(false);
      setClient(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const isExistClient = async (clientCc) => {
    try {
      const response = await getClientByCcApi(clientCc);
      if (size(response) === 0) throw Error();
      return true;
    } catch (error) {
      setError(error);
    }
  };

  return {
    loading,
    error,
    clients,
    client,
    getClients,
    addClient,
    updateClient,
    deleteClient,
    getClientByCc,
    isExistClient,
  };
}
