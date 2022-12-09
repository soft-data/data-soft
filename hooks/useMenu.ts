import { useEffect, useMemo, useState } from "react";
import useMediaQuery from "./useMediaQuery";

function useMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const media = useMediaQuery("(min-width: 576px)");

  const action = useMemo(() => {
    return {
      onOpen: () => setOpen(true),
      onClose: () => setOpen(false),
      onToggle: () => setOpen((prev) => !prev),
    };
  }, []);

  useEffect(() => {
    if (media) {
      action.onClose();
    }
  }, [media, action]);

  useEffect(() => {
    if(open){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'hidden'
    }
  }, [open])

  return {
    open,
    onOpen: action.onOpen,
    onClose: action.onClose,
    onToggle: action.onToggle,
  };
}

export default useMenu;
