import { useCallback, useState } from "react";

export const useToggle = (initialState?: boolean) => {
  const [open, setOpen] = useState(initialState || false);
  return {
    open,
    toggle: useCallback(
      (props?: boolean) => {
        setOpen(props ? props : !open);
      },
      [open]
    ),
  };
};
