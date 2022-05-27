import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css"
import { Profile } from "./Profile";

const Home = () => {

    const { 
        state: {products},
        productState: { byGarden, searchQuery, byAutomotive, byComputers, byGrocery, byMusic, byToys, byMovies, byHome, bySports,
        byOutdoors, byTools, byBaby, byKids, byBooks, byBeauty },
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

        if (byMovies) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Movies')
            );
        }

        if (byHome) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Home')
            );
        }

        if (bySports) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Sports')
            );
        }

        if (byOutdoors) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Outdoors')
            );
        }

        if (byTools) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Tools')
            );
        }

        if (byBaby) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Baby')
            );
        }

        if (byKids) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Kids')
            );
        }

        if (byBooks) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Books')
            );
        }

        if (byBeauty) {
            sortedProducts = sortedProducts.filter((prod) => 
                prod.department.includes('Beauty')
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