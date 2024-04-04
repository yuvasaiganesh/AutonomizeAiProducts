import React from "react"; 

export const UserDetailsContext = React.createContext();

const userDetails = {
  user_name: localStorage.getItem("userName"),
  user_id: localStorage.getItem("userId"),
  update_user_name() {
    this.user_name = localStorage.getItem("userName");
  },
  update_user_id() {
    this.user_id = localStorage.getItem("userId");
  }
};


export const UserDetailsProvider = ({ children }) => {
  return (
    <UserDetailsContext.Provider value={userDetails}>
      {children}
    </UserDetailsContext.Provider>
  );
};
