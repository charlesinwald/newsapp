import React from "react";
import {
  createBottomTabNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import NewsFeed from "./screens/NewsFeed";
import WebViewScreen from "./screens/WebViewScreen";

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="All"
          component={NewsFeed}
          initialParams={{ filter: "general" }}
          options={{
            tabBarIcon: (props) => (
              <Icon type="feather" name="home" color={props.color} />
            ),
          }}
        />

        <Tab.Screen
          name="Business"
          component={NewsFeed}
          initialParams={{ filter: "business" }}
          options={{
            tabBarIcon: (props) => (
              <Icon type="feather" name="dollar-sign" color={props.color} />
            ),
          }}
        />

        <Tab.Screen
          name="Health"
          component={NewsFeed}
          initialParams={{ filter: "health" }}
          options={{
            tabBarIcon: (props) => (
              <Icon type="feather" name="heart" color={props.color} />
            ),
          }}
        />

        <Tab.Screen
          name="Science"
          component={NewsFeed}
          initialParams={{ filter: "science" }}
          options={{
            tabBarIcon: (props) => (
              <Icon type="ionicon" name="library-outline" color={props.color} />
            ),
          }}
        />

        <Tab.Screen
          name="Tech"
          component={NewsFeed}
          initialParams={{ filter: "technology" }}
          options={{
            tabBarIcon: (props) => (
              <Icon
                type="ionicon"
                name="hardware-chip-outline"
                color={props.color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="WebView"
          component={WebViewScreen}
          options={{
            tabBarIcon: (props) => null,
            tabBarButton: () => null,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
