// useLoading.js
import { useState, useEffect } from "react";

const UseLoading = (duration) => {
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
 }, []);

 return isLoading;
};

export default UseLoading;