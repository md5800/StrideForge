import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "strideforge_cart";

const readStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const lineKey = (productId, size) => `${productId}::${size ?? "default"}`;

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStorage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product, { size, quantity = 1 } = {}) => {
    setItems((prev) => {
      const key = lineKey(product.id, size);
      const existing = prev.find((item) => lineKey(item.id, item.size) === key);
      if (existing) {
        return prev.map((item) =>
          lineKey(item.id, item.size) === key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images?.[0],
          size: size ?? null,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (id, size) => {
    setItems((prev) => prev.filter((item) => lineKey(item.id, item.size) !== lineKey(id, size)));
  };

  const updateQuantity = (id, size, quantity) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((item) =>
        lineKey(item.id, item.size) === lineKey(id, size) ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const { subtotal, itemCount } = useMemo(() => {
    return items.reduce(
      (acc, item) => ({
        subtotal: acc.subtotal + item.price * item.quantity,
        itemCount: acc.itemCount + item.quantity,
      }),
      { subtotal: 0, itemCount: 0 }
    );
  }, [items]);

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
