import React from 'react'
import SignUp from '../pages/SignUp'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignUpForm'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return ( 
    <div>

        <div>

          <h1>{title}</h1>

          <p>
            <span> {desc1} </span>
            <span> {desc2} </span> 
          </p>

          {
          formtype === "signup" ?
          (<SignupForm/>) : 
          (<LoginForm/>)
          }

          <div>

            <div></div>
            <p>OR</p>
            <div></div>

          </div>

          <button>
            <p>Sign Up With Google</p>
          </button>

          <div>
            <img src={frameImage} 
            alt="Pattern"
            width={558}
            height={504}
            loading='lazy'
            />

            <img src={image} 
            alt="Students"
            width={558}
            height={490}
            loading='lazy'
            />
          </div>

        </div>

    </div>
  )
}

export default Template