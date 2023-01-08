import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'

type Props = {
    children: React.ReactNode
}

export const Header = ({ children }: Props) => (
    <Text
        style={styles.header}
    >
        { children }
    </Text>
)

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 14,
        fontFamily: 'sans-serif-thin'
    }
})