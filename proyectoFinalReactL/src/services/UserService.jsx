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

export  async function PostUser(user) {


    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        alert("Registro exitoso!");
      } else {
        alert("Error en el registro.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  
    return (
      <div>
      
      </div>
    );
}

export async function PutUser(user) {

    console.log("UserID :", user.id)

    const userData = {
        "name":user.name,
        "lastname":user.lastname,
        "phone":user.phone,
        "email": user.email,
        "username": user.username,
        "password": user.password
    }

    try {
        const response = await fetch(`http://localhost:3000/users/${user.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
    
        
        if (!response.ok) {
            throw new Error(`Error updating user with id ${user.id}`);
        }

        return { message: `User with id ${user.id} updated successfully` };
    
      } catch (error) {
        throw error;
      }
 
}


  

