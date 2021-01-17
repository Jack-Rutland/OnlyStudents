import Layout from '../components/layout';
import Link from 'next/Link'

import React from "react";
import { useForm } from "react-hook-form";

function LoginPage() {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
    <Layout>
        <div className="jumbotron bd-light mt-5">
            <form>
                <div className="form-group">
                <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd"/>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox"/> Remember me</label>
                </div>
                <Link href="/profile-page">
                <button type="submit" className="btn btn-success">Submit</button>
                </Link>
                </div>
            </form>
        </div>
    </Layout>
);

    }
export default LoginPage;