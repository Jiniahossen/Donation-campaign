import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className=" text-center mt-40">
            <h1 className=" text-9xl font-sans font-bold text-orange-600 mb-6">oops!</h1>
            <h2 className=" text-3xl font-sans font-semibold">404 page not found</h2>

            <div className=" mt-10">
                <Link to="/">
                <button className=" bg-yellow-600 text-white text-lg px-4 py-2 rounded-2xl">Go to the Home page</button></Link>
            </div>
            
        </div>
    );
};

export default Error;