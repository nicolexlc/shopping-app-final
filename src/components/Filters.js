import { Button, Form } from "react-bootstrap";

const Filters = () => {
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
            <Button variant="info">Clear All Filters</Button>
        </div>
    );
};

export default Filters;