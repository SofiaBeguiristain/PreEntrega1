import { useState } from "react";

const Counter = ({ stock, agregarAlCarrito }) => {
  // 10 - 10
  const [contador, setContador] = useState(0);

  const sumar = () => {
    stock > contador ? setContador(contador + 1) : alert("stock maximo");
  };
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <button onClick={sumar}>agregar unidad</button>
      <h2>Contador = {contador}</h2>
      <button onClick={restar}>restar unidad</button>

      <button onClick={() => agregarAlCarrito(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
