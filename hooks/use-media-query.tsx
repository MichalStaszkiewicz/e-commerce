"use client";
import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      const documentChangeHandler = () => setMatches(mediaQueryList.matches);

      mediaQueryList.addEventListener("change", documentChangeHandler);
      documentChangeHandler();
      return () => {
        mediaQueryList.removeEventListener("change", documentChangeHandler);
      };
    }
  }, [query]);

  return matches;
}

export default useMediaQuery;
