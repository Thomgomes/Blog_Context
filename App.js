import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaulNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
