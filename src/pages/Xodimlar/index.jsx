import React from 'react'
import { useSignOut } from 'react-auth-kit'

const Xodimlar = () => {
  const signOut = useSignOut()
  return (
    <div>
      <button onClick={signOut}>sign out</button>
    </div>
  )
}

export default Xodimlar