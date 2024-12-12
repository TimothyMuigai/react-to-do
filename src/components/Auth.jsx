import React, { useEffect, useState } from 'react'
import {auth} from "../config/Config";
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

function Auth() {
    const [email, setEmail]=useState('');
    const [password, setPassword] = useState('');
    const signIn = async()=>{
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch(err){
            console.error(err);
        }
    };
    const logOut = async()=>{
        try{
            await signOut(auth);
        } catch(err){
            console.error(err);
        }
    };

  return (
    <div>
        <input type="email" 
            onChange={(e)=>setEmail(e.target.value)} 
            placeholder='Email...'
        />
        <input type="password" 
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password...' 
        />
        <button onClick={signIn}>Sign in</button>
        <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default Auth