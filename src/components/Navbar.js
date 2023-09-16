import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import {toast} from "react-hot-toast";

function Navbar(props) {
  
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;

  return (
    <div className="flex justify-evenly">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">About</Link>
          </li>

          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-3 ml-3">
        {/* Login - signup - Logout - Dashboard */}

        { !isLoggedIn &&
          <Link to="/login">
            <button>Login</button>
          </Link>
        }
        
        { !isLoggedIn &&
        <Link to="/signup">
          <button onClick={() => {
            isLoggedIn = false;
            toast.success("Please Sign Up");
          }}
          >Sign Up</button>
        </Link>
        }

        { isLoggedIn &&
        <Link to="/">
          <button onClick={() => {
            isLoggedIn = false;
            toast.success("Logged Out");
          }}
          >Log Out</button>
        </Link>
        }

        { isLoggedIn &&
        <Link to="/Dashboard">
          <button>Dashboard</button>
        </Link>
        }

      </div>
    </div>
  );
}

export default Navbar;
