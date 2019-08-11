import {
  createAppContainer,
  createStackNavigator,
  StackNavigatorConfig,
  NavigationRouteConfigMap,
  BottomTabNavigatorConfig,
  TabNavigatorConfig,
  NavigationContainer,
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

/**
|--------------------------------------------------
| Stack navigator for Movie Tab
| - Catalog and Details screen
|--------------------------------------------------
*/

const movieStackRouteConfig: NavigationRouteConfigMap = {
  MovieList: {},
  MovieDetails: {},
};

const MovieStack: NavigationContainer = createStackNavigator(
  movieStackRouteConfig,
);

/**
|--------------------------------------------------
| Tab Navigator and Route Config
|--------------------------------------------------
*/

const tabRouteConfig: NavigationRouteConfigMap = {
  MovieStack: {
    /* add navigation props */
  },
  Account: {},
};

const TabStack: NavigationContainer = createMaterialBottomTabNavigator(
  tabRouteConfig,
);

export default createAppContainer(TabStack);
