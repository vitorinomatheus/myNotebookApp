import React, { useRef, useState } from "react";
import { TextInput, View, Text } from "react-native";
import { Field, FormProps } from "../types";
import { Button } from "./Button";
import * as Paper from "react-native-paper";

type ChildProp = {
    children: React.ReactNode
}

export const Form = ({children, ...formProps}: FormProps & ChildProp) => {

    const [formData, setFormData] = useState<{[key: string]: string}>({});
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const inputs = useRef<TextInput[]>([]);

    const handleSubmit = () => {
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        formProps.submitMethod(formData);
    }

    const focusNextField = (field: Field) => {
        const fieldIndex = formProps.fields.indexOf(field);
        if(fieldIndex != formProps.fields.length - 1)
            inputs.current[fieldIndex + 1].focus();
    }

    const defineReturnType = (field: Field) => {
        const fieldIndex = formProps.fields.indexOf(field);
        return fieldIndex == (formProps.fields.length - 1) ? 'done' : 'next';
    }

    const defineBlurSubmit = (field: Field) => {
        const fieldIndex = formProps.fields.indexOf(field);
        return fieldIndex == (formProps.fields.length - 1);
    }

    const validateForm = (formData: {[key: string]: string}) : 
    {[key: string]: string} => {
        let errors: {[key: string]: string} = {};
        formProps.fields.forEach((field) => {
            if(field.required && !formData[field.name]) {
                errors[field.name] = 'This field is required';
            }
            if(field.validationRegex && !field.validationRegex.test(formData[field.name])) {
                if(field.customValidationMessage) {
                    errors[field.name] = field.customValidationMessage
                } else {
                    errors[field.name] = 'This field is not valid';
                }
            }
        });
        return errors;
    }

    const handleConfirmField = (valueToConfirm: string, field: Field) : void => {
        if(valueToConfirm != formData[field.fieldToConfirm!]) {
            errors[field.name] = field.customValidationMessage!;
        }
    }

    return (
        <>
            <View
                style= {{
                    width: '100%'
                }}
            >
                {formProps.fields.map((field: Field) =>
                    <>
                    <Paper.TextInput
                        key={field.name}
                        ref={(input: TextInput) => {
                            inputs.current[formProps.fields.indexOf(field)] = input
                        }}
                        style={{ marginTop: 30 }}
                        onSubmitEditing = {() => {focusNextField(field)}}
                        blurOnSubmit = {defineBlurSubmit(field)}
                        returnKeyType={defineReturnType(field)}
                        mode={formProps.inputMode || 'flat'}
                        placeholder={field.placeholder || undefined}
                        label={field.label}
                        defaultValue={field.recoveredValue || undefined}
                        onChangeText={(text) => {
                            if(!field.isConfirmField) {
                                setFormData({...formData, [field.name]: text})  
                            } else {
                                handleConfirmField(text, field);
                            }}}
                        keyboardType={ field.keyboardType || undefined }
                        secureTextEntry = { field.hideContent || undefined }
                        error={ errors[field.name] ? true : false }
                    />
                    
                    {errors[field.name] && <Text style={{ color: 'red' }}> 
                    {errors[field.name]}</Text>}
                    </>
                    
                )}

                <Button
                    mode="contained"
                    onPress={handleSubmit}
                >
                    {formProps.actionButtonText}
                </Button> 

                {children}
                
            </View>
        </>
    )

}