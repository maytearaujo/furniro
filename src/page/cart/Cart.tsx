import { useContext } from 'react'
import { AuthGoogleContext } from '../../context/authGoogle'
import { signOut } from 'firebase/auth';

const Cart = () => {

  const { user, signOut } = useContext(AuthGoogleContext);
  let userLogado = JSON.parse(user)
  console.log(userLogado)

  return (
    <div>
      <h1>Welcome {userLogado.displayName}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export default Cart
