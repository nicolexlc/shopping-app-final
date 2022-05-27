import { Button, Card } from "react-bootstrap";

const SingleProduct = ({ prod }) => {
    return <div className="products">
        <Card>
            <Card.Img variant='top' src={prod.image} alt={prod.name} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10}}>
                    <span>$ {prod.price.split(".")[0]}</span>
                </Card.Subtitle>
                <Card.Subtitle style={{ paddingBottom: 10}}>
                    <span>Department: {prod.department}</span>
                </Card.Subtitle>
                <Button variant="danger">
                    Remove from cart
                </Button>
                <Button>
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    </div>;
}

export default SingleProduct