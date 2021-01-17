import Layout from '../components/layout';

import React from "react";
import { useForm } from "react-hook-form";

function LoginPage() {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
    <Layout>
        <div className="jumbotron bd-light mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <div className="form-group">
                    <label>Email address:</label>
                    <input name="email" className="form-control" id="email"  placeholder="Email" ref={register}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input name="password" className="form-control" id="pwd" placeholder="Password" ref={register}/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    </Layout>
);

    }
export default LoginPage;