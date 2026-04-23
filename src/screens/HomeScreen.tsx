import { View, Text, Button } from 'react-native'
import { useColors } from '../hooks/useColors'

export default function HomeScreen() {
    const colors = useColors()
    return (
        <View style={{ backgroundColor: colors.background , flex: 1}}>
            <Text style={{ color: colors.text }}>HomeScreen</Text>
            <Button title="Data" onPress={() => {}}/>
        </View>
    )
}