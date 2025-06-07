import { useStore } from "zustand";
import { store } from "../store";

interface Props {
  className?: string;
}

export const Input = ({ className }: Props) => {
  const password = useStore(store, (state) => state.password);
  const setPassword = useStore(store, (state) => state.setPassword);

  function logPassword() {
    console.log(store.getState().password)
  }

  return (
    <input
      placeholder="Type your password nigga"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
        logPassword();
      }}
      className={className}
    />
  );
};
