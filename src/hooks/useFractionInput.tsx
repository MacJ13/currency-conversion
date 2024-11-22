import { useState } from "react";

const useFractionInput = (initialValue: string = "") => {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const [numberValue, setNumberValue] = useState<number | null>(null);

  const handleNumberChange = (value: string) => {
    // validation entry value (decimal number)
    if (/^\d*([.,]\d*)?$/.test(value)) {
      setInputValue(value); // Update text in field
      const normalizedValue = value.replace(",", "."); // change comma to dot
      setNumberValue(normalizedValue ? parseFloat(normalizedValue) : null); // save number or null
    }
  };

  return { inputValue, numberValue, handleNumberChange };
};

export default useFractionInput;
