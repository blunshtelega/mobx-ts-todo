import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';

interface IInputProps {
    id: string;
    type: HTMLInputTypeAttribute;
    label?: string;
    className: string
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    checked?: boolean;
    autoFocus?: boolean;
};

const Input = (({ ...inputProps }: IInputProps): JSX.Element => {
    return (
        <div className='input-group'>
            <label htmlFor={inputProps.id}>
                {inputProps.label}
            </label>
            <input {...inputProps} className={`input ${inputProps.className}`}/>
        </div>      
    );
});

export default Input;