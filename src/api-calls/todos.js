export const API_ENDPOINT = "https://todos-api.fly.dev/api/v1/todos/";

export const getTodos = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) throw response;
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
export const getTodo = async (id) => {
  try {
    const response = await fetch(`${API_ENDPOINT}${id}`);
    if (!response.ok) throw response;
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
export const addTodo = async (data) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw response;
    const newTodo = await response.json();
    return newTodo;
  } catch (err) {
    return err;
  }
};
export const updateTodo = async (id, updates) => {
  try {
    const response = await fetch(`${API_ENDPOINT}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw response;
    return id;
  } catch (err) {
    return err;
  }
};
export const removeTodo = async (id) => {
  try {
    const response = await fetch(`${API_ENDPOINT}${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw response;
    return id;
  } catch (err) {
    return err;
  }
};
