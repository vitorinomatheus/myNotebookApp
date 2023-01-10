import { ImageBackground, KeyboardAvoidingView, StyleSheet } from "react-native"

type Props = {
    children: React.ReactNode
}

export const Background = ({ children }: Props) => {
    return (
        <>
            <ImageBackground
                resizeMode='cover'
                style={styles.background}
            >
                <KeyboardAvoidingView
                    style={styles.container}
                >
                    { children }
                </KeyboardAvoidingView>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%'
    },
    container: {
        flex: 1,
        margin: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
})