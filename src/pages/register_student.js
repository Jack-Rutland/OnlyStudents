import Link from 'next/link';
import Layout from '../components/layout';

import React from "react";
import { useForm } from "react-hook-form";



function RegisterStudentPage() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return    (
    <Layout>
        <div style={textCenter} className="jumbotron bg-info mt-0 mb-0">
            <h1>OnlyStudents for Students</h1>
            <br/>
            <p style={largerText}>
                OnlyStudents for Students enables users to subscribe to courses from thier Institutions, as well as
                free/paid classes created by experts online.
                <br/>
                Additionally, in your profile settings, you are able to link your third party
                education accounts (such as Google Classroom), and we will automatically import 
                your posts from professors on those platforms.
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
export default RegisterStudentPage;