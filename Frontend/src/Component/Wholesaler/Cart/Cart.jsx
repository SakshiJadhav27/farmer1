import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { WholesalerNavbar } from '../../Navbar/navbar';
import "./cart.css";
import Swal from 'sweetalert2';

function Cart() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'middle',
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 2000,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const navigate = useNavigate();

  const location = useLocation();
  const email = location.state?.email || '';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/addProducts/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    // Set initial quantity and total price when adding to cart
    setQuantity(1);
    setTotalPrice(product.price);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
    // Calculate total price based on quantity and unit price
    setTotalPrice(selectedProduct.price * value);
  };

  const handleCheckout = () => {
    const calculatedPrice = quantity * selectedProduct.price;
    const productName = selectedProduct.productName;

    console.log(`Checkout: ${quantity} ${selectedProduct.productName}`);
    setShowModal(false);

    navigate('/checkout', {state:{ productName,quantity,price: calculatedPrice }});
  };

  const handleMycart = async () => {
    const calculatedPrice = quantity * selectedProduct.price;
    const productName = selectedProduct.productName;
    const Pimage = selectedProduct.image;

    try {
      const cartData = {
        Pimage,
        email,
        productName,
        quantity,
        calculatedPrice
      };
        // Show a pop-up message to indicate that the product was added to the cart
        Toast.fire({
          icon: 'success',
          title: `${quantity} Kg ${productName} added to cart successfully`
        })
      axios.post("http://localhost:5000/addToCart/", cartData); 

      setTimeout(
        function() {
          document.location.href="/cart"
        },
        1500
    );

      // Reset selectedProduct and quantity after adding to the cart
      setSelectedProduct(null);
      setQuantity(1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="position-fixed w-100" style={{zIndex:"100000"}}>
        <WholesalerNavbar/>
      </div>
      <br/>
      <br/>
      <div className='cart-main'>
        <br/>
        <div className="row m-5">
          {products.map((product, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card" style={{ width: '20rem' }}>
                <img
                  className="card-img-top"
                  style={{ height: '15rem' }}
                  src={product.image}
                  alt="Product"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <h5 className="card-title">₹ {product.price}</h5>
                  <small className="card-text">{product.description}</small>
                  <br/><br/>
                  <button className="btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
          {selectedProduct && (
            <div className={`modal ${showModal ? 'd-block' : ''}`} tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content abc">
                  <div className="modal-header">
                    <h5 className="modal-title">Adjust Quantity</h5>
                    <button type="button" className="close" onClick={() => setShowModal(false)}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>{selectedProduct.productName}</p>
                    <input type="number" value={quantity} onChange={(e) => handleQuantityChange(e.target.value)} />
                    <p>Total Price: ₹ {totalPrice}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                    <button type="button" className="btn " onClick={handleMycart}>Add to Cart</button><br/>
                    <button type="button" className="btn " onClick={handleCheckout}>Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default Cart;
