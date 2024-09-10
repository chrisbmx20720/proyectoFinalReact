

export const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) {
        throw new Error("Error al obtener los usuarios");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
};

export const getUserById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`,{
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error("Error getting user");
    }

    const user = await response.json();
    return user;

  } catch (error) {
    throw error;
  }
};

