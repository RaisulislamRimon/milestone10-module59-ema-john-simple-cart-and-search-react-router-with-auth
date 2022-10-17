import React from 'react';

const AuthContext = React.createContext();

const UserContext = () => {
    return (
        <AuthContext.Provider>
            
        </AuthContext.Provider>
    );
};

export default UserContext;