import type { Size, Base, Milk, Syrup, Topping } from "./types";

export const sizes: { value: Size; price: number }[] = [
  { value: "small", price: 0 },
  { value: "medium", price: 0.5 },
  { value: "large", price: 1 },
];

export const bases: { value: Base; price: number }[] = [
  { value: "espresso", price: 3 },
  { value: "matcha", price: 3.5 },
  { value: "tea", price: 2.5 },
];

export const milks: { value: Milk; price: number }[] = [
  { value: "none", price: 0 },
  { value: "whole", price: 0 },
  { value: "oat", price: 0.6 },
  { value: "almond", price: 0.6 },
];

export const syrups: { value: Syrup; price: number }[] = [
  { value: "none", price: 0 },
  { value: "vanilla", price: 0.5 },
  { value: "caramel", price: 0.5 },
  { value: "hazelnut", price: 0.5 },
];

export const toppings: { value: Topping; price: number }[] = [
  { value: "whipped cream", price: 0.5 },
  { value: "boba", price: 0.8 },
  { value: "cinnamon", price: 0.3 },
  { value: "choco chips", price: 0.6 },
];