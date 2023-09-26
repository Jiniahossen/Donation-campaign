import { Link } from "react-router-dom";

const CategoriesItemCard = ({ category }) => {
    const { picture, title, category_name, category_name_bg_color, text_color, button_bg_color,id ,price} = category || {};


    const categoryButtonStyle = {
        backgroundColor: button_bg_color, 
        color: text_color
    };
    const categoryBgStyle={

    backgroundColor:category_name_bg_color
    }
    const textColour={
        color: text_color
    }

    return (
        <div>
            <div className="card card-compact  shadow-xl" style={categoryBgStyle}>
                <div className=" h-40 w-full">
                    <figure><img src={picture} alt="Shoes" className=" h-40 w-full" /></figure>
                </div>
                <div className="ps-4 py-4">
                    <Link to={`/donation_details/${id}`}>
                        <button style={categoryButtonStyle} className="px-2 rounded-md mb-1">{category_name}</button>
                    </Link>
                    <h2 className="text-lg font-sans font-semibold" style={textColour}>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default CategoriesItemCard;
