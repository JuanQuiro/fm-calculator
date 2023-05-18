"use client";
import React, { useState } from "react";
import Toggle from "./components/Toggle";


const Calculator: React.FC = () => {
  const [value, setValue] = useState("");

  const handleButtonPress = (buttonValue: string) => {
    setValue(value + buttonValue);
  };

  const handleClearButtonPress = () => {
    setValue("");
  };

  const handleDeleteButtonPress = () => {
    let valor = value;
    const miArreglo = valor
      .toString()
      .split("")
      .map((digito) => parseInt(digito));
    const residuo = miArreglo.pop();
    console.log(miArreglo);
    valor = miArreglo.join("");
    setValue(valor);
  };

  const handleEqualsButtonPress = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (error) {
      setValue("");
    }
  };


  return (
    <div className="flex justify-center bg-base-300/50 items-center h-screen">
      <div>

      <div className="flex justify-between">
        <h2 className="text-xl">calc</h2>
        <div className="flex justify-center items-center">
          <p className="flex uppercase text-xs justify-center items-center pr-2">Theme</p>
                 <Toggle />
                  </div>
      </div>
        <input
          className="bg-base-100 border rounded-lg px-4 py-5 my-2 mb-4 w-full text-right"
          type="text"
          value={value}
          readOnly
        />
      <div className="bg-base-300 rounded-lg p-4">
        <div className="grid grid-cols-4 gap-4">
          <button
            className="bg-gray-200 hover:bg-base-100 sombra text-gray-700 font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("7")}
          >
            7
          </button>
          <button
            className="bg-gray-200 hover:bg-base-100 sombra text-gray-700 font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("8")}
          >
            8
          </button>
          <button
            className="bg-gray-200 hover:bg-base-100 sombra text-gray-700 font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("9")}
          >
            9
          </button>
          <button
            className=" text-base-100 shadow-black/70 sombra bg-primary hover:bg-primary-focus font-bold py-2 px-4 rounded-lg"
            onClick={handleDeleteButtonPress}
          >
            DEL
          </button>

          <button
            className="bg-gray-200 hover:bg-base-100 sombra text-gray-700 font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("4")}
            >
            4
          </button>
          <button
            className="bg-gray-200 hover:bg-base-100 sombra text-gray-700 font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("5")}
          >
            5
          </button>
          <button
            className="bg-gray-200 hover:bg-base-100 text-gray-700 sombra font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("6")}
          >
            6
          </button>
          <button
            className="bg-gray-200 hover:bg-warning text-gray-700 sombra font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("+")}
          >
            +
          </button>
          <button
            className="bg-gray-200 hover:bg-base-100 text-gray-700 sombra font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("1")}
          >
            1
          </button>
          <button
            className="bg-gray-200 hover:bg-base-100 text-gray-700 sombra font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("2")}
          >
            2
          </button>
          <button
            className="bg-gray-200 hover:bg-base-100 text-gray-700 sombra font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("3")}
          >
            3
          </button>
          <button
            className="bg-gray-200 hover:bg-warning text-gray-700 sombra font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("-")}
          >
            -
          </button>
          <button
            className="bg-gray-200 hover:bg-warning text-gray-700 sombra font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress(".")}
          >
            .
          </button>
          <button
            className="bg-gray-200 hover:bg-base-100 text-gray-700 sombra font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("0")}
          >
            0
          </button>

          <button
            className="bg-gray-200 hover:bg-warning text-gray-700 sombra font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("/")}
          >
            /
          </button>
          <button
            className="bg-gray-200 hover:bg-warning text-gray-700 sombra font-bold py-2 px-4 rounded-lg"
            onClick={() => handleButtonPress("*")}
          >
            x
          </button>
          <button
            className="btn bg-primary  sombra shadow-black/70 hover:bg-primary-focus text-base-100 font-bold py-2 px-4 rounded-lg col-span-2"
            onClick={handleClearButtonPress}
          >
            Reset
          </button>
          <button
            className="btn bg-error hover:bg-accent sombra shadow-error/70 text-base-100 text-xl font-bold py-2 px-4 rounded-lg col-span-2"
            onClick={handleEqualsButtonPress}
          >
            =
          </button>
        </div>
      </div>
            </div>
    </div>
  );
};

export default Calculator;
