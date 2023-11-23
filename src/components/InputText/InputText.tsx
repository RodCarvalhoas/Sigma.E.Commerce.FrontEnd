import React, { ChangeEventHandler } from "react";
import { Input, InputContainer, Label } from "./InputText.styles"

interface Props{
    children?: React.ReactNode;
    placeholder?: string;
    type: React.HTMLInputTypeAttribute;
    iconButton?: React.ReactNode;
    inputId?: string;
    value?: string | number | undefined;
    errorText?: string;
    disable?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
    className?: string | undefined; 
}

export default function InputText({ placeholder, type, inputId, value, onChange, disable, onFocus, className }: Props){
    return(
        <InputContainer onChange={onChange}>
            <Label isEmpty={value === "" ? false : true}>{placeholder}</Label>
            <Input
                id={inputId}
                disabled={disable}
                type={type}
                value={value} 
                onChange={onChange}
                onFocus={onFocus}
                className={className}
            />
        </InputContainer>
    );
}