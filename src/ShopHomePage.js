import React, { useState } from 'react';
import './ShopHomePage.css';

const ShopHomePage = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  const items = [
    { id: 1, name: 'Fancy Product', image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', price: '$40.00 - $80.00' ,sale: false},
    { id: 2, name: 'Special Item',image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', price: '$20.00 $18.00',sale: true },
    { id: 3, name: 'Sale Item',image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', price: '$50.00 $25.00',sale: true },
    { id: 4, name: 'Popular Item',image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', price: '$40.00' ,sale: false },
    { id: 5, name: 'Sale Item',image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', price: '$50.00 $25.00',sale: true },
    { id: 6, name: 'Fancy Product',image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', price: '$120.00 - $280.00' ,sale: false},
    { id: 7, name: 'Special Item',image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', price: '$20.00 $18.00',sale: true },
    { id: 8, name: 'Popular Item',image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', price: '$40.00'  ,sale: false},
    // Add more items here as needed
  ];

  return (
    <div>
      <div className="shop-in-style">
        <div className="shop-in-style-background"></div>
        <div className="shop-in-style-text">Shop in style</div>
      </div>
      <div className="shop-homepage">
        <h1>Shop Homepage</h1>
        <div className="item-container">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <div className="item-image">
                {item.sale && <div className="sale-tag">Sale</div>}
                <img src={item.image} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <div className="item-price">
                {item.sale ? (
                  <span className="old-price">{item.price.split(' ')[0]}</span>
                ) : (
                  <span>{item.price}</span>
                )}
                <span>{item.price.split(' ')[1]}</span>
              </div>
              {cartItems.find((cartItem) => cartItem.id === item.id) ? (
                <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
              ) : (
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopHomePage;
