/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStore } from "@tanstack/react-store";
import { store } from "./index";

const Display = ({ animal }: { animal: string }) => {
  const count = useStore(store, (state: any) => state[animal]);
  return <div>{`${animal}: ${count}`}</div>;
};

const updateState = (animal: string) => {
  store.setState((state: any) => {
    return {
      ...state,
      [animal]: state[animal] + 1,
    };
  });
};
const Increment = ({ animal }: { animal: string }) => (
  <button onClick={() => updateState(animal)}>My Friend Likes {animal}</button>
);

export { Display, Increment };
