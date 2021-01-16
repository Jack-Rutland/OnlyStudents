import Layout from '../components/layout';


const LoginPage = () => (
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
                <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    </Layout>
);
export default LoginPage;