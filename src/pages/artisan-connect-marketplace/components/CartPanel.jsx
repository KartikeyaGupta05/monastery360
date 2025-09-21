// src/pages/artisan-connect-marketplace/components/CartPanel.jsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const CartPanel = ({ isOpen, onClose, cartItems, onRemoveFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-40"
          />

          {/* Side Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="font-heading text-2xl font-bold">Your Cart ({cartItems.length})</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <Icon name="X" size={24} />
              </Button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                <Icon name="ShoppingCart" size={48} className="text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold">Your cart is empty</h3>
              </div>
            ) : (
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.cartId} className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-grow">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-primary font-medium">{item.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => onRemoveFromCart(item.cartId)}>
                      <Icon name="Trash2" size={18} className="text-gray-400 hover:text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            {cartItems.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center font-bold text-lg mb-4">
                  <span>Total</span>
                  <span>{getTotalPrice()}</span>
                </div>
                <Button size="lg" className="w-full">Proceed to Checkout</Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartPanel;