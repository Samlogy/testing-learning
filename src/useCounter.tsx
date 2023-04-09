import { create } from "zustand";

export interface State {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementByValue: (value: number) => void;
}

function handleIncrement(state: State) {
  return {
    ...state,
    count: state.count + 1,
  };
}

export const useCounter = create<State>((set) => ({
  count: 0,
  increment: () => set((state) => handleIncrement(state)),
  decrement: () =>
    set((state) => {
      if (state.count === 0) return state;
      return {
        ...state,
        count: state.count - 1,
      };
    }),
  reset: () =>
    set((state) => ({
      ...state,
      count: 0,
    })),
  incrementByValue: (value) =>
    set((state) => {
      return {
        ...state,
        count: state.count + value,
      };
    }),
}));
