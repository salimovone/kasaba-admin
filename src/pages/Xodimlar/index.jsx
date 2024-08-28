import React from 'react'
import useSignOut from 'react-auth-kit/hooks/useSignOut'

const Xodimlar = () => {
  const signOut = useSignOut()
  return (
    <div>
      <marquee behavior="#fff" direction="left">bu page test uchun ishlatilmoqda!!!</marquee>
      <button onClick={signOut}>sign out</button>
    </div>
  )
}

export default Xodimlar