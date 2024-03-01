import { useState } from "react";

export const useOperation = () => {
    const [clickValue, setClickValue] = useState('0');
    const handleClick = (value) => {
        setClickValue(value);
    }
    
    return {
        handleClick,
        clickValue,
        setClickValue
    }
}
