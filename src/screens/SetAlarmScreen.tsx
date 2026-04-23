import { View, Text } from 'react-native'
import { useColors } from '../hooks/useColors'

export default function SetAlarmScreen() {
    const colors = useColors()
    return (
        <View style={{ backgroundColor: colors.background , flex: 1}}>
            <Text style={{ color: colors.text }}>SetAlarmScreen</Text>
        </View>
    )
}