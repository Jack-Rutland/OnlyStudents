import Link from 'next/link';
import Layout from '../components/layout';

import React from "react";
import { useForm } from "react-hook-form";



function RegisterEducatorPage() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return    (
    <Layout>
       <div style={textCenter} className="jumbotron bg-info mt-0 mb-0">
            <h1>OnlyStudents for Educators</h1>
            <br/>
            <p style={largerText}>
                OnlyStudents for Educators enables profressors and mentors to upload classes
                for universities, high schools, and personal classes.
                <br/>
                As a university, you can get an invite code for your classes to send
                to students, enabling them to join you class.
                <br/>
                As a mentor, you are able to offer free and paid content, which users
                are able to seach for and subscribe to.
            </p>
            <h5>Already have and account? <Link href='/login'>Login</Link></h5>
        </div>
        <div className="jumbotron bg-light mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <div className="form-group">
                    <label><h5 style={textBlack}>Full Name:</h5></label>
                    <input name="name" className="form-control" id="name" placeholder="Full Name" ref={register}/>
                </div>
                <div className="form-group">
                    <label><h5 style={textBlack}>Email Address:</h5></label>
                    <input name="email" className="form-control" id="email" placeholder="Email" ref={register}/>
                </div>
                <div className="form-group">
                    <label><h5 style={textBlack}>Confirm Email Address</h5></label>
                    <input name="email-confirm" className="form-control" id="email" placeholder="Confirm Email" ref={register}/>
                </div>
                <div className="form-group">
                    <label><h5 style={textBlack}>Password:</h5></label>
                    <input name="password" className="form-control" id="pwd" placeholder="Password" ref={register}/>
                </div>
                <div className="form-group">
                    <label><h5 style={textBlack}>Confirm Password:</h5></label>
                    <input name="password-confirm" className="form-control" id="pwd" placeholder="Password" ref={register}/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    </Layout>
);
}


const textBlack = {
    color: '#000000'
};

const textCenter = {
    textAlign: 'center',
    color: '#000000'
};

const largerText = {
    fontSize: '150%'
}
export default RegisterEducatorPage;