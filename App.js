import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import indexScreen from "./src/screens/indexScreen";
import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator (

  {
    Index: indexScreen
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
    <BlogProvider>
      <App/>
    </BlogProvider>
  )
  
}