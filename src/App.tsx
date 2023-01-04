import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReducer } from "react";

import "./App.css";

interface IState {
  expression: string;
  result: number;
  isResultDisplayed: boolean;
}

type Action =
  | { type: "ADD_NUMBER"; payload: number }
  | { type: "ADD_OPERATOR"; payload: string }
  | { type: "SHOW_RESULT"; payload: number }
  | { type: "CLEAR" }
  | { type: "REMOVE" }
  | { type: "ADD_OPEN_PAREN" }
  | { type: "ADD_CLOSE_PAREN" }
  | { type: "ERROR"; payload: string };

const initialState: IState = {
  expression: "",
  result: 0,
  isResultDisplayed: false,
};

const isResult = (expression: string) => {
  try {
    eval(expression);
    return true;
  } catch (e) {
    return false;
  }
};

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "ADD_NUMBER":
      return {
        ...state,
        isResultDisplayed: false,
        expression: isResult(state.expression)
          ? state.expression + action.payload
          : state.expression + action.payload,
      };
    case "ADD_OPERATOR":
      return {
        ...state,
        isResultDisplayed: false,
        expression: isResult(state.expression)
          ? state.expression + action.payload
          : state.expression + action.payload,
      };

    case "SHOW_RESULT":
      return {
        ...state,
        isResultDisplayed: true,
        expression: action.payload.toString(),
      };
    case "CLEAR":
      return initialState;
    case "REMOVE":
      return {
        ...state,
        isResultDisplayed: false,
        expression: state.expression.slice(0, -1),
      };
    case "ADD_OPEN_PAREN":
      return {
        ...state,
        isResultDisplayed: false,
        expression: state.expression + "(",
      };
    case "ADD_CLOSE_PAREN":
      return {
        ...state,
        isResultDisplayed: false,
        expression: state.expression + ")",
      };
    case "ERROR":
      return { ...state, isResultDisplayed: true, expression: action.payload };

    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (num: number) => {
    dispatch({ type: "ADD_NUMBER", payload: num });
  };

  const handleOperatorClick = (operator: string) => {
    dispatch({ type: "ADD_OPERATOR", payload: operator });
  };

  const handleClearClick = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleEqualClick = () => {
    try {
      const result = eval(state.expression);
      dispatch({ type: "SHOW_RESULT", payload: result });
    } catch (e) {
      dispatch({
        type: "ERROR",
        payload: "Error: Incorrect parentheses or invalid expression",
      });
    }
  };

  const handleRemoveClick = () => {
    dispatch({ type: "REMOVE" });
  };

  const handleOpenParenClick = () => {
    if (!/\d$/.test(state.expression)) {
      dispatch({ type: "ADD_OPEN_PAREN" });
    }
  };

  const handleCloseParenClick = () => {
    dispatch({ type: "ADD_CLOSE_PAREN" });
  };

  return (
    <div className="calculator">
      <div className="state">{state.expression || "0"}</div>
      <div className="button__container">
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={() => handleNumberClick(1)}
        >
          1
        </button>
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={() => handleNumberClick(2)}
        >
          2
        </button>
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={() => handleNumberClick(3)}
        >
          3
        </button>
        <button
          className="btn"
          disabled={/[+\-*/]$/.test(state.expression)}
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>

        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={() => handleNumberClick(4)}
        >
          4
        </button>
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={() => handleNumberClick(5)}
        >
          5
        </button>
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={() => handleNumberClick(6)}
        >
          6
        </button>
        <button
          className="btn"
          disabled={/[+\-*/]$/.test(state.expression)}
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>

        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={() => handleNumberClick(7)}
        >
          7
        </button>
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={() => handleNumberClick(8)}
        >
          8
        </button>
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={() => handleNumberClick(9)}
        >
          9
        </button>
        <button
          className="btn"
          disabled={/[+\-*/]$/.test(state.expression)}
          onClick={() => handleOperatorClick("*")}
        >
          *
        </button>

        <button className="btn" onClick={handleClearClick}>
          CE
        </button>
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={() => handleNumberClick(0)}
        >
          0
        </button>
        <button
          className="btn"
          disabled={/[+\-*/]$/.test(state.expression)}
          onClick={() => handleOperatorClick("/")}
        >
          /
        </button>
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={handleEqualClick}
        >
          =
        </button>
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={handleRemoveClick}
        >
          DEL
        </button>
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={handleOpenParenClick}
        >
          (
        </button>
        <button
          className="btn"
          disabled={state.isResultDisplayed}
          onClick={handleCloseParenClick}
        >
          )
        </button>
      </div>
    </div>
  );
};

export default App;
