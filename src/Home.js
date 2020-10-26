import React from 'react'
import {UserContext} from './context/Usercontext'
export const Home =()=>{
const store = React.useContext(UserContext)
return(
    <>
    <button onClick={()=>store.addUser({id:Math.random()*100,name:'riiiiza',family:'Guliiiiiiizade'})}>Ekle</button>
    </>
)
   
}
