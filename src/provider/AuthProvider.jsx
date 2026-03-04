import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { auth } from "../firebase/firebase.init"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"


function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider();

  //Register new user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //Login user
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //Login with google
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  //Update user profile
  const updateUserProfile = (profileInfo) => {
    return updateProfile(auth.currentUser, profileInfo)
  }

  //Logout user
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  //Track login user 
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubcribe()
  })

  const authInfo = {
    createUser,
    signIn,
    googleLogin,
    logOut,
    updateUserProfile,
    user,
    loading
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider