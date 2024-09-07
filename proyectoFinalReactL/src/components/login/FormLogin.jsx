import {React, useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { getUsers } from '../../services/GetUsers'
import ProtectedRoutes from '../../routes/private/ProtectedRoutes';


export default function FormLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const login = async (e) =>{
      e.preventDefault();
      
     

      console.log("LLegamos al submit al menos");
      
        try {
          const usersData = await getUsers();
          setUsers(usersData);

          const user = usersData.find(user => user.email === email && user.password === password )

          console.log(user);
          
          if(user !== undefined){
            alert("Usuario Autenticado");
            <ProtectedRoutes user={user}/>
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
    }

  return (
    <div>
     <form onSubmit={login}>
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
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    </div>
  )
}
