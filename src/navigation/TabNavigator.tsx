import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DataScreen from '../screens/DataScreen';
import SetAlarmScreen from '../screens/SetAlarmScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="SetAlarm" component={SetAlarmScreen} />
            <Tab.Screen name="Data" component={DataScreen} />
        </Tab.Navigator>
    )
}