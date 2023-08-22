import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Products from "./screens/Products";
import ProductDetails from "./screens/productStack/ProductDetails";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
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
          } else if (route.name === "Details") {
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
          backgroundColor: "rgba(0, 0, 0, .8)",
          position: "absolute",
          borderTopWidth: 0,
        },
        // headerStyle: {
        //     backgroundColor: 'white',
        //     height: 90,
        // },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        // tabBarInactiveBackgroundColor: 'red'
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProductStack"
        component={ProductStack}
        options={{ tabBarLabel: "Produdcts", headerShown: false }}
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
