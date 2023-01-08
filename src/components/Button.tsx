import { Button as PaperButton } from "react-native-paper"
import { StyleSheet } from "react-native"

type Props = React.ComponentProps<typeof PaperButton>;

export const Button = ({children, mode, style, ...props}: Props) => {
    return (
        <>
        <PaperButton
            style={[styles.button, style]}
            labelStyle={styles.text}
            mode = {mode || 'text'}
        >

            {children}

        </PaperButton>

        </>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26
    }
})