import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";

const Filters = () => {

    const { productState: { byGarden, byToys, byGrocery, byMusic, byComputers, byAutomotive }, 
        productDispatch ,
    } = CartState();

    console.log(byGarden);

    return (
        <div className="filters">
            <span className="title">Filter Products by Department</span>
            <span>
                <Form.Check
                    inline
                    label = "Garden"
                    name="group1"
                    type="checkbox"
                    id={'inline-1'}
                    onChange={() =>
                        productDispatch({
                            type: "SHOW_GARDEN",
                        })
                    }
                    checked={byGarden}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Toys"
                    name="group1"
                    type="checkbox"
                    id={'inline-2'}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Grocery"
                    name="group1"
                    type="checkbox"
                    id={'inline-3'}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Music"
                    name="group1"
                    type="checkbox"
                    id={'inline-4'}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Computers"
                    name="group1"
                    type="checkbox"
                    id={'inline-5'}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Automotive"
                    name="group1"
                    type="checkbox"
                    id={'inline-6'}
                />
            </span>
            <Button 
                variant="info"
                onClick={() =>
                    productDispatch({
                        type: "CLEAR_FILTERS",
                    })
                }
            >Clear All Filters</Button>
        </div>
    );
};

export default Filters;