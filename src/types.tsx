import { KeyboardTypeOptions } from "react-native"

// Form Types
export type FormProps = {
    fields: Array<Field>,
    actionButtonText: string,
    inputMode?: "flat" | "outlined",
    submitMethod: (dto?: any) => any,
}

export type Field = {
    name: string,
    label: string,
    hideContent?: boolean
    keyboardType?: KeyboardTypeOptions,
    placeholder?: string,
    recoveredValue?: string,
    isConfirmField?: boolean,
    fieldToConfirm?: string,
    required?: boolean,
    validationRegex?: RegExp,
    customValidationMessage?: string
}

// Button Types
export type ButtonProps = {
    color: string,
    labelText: string,
}