import {React,useState} from 'react';
import PostUser from '../../services/PostUser';

export default function RegisterUser() {

    const [email, setEmail] = useState("");
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    

    const newUser = {
      email,
      username,
      password,
    };


    const postUser = await PostUser(newUser);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label>email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
    </div>
  )
}
