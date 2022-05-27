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
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_GARDEN",
                            payload: e.target.value,
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
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_TOYS",
                            payload: e.target.value,
                        })
                    }
                    checked={byToys}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Grocery"
                    name="group1"
                    type="checkbox"
                    id={'inline-3'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_GROCERY",
                            payload: e.target.value,
                        })
                    }
                    checked={byGrocery}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Music"
                    name="group1"
                    type="checkbox"
                    id={'inline-4'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_MUSIC",
                            payload: e.target.value,
                        })
                    }
                    checked={byMusic}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Computers"
                    name="group1"
                    type="checkbox"
                    id={'inline-5'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_COMPUTERS",
                            payload: e.target.value,
                        })
                    }
                    checked={byComputers}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Automotive"
                    name="group1"
                    type="checkbox"
                    id={'inline-6'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_AUTOMOTIVE",
                            payload: e.target.value,
                        })
                    }
                    checked={byAutomotive}
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