import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { CartItem } from "../types/Cart";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<CartItem[]>([]);

  function addToCart(product: CartItem): void {
    const existingProduct = cartItems.value.find(
      (cartItem) => cartItem.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cartItems.value.push({ ...product, quantity: 1 });
    }
  }

  function removeItem(itemId: string): void {
    cartItems.value = cartItems.value.filter((item) => item.id !== itemId);
  }

  function increaseQuantity(itemId: string): void {
    const item = cartItems.value.find((item) => item.id === itemId);
    if (item) item.quantity += 1;
  }

  function decreaseQuantity(itemId: string): void {
    const item = cartItems.value.find((item) => item.id === itemId);
    if (item && item.quantity > 1) item.quantity -= 1;
  }

  function clearCart(): void {
    cartItems.value = [];
  }

  const total = computed(() =>
    cartItems.value.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    )
  );

  const cartCount = computed(() =>
    cartItems.value.reduce((count, item) => count + item.quantity, 0)
  );

  return {
    cartItems,
    total,
    cartCount,
    addToCart,
    clearCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  };
});
