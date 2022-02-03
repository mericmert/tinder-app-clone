import Axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../UI/SignUp.css'
export default function Signup() {
    const [Name,setName] = useState("");
    const [Surname,setSurname] = useState("");
    const [Username,setUsername] = useState("");
    const [Password,setPassword] = useState("");
    const navigate = useNavigate();
    

    const onNameChange = (e) =>{
        if(e.target.value){
            setName(e.target.value)
        }
    }
    const onSurnameChange = (e) =>{
        if(e.target.value){
            setSurname(e.target.value)
        }
    }
    const onUserNameChange = (e) =>{
        if(e.target.value){
            setUsername(e.target.value)
        }
    }
    const onPasswordChange = (e) =>{
        if(e.target.value){
            setPassword(e.target.value)
        }
    }
   
    const handleSubmit = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:5050/insert',{
            username: Username,
            password: Password,
            name: Name,
            surname: Surname,
            imageUrl: "https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"
        })
        navigate('/login')
    }
    return (
  <div className='signup-container'>
    <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input onChange={onNameChange}/>
    <label>Surname</label>
    <input onChange={onSurnameChange}/>
    <label>Username</label>
    <input onChange={onUserNameChange}/>
    <label>Password</label>
    <input onChange={onPasswordChange}/>
    <button>Sign Up</button>
    </form>      

  </div>
  );
}



