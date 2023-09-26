

const Donationcard = ({ donations }) => {

    const { picture, title, button_bg_color, id, price, category_name, category_name_bg_color, text_color } = donations || {};
    const categoryButtonStyle = {
        backgroundColor: button_bg_color,
        color: text_color
    };
    const categoryBgStyle = {

        backgroundColor: category_name_bg_color
    }
    const textColour = {
        color: text_color
    }
    const viewStyle = {
        backgroundColor: text_color
    }
    return (
        <div>
            <div>
                <div className="card card-side bg-base-100 shadow-xl min-h-full " style={categoryBgStyle}>

                    <figure><img src={picture} alt="Movie" className=" h-full" /></figure>

                    <div className="py-4 ps-4">
                        <div className="">
                            <button style={categoryButtonStyle} className="px-2 py-1 rounded-md mb-2 text-base font-sans font-medium">{category_name}</button>
                        </div>
                        <h2 className="card-title text-black font-sans font-bold">{title}</h2>
                        <p style={textColour} className="text-lg font-sans font-semibold">${price}</p>
                        <div className=" mt-4">
                            <button className="btn text-white" style={viewStyle}>View Details</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Donationcard;