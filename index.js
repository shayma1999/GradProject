import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {SignIn,CreateAccount,Search,Home ,Details,Search2,Profile,Splash } from "./src/Screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "./src/context";
import Onboarding from './src/screens/Onboarding';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();
const AppStack = createStackNavigator();




const AppStackScreen=()=>(
  <>
  <NavigationContainer>
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Onboarding" component={Onboarding} />
      <AppStack.Screen name="SignIn" component={SignIn} />
    </AppStack.Navigator>
  </NavigationContainer>
</>
);

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? 
    (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) :(
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="الصفحة الرئيسية" component={TabsScreen} />
    <Drawer.Screen name="الملف الشخصي" component={ProfileStackScreen} />
  </Drawer.Navigator>
);
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "تسجيل الدخول" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "عمل حساب جديد" }}
    />
  </AuthStack.Navigator>
);
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="الصفحة الرئيسية" component={Home}/>
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name
      })}
    />

  </HomeStack.Navigator>
);
const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />

  </SearchStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="صفحتي الشخصية" component={Profile} />
  </ProfileStack.Navigator>
); 

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="الصفحة الرئيسية" component={HomeStackScreen} />
    <Tabs.Screen name="بحث" component={SearchStackScreen} />
  </Tabs.Navigator>
);

const index = () =>{
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);



  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
 

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
  </AuthContext.Provider>
   );
};
export default index;

