import { useRef, useState } from "react";
import { Keyboard, ReturnKeyTypeOptions, TextInput, View } from "react-native";
import { Field, FormProps } from "../types";
import { Button } from "./Button";
import * as Paper from "react-native-paper";

export const Form = (formProps: FormProps) => {

    const [formData, setFormData] = useState({});

    const inputs = useRef<TextInput[]>([]);

    const handleSubmit = () => {
        formProps.submitMethod(formData)
    }

    const focusNextField = (fieldIndex: number) => {
        if(fieldIndex != formProps.fields.length - 1)
            inputs.current[fieldIndex + 1].focus();
    }

    const defineReturnType = (fieldIndex: number) => {
        return fieldIndex == (formProps.fields.length - 1) ? 'done' : 'next';
    }

    const defineBlurSubmit = (fieldIndex: number) => {
        return fieldIndex == (formProps.fields.length - 1);
    }

    return (
        <>
            <View
                style= {{
                    flex: 3
                }}
            >
                {formProps.fields.map((field: Field) =>

                    <Paper.TextInput
                        key={field.name}
                        ref={(input: TextInput) => {
                            inputs.current[formProps.fields.indexOf(field)] = input
                        }}
                        onSubmitEditing = {() => {focusNextField(formProps.fields.indexOf(field))}}
                        blurOnSubmit = {defineBlurSubmit(formProps.fields.indexOf(field))}
                        style={{ marginBottom: 20 }}
                        mode={formProps.inputMode || 'flat'}
                        placeholder={field.placeholder || undefined}
                        label={field.label}
                        defaultValue={field.recoveredValue || undefined}
                        onChangeText={(text) => setFormData({...formData, [field.name]: text})}
                        returnKeyType={defineReturnType(formProps.fields.indexOf(field))}
                        keyboardType={ field.keyboardType || undefined }
                        secureTextEntry = { field.hideContent || undefined }
                    />
                )}

                <Button
                    mode="contained"
                    onPress={handleSubmit}
                >
                    {formProps.actionButtonText}
                </Button>       
            </View>
            
        </>
    )

}