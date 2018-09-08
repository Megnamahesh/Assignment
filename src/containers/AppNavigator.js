import {  createMaterialTopTabNavigator } from "react-navigation";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import React from "react";


import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import List from "./ListProduct";
import Search from "./SearchProduct";



export const Navigator = createMaterialTopTabNavigator(
  {
    List : List,
    Search : Search,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "List") {
          iconName = `ios-list-box${focused ? "" : "-outline"}`;
        } else if (routeName === "Search") {
          iconName = `ios-search${focused ? "" : "-outline"}`;
        } else if (routeName === "Stores") {
          return (
            <MaterialIcons
              name="local-grocery-store"
              size={25}
              color={tintColor}
            />
          );
        }

        return <Ionicons name={iconName} size={30} color={tintColor} />;
        <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white", 
      inactiveTintColor: "white"
    }
  }
);

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navState
);
const addListener = createReduxBoundAddListener("root");

class App extends React.Component {
  render() {
    return (
      <Navigator
        navigation={{
          dispatch: this.props.dispatch,
          state: this.props.navState,
          addListener
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  navState: state.navState
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
