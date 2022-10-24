import React, { useReducer } from "react";

//Estado inicial

const initialState = {
  count: 0,
  countInterval: 1,
  increment: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        increment: action.increment,
      };
    case "SET_INTERVEL":
      return {
        ...state,
        countInterval: parseInt(action.countInterval),
      };
    case "INCREASE_COUNT":
      console.log('Hola desde el reducer');
      return {
        ...state,
        count: state.count + state.countInterval,
      };

    case "DECREASE_COUNT":
      return {
        ...state,
        count: state.count - state.countInterval,
      };

    case "RESTART":
      return initialState;

    default:
      //Lanzar un error
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = (e) => {
    const { checked } = e.target;
    console.log("valor que se intenta incrementar1" + checked);
    dispatch({ type: "INCREMENT", increment: checked });
  };

  const handleCountIncrement = (e) => {
    const { value } = e.target;
    console.log("valor que se intenta incrementar" + value);
    dispatch({ type: "SET_INTERVEL", countInterval: value });
  };

  const handleCount = (e) => {
    console.log("valor que se intenta incrementar12" + state.increment);
    console.log(initialState.count);
    console.log(initialState.countInterval);
    if (state.increment) {
      dispatch({ type: "INCREASE_COUNT" });
    } else {
      dispatch({ type: "DECREASE_COUNT" });
    }
  };

  const handleRestar = (e) => {
    console.log("Se presiono reiniciar");
    dispatch({ type: "RESTART" });
  };

  return (
    <div>
      <h1>Uso de hock: UseReducer</h1>
      <p>{"Cuenta: " + state.count}</p>
      <div>
        <input
          type="checkbox"
          id="chk"
          defaultChecked={state.increment}
          onChange={handleIncrement}
        />
        <label htmlFor="chk">{"incrementar"}</label>
      </div>
      <div>
        <label htmlFor="interval">{"Intervalo"}</label>
        <input
          type="text"
          id="interval"
          value={state.countInterval}
          onChange={handleCountIncrement}
        ></input>
      </div>
      <button onClick={handleCount}>
        {state.increment ? "incrementarB" : "decrementar"}
      </button>
      <button onClick={handleRestar}>{"Reiniciar"}</button>
    </div>
  );
};

export default Counter;