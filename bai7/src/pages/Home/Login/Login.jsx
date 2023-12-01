import React from 'react'
import "./Login.scss"
import { AiFillHeart } from "react-icons/ai";
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Login() {
  return (
    <>
      {/*   Quy tắc BEM
        block element modifier
      */}
      <div>Login</div>
      <div className="login">
        <AiFillHeart></AiFillHeart>

        <div className="login__name">
          <input className='login--input' type="text" />
        </div>
        <div className="login__email">
          <input className='login--input' type="text" />
        </div>
        <div className="login__password">
          <input className='login--input' type="text" />
        </div>
        <div className="login__button">
          {/* <button>Login</button> */}
          {/* <Button>Login</Button> */}
          <Button variant='outlined'>Loginnnnnn</Button>
          <Button variant='outlined' startIcon={<DeleteIcon></DeleteIcon>}>Delete</Button>
        </div>
      </div>
    </>
  )
}
