import type { Drink } from "../types";

type CupProps = {
  drink: Drink;
};

const baseColors = {
  espresso: "#6f4e37",
  matcha: "#8fbc6a",
  tea: "#d9a05b",
};

const milkTints = {
  none: "transparent",
  whole: "rgba(255, 248, 235, 0.45)",
  oat: "rgba(240, 220, 185, 0.5)",
  almond: "rgba(250, 235, 215, 0.5)",
};

const sizeHeights = {
  small: 110,
  medium: 140,
  large: 170,
};

function Cup({ drink }: CupProps) {
  return (
    <div className="cup-area">
      <div className="toppings-row">
        {drink.toppings.includes("whipped cream") && <span>☁️</span>}
        {drink.toppings.includes("cinnamon") && <span>✨</span>}
        {drink.syrup !== "none" && <span>🍯</span>}
      </div>

      <div className="cup" style={{ height: sizeHeights[drink.size] }}>
        <div
          className="liquid"
          style={{
            background: `linear-gradient(${milkTints[drink.milk]}, ${milkTints[drink.milk]}), ${baseColors[drink.base]}`,
          }}
        >
          <div className="cup-bottom">
            {drink.toppings.includes("boba") && <span>🟤🟤🟤</span>}
            {drink.toppings.includes("choco chips") && <span>🍫</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cup;