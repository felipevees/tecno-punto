import { BASE_API } from "../utils/constants";

export async function getClientsApi() {
  try {
    const url = `${BASE_API}/api/clients`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getClientByCcApi(data) {
  try {
    const ccFilter = `cc=${data}`;

    const url = `${BASE_API}/api/clients/?${ccFilter}`;
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addClientApi(data, token) {
  try {
    const url = `${BASE_API}/api/clients/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateClientApi(id, data, token) {
  try {
    const url = `${BASE_API}/api/clients/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, params);
    const result = response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function deleteClientApi(id, token) {
  try {
    const url = `${BASE_API}/api/clients/${id}/`;
    const params = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
