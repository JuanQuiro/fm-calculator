import React from "react";

type CalculatorButtonProps = {
  value: string;
  onClick: (value: string) => void;
};

export const CalculatorButton = ({
  value,
  onClick,
}: CalculatorButtonProps) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button
      className="w-16 h-16 text-3xl font-bold bg-gray-200 rounded-full"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};