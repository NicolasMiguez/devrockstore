import React, { useContext } from "react";
import "../assets/css/Carrito.css";
import Contexto from "../context/Contexto";
import ItemCarrito from "../components/ItemCarrito";

export default function Carrito() {
  const { carrito, eliminarCarrito } = useContext(Contexto);
  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito">
          {carrito.map((item, i) => (
            <ItemCarrito
              {...item}
              key={i}
              eliminarCarrito={eliminarCarrito}
            ></ItemCarrito>
          ))}
        </div>
        <div className="carrito-precio">
          <h5>Total a pagar:</h5>
          <h1>
            AR$
            {carrito.reduce(function (accumulator, curValue) {
              return accumulator + curValue.precio;
            }, 0)}
          </h1>
        </div>
      </div>
    </>
  );
}
