import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css"
import { Profile } from "./Profile";

const Home = () => {

    const { 
        state: {products},
        productState: { byGarden, searchQuery },
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        // if(!byGarden) {
        //    sortedProducts = sortedProducts.filter((prod) => prod.department('Garden'));
        // }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.name.toLowerCase().includes(searchQuery)
            );
        }
    
        return sortedProducts;
    };

    return <div className="home">
        <Profile />
        <Filters />
        <div className="productContainer">
            {
                transformProducts().map((prod) => {
                   return <SingleProduct prod={prod} key={prod.id} />
                })}
        </div>

    </div>;
    
};

export default Home;