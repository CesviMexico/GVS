import React, { useState, createContext} from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
   
    const [user, setUser] = useState( 
     
        {
            idUser:'idUser',
            name: "name",
            age: 0,
            premium: true,
            email: "email",
            rol: 'rol'
        }
        
    )

    const updateUser = newUser => {
        setUser(newUser)
    }

    return (
        <UserContext.Provider
            value={{
                user,
                updateUser
            }}
        >
            {children}
        </UserContext.Provider>
    )

}

export default UserContext;