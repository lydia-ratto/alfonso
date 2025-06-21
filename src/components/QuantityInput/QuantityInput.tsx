import React from 'react';
import quantityInputStyles from './QuantityInput.module.css';

interface QuantityInputProps {
    name: string;
    value: number;
    onChange: (event: { target: { name: string; value: number } }) => void;
    min?: number;
    max?: number;
    step?: number;
    id?: string;
}
const QuantityInput: React.FC<QuantityInputProps> = ({ name, value, onChange, min = 0, max = Infinity, step = 1, id }) => {
    const handleDecrease = () => {
        const newValue = Math.max(min, value - step);
        onChange({ target: { name, value: newValue } });
    };

    const handleIncrease = () => {
        const newValue = Math.min(max, value + step);
        onChange({ target: { name, value: newValue } });
    };
    
    return (
        <div className={quantityInputStyles.wrapper}>
            <button type="button" onClick={handleDecrease} disabled={value <= min} className={quantityInputStyles.button}>-</button>
            <input type="text" id={id} name={name} readOnly value={value} className={quantityInputStyles.input} />
            <button type="button" onClick={handleIncrease} disabled={value >= max} className={quantityInputStyles.button}>+</button>
        </div>
    );
};

export default QuantityInput;