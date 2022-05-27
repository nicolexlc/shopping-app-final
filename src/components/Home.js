import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css"
import { Profile } from "./Profile";

const Home = () => {

    const { 
        state: {products},
        productState: { byGarden, searchQuery, byAutomotive, byComputers, byGrocery, byMusic, byToys },
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        // if(!byGarden) {
        //    sortedProducts = sortedProducts.filter((prod) => prod.department('Garden'));
        // }

        if (byGarden) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Garden')
            );
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.name.toLowerCase().includes(searchQuery)
            );
        }
        
        if (byToys) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Toys')
            );
        }

        if (byGrocery) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Grocery')
            );
        }

        if (byMusic) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Music')
            );
        }

        if (byComputers) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Computers')
            );
        }

        if (byAutomotive) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Automotive')
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