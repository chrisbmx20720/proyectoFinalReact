import React from 'react'

export default async function PostUser(user) {


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
