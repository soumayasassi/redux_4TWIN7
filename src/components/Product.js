import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProd } from "../redux/slices/productsSlicer";
import { increment } from "../redux/slices/cartSlice";
function Product(props) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(props.product);
  const MaClasse = product.like > 5 ? "bestProduct" : "text-center";

  const addToCart = (p) => {
    dispatch(increment(p));
  };
  const addLikes = () => {
    setProduct({ ...product, like: product.like + 1 });
  };
  return (
    <Card style={{ width: "18rem" }} className={MaClasse} border="secondary">
      <Card.Header>
        <Card.Img
          variant="top"
          src={"../assets/" + product.img}
          alt="Product Img"
          height={200}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </Card.Title>
        {/* <Card.Title><Link to={`/products/${product.name}/${product.like}`}>{product.name}</Link></Card.Title> */}
        <Card.Text>Quantity: {product.quantity} </Card.Text>
        <Card.Text> Price : {product.price}dt </Card.Text>
        <Card.Text>Like : {product.like}</Card.Text>
        <Row>
          <Col md={6}>
            {" "}
            <Button variant="primary" onClick={addLikes}>
              Like
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="info"
              disabled={product.quantity === 0}
              onClick={() => props.buyFunction(product)}
            >
              Buy
            </Button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={6}>
            {" "}
            <Button variant="success">
              <Link
                to={`/products/update/${product.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Update Product{" "}
              </Link>
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="danger"
              onClick={() => props.deleteProd(product.id)}
            >
              Delete Product
            </Button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={12}>
            <Button variant="success" onClick={() => addToCart(product)}>
              ADD TO CART 
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Product;
