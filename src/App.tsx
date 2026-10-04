import { useState } from "react";
import OptionButton from "./components/OptionButton";
import Cup from "./components/Cup";
import { sizes, bases, milks, syrups, toppings } from "./data";
import type { Drink, Topping, PlacedOrder } from "./types";

const defaultDrink: Drink = {
  size: "small",
  base: "espresso",
  milk: "none",
  syrup: "none",
  toppings: [],
};

function getPrice<T extends string>(
  list: { value: T; price: number }[],
  value: T
): number {
  return list.find((item) => item.value === value)?.price ?? 0;
}

function calcTotal(d: Drink): number {
  const toppingsPrice = d.toppings.reduce(
    (sum, t) => sum + getPrice(toppings, t),
    0
  );
  return (
    getPrice(sizes, d.size) +
    getPrice(bases, d.base) +
    getPrice(milks, d.milk) +
    getPrice(syrups, d.syrup) +
    toppingsPrice
  );
}

function App() {
  const [drink, setDrink] = useState<Drink>(defaultDrink);
  const [orders, setOrders] = useState<PlacedOrder[]>([]);

  function toggleTopping(t: Topping) {
    const alreadyChosen = drink.toppings.includes(t);

    if (!alreadyChosen && drink.toppings.length >= 3) return;

    const newList = alreadyChosen
      ? drink.toppings.filter((x) => x !== t)
      : [...drink.toppings, t];

    setDrink({ ...drink, toppings: newList });
  }

  function placeOrder() {
    const newOrder: PlacedOrder = { ...drink, orderId: Date.now() };
    setOrders([...orders, newOrder]);
    setDrink(defaultDrink);
  }

  function removeOrder(orderId: number) {
    setOrders(orders.filter((o) => o.orderId !== orderId));
  }

  const total = calcTotal(drink);
  const grandTotal = orders.reduce((sum, o) => sum + calcTotal(o), 0);

  return (
    <div className="app">
      <h1>🧋 Drink Builder</h1>

      <Cup drink={drink} />

      <h2>Size</h2>
      <div className="options">
        {sizes.map((s) => (
          <OptionButton
            key={s.value}
            label={s.value}
            price={s.price}
            selected={drink.size === s.value}
            onClick={() => setDrink({ ...drink, size: s.value })}
          />
        ))}
      </div>

      <h2>Base</h2>
      <div className="options">
        {bases.map((b) => (
          <OptionButton
            key={b.value}
            label={b.value}
            price={b.price}
            selected={drink.base === b.value}
            onClick={() => setDrink({ ...drink, base: b.value })}
          />
        ))}
      </div>

      <h2>Milk</h2>
      <div className="options">
        {milks.map((m) => (
          <OptionButton
            key={m.value}
            label={m.value}
            price={m.price}
            selected={drink.milk === m.value}
            onClick={() => setDrink({ ...drink, milk: m.value })}
          />
        ))}
      </div>

      <h2>Syrup</h2>
      <div className="options">
        {syrups.map((sy) => (
          <OptionButton
            key={sy.value}
            label={sy.value}
            price={sy.price}
            selected={drink.syrup === sy.value}
            onClick={() => setDrink({ ...drink, syrup: sy.value })}
          />
        ))}
      </div>

      <h2>Toppings (max 3)</h2>
      <div className="options">
        {toppings.map((tp) => (
          <OptionButton
            key={tp.value}
            label={tp.value}
            price={tp.price}
            selected={drink.toppings.includes(tp.value)}
            onClick={() => toggleTopping(tp.value)}
          />
        ))}
      </div>

      <h2 className="total">Total: ${total.toFixed(2)}</h2>
      <button className="order-btn" onClick={placeOrder}>
        Place order ☕
      </button>

      {orders.length > 0 && (
        <div className="history">
          <h2>Order history</h2>
          <ul>
            {orders.map((o) => (
              <li key={o.orderId}>
                <span>
                  {o.size} {o.base}, {o.milk} milk, {o.syrup} syrup
                  {o.toppings.length > 0 && `, ${o.toppings.join(" + ")}`}
                  {" — "}
                  <strong>${calcTotal(o).toFixed(2)}</strong>
                </span>
                <button
                  className="remove-btn"
                  onClick={() => removeOrder(o.orderId)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          <h3>Grand total: ${grandTotal.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default App;