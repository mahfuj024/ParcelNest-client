import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthContext'

function useAuth() {
    const authInfo = useContext(AuthContext)
    return authInfo;
}

export default useAuth