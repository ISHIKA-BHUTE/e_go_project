import "./Products.css";
import Navbar from "./Navbar";
import { useState } from "react";
import cartApi from "./Api/CartApi";
import { useNavigate } from "react-router-dom";
import Footer from './Footer'


const Products = () => {
    const [cart, setCart] = useState([]);
    const [expandedProduct, setExpandedProduct] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const getEmail=localStorage.getItem('email')

    const navigate=useNavigate()
    const addToCart = async(product, quantity) => {
        
        const data={
            email:"sandip@1.com",
            product:product
        }
        
        navigate(`/${product}/payment`)


        console.log("cart :",cart)
    };

    const products = [
        { id: "product_1", name: "Product 1", price: "10000", more_info: "more info" },
        { id: "product_2", name: "Product 2", price: "250000", more_info: "more info" },
        { id: "product_3", name: "Product 3", price: "90000", more_info: "more info" },
        { id: "product_4", name: "Product 4", price: "8000", more_info: "more info" },
    ];

    return (
        <div>
            <Navbar email={getEmail}/>

            <div className="products-container" style={{backgroundColor:"rgb(162, 221, 201)"}}>
            {showPopup && <div className="popup">Product added to cart</div>}
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>

                        <div className="product-buttons">
                            {expandedProduct === product.id ? (
                                <div>
                                    <p>{product.more_info} about {product.name}</p>
                                    <button onClick={() => setExpandedProduct(null)}>Close</button>
                                </div>
                            ) : (
                                <button onClick={() => setExpandedProduct(product.id)}>
                                    More Info
                                </button>
                            )}

                            <button
                                className="add-to-cart-button"
                                onClick={() => addToCart(product.id, 1)}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Products;
