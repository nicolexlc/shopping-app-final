import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";

const Filters = () => {

    const { productState: { byGarden, byToys, byGrocery, byMusic, byComputers, byAutomotive, byMovies, byHome, bySports, byOutdoors,
    byTools, byBaby, byKids, byBooks, byBeauty }, 
        productDispatch ,
    } = CartState();

    // console.log(byGarden);

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
            <span>
                <Form.Check
                    inline
                    label = "Movies"
                    name="group1"
                    type="checkbox"
                    id={'inline-7'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_MOVIES",
                            payload: e.target.value,
                        })
                    }
                    checked={byMovies}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Home"
                    name="group1"
                    type="checkbox"
                    id={'inline-8'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_HOME",
                            payload: e.target.value,
                        })
                    }
                    checked={byHome}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Sports"
                    name="group1"
                    type="checkbox"
                    id={'inline-9'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_SPORTS",
                            payload: e.target.value,
                        })
                    }
                    checked={bySports}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Outdoors"
                    name="group1"
                    type="checkbox"
                    id={'inline-10'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_OUTDOORS",
                            payload: e.target.value,
                        })
                    }
                    checked={byOutdoors}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Tools"
                    name="group1"
                    type="checkbox"
                    id={'inline-11'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_TOOLS",
                            payload: e.target.value,
                        })
                    }
                    checked={byTools}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Baby"
                    name="group1"
                    type="checkbox"
                    id={'inline-12'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_BABY",
                            payload: e.target.value,
                        })
                    }
                    checked={byBaby}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Kids"
                    name="group1"
                    type="checkbox"
                    id={'inline-13'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_KIDS",
                            payload: e.target.value,
                        })
                    }
                    checked={byKids}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Books"
                    name="group1"
                    type="checkbox"
                    id={'inline-14'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_BOOKS",
                            payload: e.target.value,
                        })
                    }
                    checked={byBooks}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label = "Beauty"
                    name="group1"
                    type="checkbox"
                    id={'inline-2'}
                    onChange={(e) =>
                        productDispatch({
                            type: "SHOW_BEAUTY",
                            payload: e.target.value,
                        })
                    }
                    checked={byBeauty}
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