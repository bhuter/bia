import React from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDropdownProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ cartItems, setCartItems }) => {

  // Remove item from cart
  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  // Update item quantity
  const updateQuantity = (id: number, quantity: number) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(updatedCart);
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-4 ">
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-4 max-h-[60vh] overflow-hidden overflow-y-visible">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between space-x-4">
                {/* Product Image */}
                <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h4 className="text-gray-700 font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.price.toFixed(2)} RWF</p>
                </div>

                {/* Quantity and Remove Controls */}
                <div className="flex items-center space-x-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded text-gray-600 hover:bg-gray-300 transition"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >-</button>
                    <span className="text-gray-700">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded text-gray-600 hover:bg-gray-300 transition"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </div>

                  {/* Remove Item */}
                  <button
                    className="text-red-500 hover:text-red-600 transition"
                    onClick={() => removeItem(item.id)}
                  >
                    <i className="bi bi-trash text-lg"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-gray-700 font-semibold">
              <span>Total:</span>
              <span>{calculateTotal()} RWF</span>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="mt-4">
            <button className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
