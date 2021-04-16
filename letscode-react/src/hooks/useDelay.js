import { useEffect, useState } from "react"

const useDelay = (ms) => {
  const [delayed, setDelayed] = useState(false);
  useEffect(() => {
    if (delayed) {
      const timer = setTimeout(() => {
        setDelayed(false);
      }, ms);

      return function cleanup() {
        clearTimeout(timer);
      }
    }
  }, [delayed, ms]);
  return [delayed, setDelayed];
}

export default useDelay;
