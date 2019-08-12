import {
  createAppContainer,
  createStackNavigator,
  NavigationRouteConfigMap,
  NavigationContainer,
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import MovieList from "../screens/MovieList";

/**
|--------------------------------------------------
| Stack navigator for Movie Tab
| - Catalog and Details screen
|--------------------------------------------------
*/

const movieStackRouteConfig: NavigationRouteConfigMap = {
  MovieList: {
    screen: MovieList,
  },
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
    screen: MovieStack,
    navigationOptions: {
      title: "Movies"
    }
  },
};

const TabStack: NavigationContainer = createMaterialBottomTabNavigator(
  tabRouteConfig,
);

export default createAppContainer(TabStack);
