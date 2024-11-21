import { forwardRef, useState } from "react";
import { IconWrapper, InputWrapper, StyledInput } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Spacer } from "../Spacer";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    isPassword?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ startIcon, endIcon, isPassword, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <InputWrapper>
            {startIcon && (
                <>
                    <IconWrapper>{startIcon}</IconWrapper>
                    <Spacer direction="horizontal" />
                </>
            )}
            <StyledInput
                ref={ref}
                type={isPassword && !showPassword ? "password" : "text"}
                {...rest}
            />
            {isPassword ? (
                <IconWrapper onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </IconWrapper>
            ) : (
                endIcon && <IconWrapper>{endIcon}</IconWrapper>
            )}
        </InputWrapper>
    );
});