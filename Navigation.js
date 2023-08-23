import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Cart from "./src/screens/Cart";
import Products from "./src/screens/Products";
import ProductDetails from "./src/screens/productStack/ProductDetails";
import Checkout from "./src/screens/productStack/Checkout";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wines" component={Products} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "ProductStack") {
            iconName = focused ? "ios-wine" : "ios-wine-outline";
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "white",
          position: "absolute",
          borderTopWidth: 0,
        },
        // headerStyle: {
        //     backgroundColor: 'white',
        //     height: 90,
        // },
        tabBarActiveTintColor: "#C70039",
        tabBarInactiveTintColor: "black",
        // tabBarInactiveBackgroundColor: 'red'
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProductStack"
        component={ProductStack}
        options={{ tabBarLabel: "Wines", headerShown: false }}
      />
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
