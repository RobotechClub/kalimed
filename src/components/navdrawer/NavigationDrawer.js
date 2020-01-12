import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import ApplicationHeader from '../main/ApplicationHeader'
import HomeScreen from '../screens/HomeScreen'
import {NavigationDrawerHeader} from './NavigationDrawerHeader'


const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: () => <ApplicationHeader navigationProps={navigation} />,
    }),
  },
});

const NavigationDrawer = createDrawerNavigator({
  Home: {
    screen: HomeStackNavigator,
    navigationOptions: {
    },
  },
}, {
  // define customComponent here
  contentComponent: NavigationDrawerHeader,
})

export default createAppContainer(NavigationDrawer);