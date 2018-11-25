import React from 'react';
import { Platform, View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ProfileScreen from '../screens/ProfileScreen'
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-ios-home'
      }
    />
  ),
};

const NotificationStack = createStackNavigator({
  Notifications: NotificationScreen,
});

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notification',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-notifications-outline' : 'md-notifications-outline'}
    />
  ),
};

const PlusStack = createStackNavigator({
  Settings: SettingsScreen,
});

PlusStack.navigationOptions = {
  tabBarLabel: '-',
  tabBarIcon: ({ focused }) => (
    <View
      style={{
        borderRadius:'50',
        backgroundColor:Colors.tintColor,
        color:'',
        width:55,
        height:55,
        alignItems:'center',
        alignContent:'center'
      }}
    >
      <Text
        style={{color:'white', fontSize:50}}
      > + </Text>
    </View>
    // <TabBarIcon
    //   focused={focused}
    //   name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    // />
  ),
};

const ScheduleStack = createStackNavigator({
  Schedule:ScheduleScreen,
})

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile:ProfileScreen,
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};



export default createBottomTabNavigator({
  HomeStack,
  NotificationStack,
  PlusStack,
  ScheduleStack,
  ProfileStack
});
