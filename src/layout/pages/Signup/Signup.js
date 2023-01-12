import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {

          const {createUser} = useContext(AuthContext);

          const handleSignup = event => {
                    event.preventDefault();
                    const form = event.target;
                    const email = form.email.value;
                    const password = form.password.value;
                    createUser(email,password)
                    .then(result => {
                              const user = result.user;
                              console.log(user);
                    })
                    .catch(err => console.error(err));
          }
          return (
                    <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                      <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <br />
                        <p>already have an account <Link to='/login' className='text-orange-600'>Login</Link></p>
                      </div>
                      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                              <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                          </div>
                          <div className="form-control mt-6">
                            <input type="submit" value="Signup"  className="btn btn-primary"/>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
          );
};

export default Signup;