import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {SignIn,CreateAccount,Search,Home ,Details,Search2,Profile,Splash } from "./src/Screens";
import{DetailsT } from "./src/components/tabkhat";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "./src/context";
//import Onboarding from './src/screens/Onboarding';
//import Home from './components/Home';
import Onboarding from './Onboarding';


const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();
const AppStack = createStackNavigator();
const TabkhatStack = createStackNavigator();
import {MaterialIcon} from './src/components/Icon';
import Icon from './src/components/icon';
import TabBar from './src/components/tabbar';
import { Ionicons } from '@expo/vector-icons';


const TabkhatStackScreen =({}) => (
  <TabkhatStack.Navigator
  name="DetailsT "
        component={DetailsT }
          options={{
            headerShown: false,}}>
        
  </TabkhatStack.Navigator>
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
        component={appOnBording}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);
const appOnBording = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <>
      {showOnboard && <Onboarding handleDone={handleOnboardFinish} />}
      {!showOnboard && <AuthStackScreen />}
    </>
  );
};
const DrawerScreen = () => (
  <Drawer.Navigator drawerPosition="right">
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
    <HomeStack.Screen name="اوريجانو" component={Home} />
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
   <HomeStack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
  </HomeStack.Navigator>
);
const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="بحث" component={Search} />

  </SearchStack.Navigator>
);
const SearchStackScreen2 = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="الاعدادات" component={Search2} />
    <SearchStack.Screen
          name="Search2"
          component={Search2}
          options={{
            headerShown: false,
          }}
        />
        <SearchStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
         <SearchStack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
  </SearchStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="صفحتي الشخصية" component={Profile} />
  </ProfileStack.Navigator>
); 
const myOptions = () => (
  <MaterialIcon size="large" color="purple" name="home" />

);
const TabsScreen = () => (
  
  <Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
        let iconName = "ios-home";

        if(route.name === 'الصفحة الرئيسية') {
        }
        else if (route.name === 'بحث') {
            iconName = 'ios-search';
        } else if (route.name === 'الاعدادات') {
            iconName = 'ios-settings';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
    },
    

})}
  >
    
    <Tabs.Screen name="الصفحة الرئيسية" options={myOptions} component={HomeStackScreen}/>
    <Tabs.Screen name="بحث" component={SearchStackScreen} />
    <Tabs.Screen name="الاعدادات" component={SearchStackScreen2} />
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


