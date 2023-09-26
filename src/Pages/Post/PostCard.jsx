import { Link } from "react-router-dom";
import swal from "sweetalert";


const PostCard = ({post}) => {
    const { picture, title, button_bg_color,id,description,price}=post||{};

    const categoryButtonStyle = {
        backgroundColor: button_bg_color, 
    };

    const handleDonationButton=()=>{
        const addDonationItems=[];
        const donationItems=JSON.parse(localStorage.getItem('Donation'))

        if(!donationItems){
            addDonationItems.push(post)
            localStorage.setItem('Donation',JSON.stringify(addDonationItems));
            swal("Great!", "You have Donated some money", "success");
        }
        else{

            const isExit=donationItems.find(post=>post.id===id)
            if(!isExit){
                addDonationItems.push(...donationItems,post)
                localStorage.setItem('Donation',JSON.stringify(addDonationItems))
                swal("Great!", "You have Donated some money!", "success");
            }
            else{
                swal("Error","You have already donated,try other field", "error");
            }
            
        }
    }
    return (
        <div className="my-20">
            <div>
                <div className=" w-[80%] mx-auto">
                <div className="rounded-md relative">
                    <figure><img src={picture} alt="Shoes" className=" w-full h-[50vh] rounded-md" /></figure>
                </div>
                </div>
                <div className=" left-10 bottom-8 md:left-20 md:bottom-16 absolute lg:left-40 lg:top-96 lg:mt-16 w-[80%] mx-auto">
                    <Link>
                    <button onClick={handleDonationButton} style={categoryButtonStyle} className=" text-lg text-black font-sans font-medium px-2 py-2 rounded-md">Donate ${price}</button></Link>
                </div>
            </div>
             <div className="w-[80%] mx-auto">
                <h1 className=" text-2xl text-black font-sans  font-bold pt-6 pb-2">{title}</h1>
                <p>{description}</p>
             </div>
            
        </div>
    );
};

export default PostCard;