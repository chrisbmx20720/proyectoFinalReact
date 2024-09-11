export const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) {
        throw new Error("Error Getting Entities");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
};

export const getProductById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error("Error getting entity");
      }
  
      const user = await response.json();
      return user;
  
    } catch (error) {
      throw error;
    }
  };

  export  async function PostProduct(product) {


    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
  
      if (response.ok) {
        alert("Sucessfully Saved!");
      } else {
        alert("Error Saving Entity.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  
    return (
      <div>
      
      </div>
    );
}

