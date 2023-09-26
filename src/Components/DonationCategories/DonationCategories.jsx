import CategoriesItemCard from "../CategoriesItemCard/CategoriesItemCard";


const DonationCategories = ({categoriesItem}) => {
    
    return (
        <div>
            <div className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {
                categoriesItem?.map(category=><CategoriesItemCard category={category} key={category.id}></CategoriesItemCard>)
               }
            </div>
              </div>
            
        </div>
    );
};

export default DonationCategories;