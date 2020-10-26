import React from "react";
//import {UserContext} from './context/Usercontext'
import {UserContext} from './context/Usercontext'

 import {Home} from './Home';
const App = () => {
  
  const store = React.useContext(UserContext)
  React.useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(store))   
   },[store])
   React.useEffect(()=>{
     const storage=JSON.parse(localStorage.getItem('user'));
     console.log(storage);
    store.reset(storage)   
   },[])
   return (
 <>
 <ul>
 {
   store.users.map(item=>{
     return (
       <li key={item.id}>{item.name}--{item.family}</li>
     )
   })
 }
 </ul>
       <Home />  
      </>
   
  )
};
export default App;
