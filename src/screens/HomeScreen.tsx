import { View, Text, Button } from 'react-native'
import { useColors } from '../hooks/useColors'
import { NativeModules } from 'react-native';



export default function HomeScreen() {
    const { SetAlarm } = NativeModules;
    const colors = useColors()
    const handleData = () => {
        SetAlarm.showToast('Hello from Native Modules');
    }
    return (
        <View style={{ backgroundColor: colors.background , flex: 1}}>
            <Text style={{ color: colors.text }}>HomeScreen</Text>
            <Button title="Data" onPress={handleData}/>
        </View>
    )
}