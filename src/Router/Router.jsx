import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Error/Error";
import Post from "../Pages/Post/Post";


const myCreatedRouter = createBrowserRouter([
    {
       path:'/',
       element:<Mainlayout></Mainlayout>,
       errorElement:<Error></Error>,
       children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/Donation.json')
        },
        {
            path:'/donation',
            element:<Donation></Donation>
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>
        },
        {
            path:'/donation_details/:id',
            element:<Post></Post>,
            loader:()=>fetch('/Donation.json')
        }
       ]
    }
])

export default myCreatedRouter;