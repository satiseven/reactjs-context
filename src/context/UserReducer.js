//import React from 'react'
export const appReducer = (state, action) => {
  
  switch (action.type) {
    case "RESET":
      console.log(state)
      return {
        ...state,
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      break;
  }
};
