import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div>
            <h1>Oops</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h2>404 This page is not found!</h2>
                    <p>Go Back where you from</p>
                    <Link to={`/`}><button>Go Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;