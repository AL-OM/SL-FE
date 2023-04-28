import { useRef, useEffect } from "react";

// using for get state or props previous
export const usePrevious = <T extends Record<string, unknown>>(value: T) => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref: React.MutableRefObject<T | undefined> = useRef<T>();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};
