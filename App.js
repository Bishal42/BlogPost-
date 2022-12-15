import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import indexScreen from "./src/screens/indexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";

const navigator = createStackNavigator (

  {
    Index: indexScreen,
    Show: ShowScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title:'BlogPost',

    }
  }
)

const App = createAppContainer(navigator);

export default ()=>{
  return (
    <Provider>
      <App/>
    </Provider>
  )
  
}