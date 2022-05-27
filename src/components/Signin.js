import {Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Signin = () => {

    return (
        <div>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group >
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group style={{ paddingBottom: 10}}>
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Link to="/Home">
                <Button type="submit">Submit</Button>
                </Link>
            </Form>
        </div>
    )
};


export default Signin;