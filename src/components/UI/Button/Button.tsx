import React from 'react';

interface IButtonProps {
    type: 'submit' | 'button' | 'reset';
    id: string;
    className: string; 
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button = (({...buttonProps}: IButtonProps): JSX.Element => {
    return (
        <>
            <button {...buttonProps} className={`button ${buttonProps.className}`}>
                {buttonProps.children}
            </button>
        </>      
    );
});

export default Button;