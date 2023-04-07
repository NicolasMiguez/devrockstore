import axios from "axios";
import Contexto from "./Contexto";
import { useReducer } from "react";
import Reducer from "./Reducer";

export default function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    productos: [],
    carrito: [],
  };
  const [state, dispatch] = useReducer(Reducer, estadoInicial);
  const listarProductos = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    dispatch({ type: "LISTAR_PRODUCTOS", payload: res.data });
    console.log(res.data, "desde usarContexto");
  };
  const agregarCarrito = (item) => {
    dispatch({ type: "AGREGAR_CARRITO", payload: item });
    console.log("agregamos a carrito", item);
  };
  const eliminarCarrito = (item) => {
    dispatch({ type: "ELIMINAR_CARRITO", payload: item });
    console.log("eliminar de carrito", item);
  };
  return (
    <Contexto.Provider
      value={{
        productos: state.productos,
        carrito: state.carrito,
        listarProductos,
        agregarCarrito,
        eliminarCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
