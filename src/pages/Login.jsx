import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Login = () => {
  // const loginHandler = () =>{
    
  // }
  return (
    <div className="container">
      <Header />
      <form className="row my-5 py-5 justify-content-center login">
        <div className="col-4 align-items-center ">
      <h1>Login</h1>
          <div className="form-outline mb-4">
            <input type="email" id="email" className="form-control" />
            <label className="form-label" htmlFor="email">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="password" className="form-control" />
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-block mb-4 text-center"
         onClick={()=>{}}>
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </form>

      <div className="container fixed-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
