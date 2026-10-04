type OptionButtonProps = {
  label: string;
  price: number;
  selected: boolean;
  onClick: () => void;
};

function OptionButton({ label, price, selected, onClick }: OptionButtonProps) {
  return (
    <button
      className={selected ? "option selected" : "option"}
      onClick={onClick}
    >
      {label}
      {price > 0 && <small> +${price.toFixed(2)}</small>}
    </button>
  );
}

export default OptionButton;