import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Products from "./screens/Products";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Details") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Products") {
            iconName = focused ? "ios-wine" : "ios-wine-outline";
          }
          return <Ionicons name={iconName} size={30} color={color} />
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        // tabBarActiveBackgroundColor: 'black',
        // tabBarInactiveBackgroundColor: 'red'
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Products" component={Products} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default Navigation;
