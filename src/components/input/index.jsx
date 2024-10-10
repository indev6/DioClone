/* eslint-disable react/prop-types */
import { IconContainer, InputContainer, ErrorText, InputText } from "./styles";
import { Controller } from "react-hook-form";

const Input = ({leftIcon, name, control, erroMessage, ...rest}) => {
  return (
    <>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller 
        name={name}
        control={control}
        rules={{required: true}}
        render={({field}) => <InputText {...field}{...rest} />}
        />
    </InputContainer>
    {erroMessage ? <ErrorText>{erroMessage}</ErrorText> : null}
    </>
  )
}

export {Input};