import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NotificationScreen from "./NotificationScreen"
import CalendarScreen from "./CalendarScreen";

const Tab = createBottomTabNavigator();

function HomeScreen() {

    return (
      <Tab.Navigator>
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
      </Tab.Navigator>
    );
}

export default HomeScreen