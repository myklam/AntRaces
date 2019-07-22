import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import LoginScreen from "../../screens/LoginScreen";
import AntStatsScreen from "../../screens/AntStatsScreen";

const AppStack = createStackNavigator({ AntStats: AntStatsScreen });

const MainNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScreen,
      App: AppStack
    },
    {
      initialRouteName: "Login"
    }
  )
);
export default MainNavigator;
