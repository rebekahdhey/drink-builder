export type Size = "small" | "medium" | "large";
export type Base = "espresso" | "matcha" | "tea";
export type Milk = "none" | "whole" | "oat" | "almond";
export type Syrup = "none" | "vanilla" | "caramel" | "hazelnut";
export type Topping = "whipped cream" | "boba" | "cinnamon" | "choco chips";

export type Drink = {
  size: Size;
  base: Base;
  milk: Milk;
  syrup: Syrup;
  toppings: Topping[];
};

export type PlacedOrder = Drink & {
  orderId: number;
};