import {
  faBell,
  faHome,
  faShoppingBag,
  faTv,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './src/app/containers/HomeScreen';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang Chủ',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faHome} size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Shopee Feed"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Shopee Feed',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faTv} size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Shopee Mall"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Shopee Mall',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faShoppingBag} size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Thông báo',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faBell} size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Tôi',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faUser} size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
