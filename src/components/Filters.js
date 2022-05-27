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
            <Button variant="info">Clear All Filters</Button>
        </div>
    );
};

export default Filters;