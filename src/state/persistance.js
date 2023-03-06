import { useAtom } from "jotai";
import { serializeAtom } from "./utils";

const [, dispatch] = useAtom(serializeAtom);

export const save = () => {
  dispatch({
    type: "serialize",
    callback: (value) => {
      localStorage.setItem("serializedTodos", value);
    },
  });
};

export const load = () => {
  const value = localStorage.getItem("serializedTodos");
  if (value) {
    dispatch({ type: "deserialize", value });
  }
};

// const Persist = () => {
  
// return {
//   save,
//   load,
// };
// };

export default Persist;
