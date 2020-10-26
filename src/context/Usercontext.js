import React from "react";
import {appReducer} from './UserReducer'
export const UserContext = React.createContext();
const UserProvider = ({ children }) => {
    React.useEffect(()=>{
        const storage = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {
            users: [],
          };
          
    },[])
 const storage=JSON.parse(localStorage.getItem('user'))
  const initialValues = storage?storage:{
    users: [],
  };
  const [state, dispatch] = React.useReducer(appReducer, initialValues);
  const addUser = (payload) => {
    dispatch({ type: "ADD_USER", payload });
  };
  const reset = (payload) => {
    dispatch({ type: "RESET", payload });
  };
  const AllOfMine = {
    ...state,
    reset,
    addUser,
  };
  return (
    <UserContext.Provider value={AllOfMine}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
