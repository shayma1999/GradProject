import React,{useState} from 'react';
import {View, TouchableOpacity, Animated,StyleSheet, SafeAreaView, Dimensions} from 'react-native';

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 54,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
  tabButton: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  activeTab: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabInner: {
    width: 48,
    height: 48,
    backgroundColor: '#E1F5FE',
    borderRadius: 24,
  },
});

const TabBar = props => {
  const {
    renderIcon,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
  } = props;

  const {routes, index: activeRouteIndex} = navigation.state;
  const totalWidth = Dimensions.get("window").width;
  const tabWidth = totalWidth / routes.length;
  const [translateValue] = useState(new Animated.Value(0)); 
// When the user opens the application, it's the first tab that is open.
// The initial value of translateX is 0.

  const onTabBarPress = (route, routeIndex) => {
    onTabPress(route); // function that will change the route;
    Animated.spring(translateValue, {
      toValue: routeIndex * tabWidth,
// The translateX value should change depending on the chosen route
      velocity: 10,
      useNativeDriver: true,
    }).start(); // the animation that animates the active tab circle
  };
  return (
    <SafeAreaView>
      <View style={S.container}>
        <View>
          <View style={StyleSheet.absoluteFillObject}>
            <Animated.View
              style={[
                S.activeTab,
                {
                  width: tabWidth,
                  transform: [{translateX: translateValue}],
                },
              ]}>
              <View style={S.activeTabInner} />
            </Animated.View>
 {/* the container that we animate */}
          </View>
        </View>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

          return (
            <TouchableOpacity
              key={routeIndex}
              style={S.tabButton}
              onPress={() => {
                onTabBarPress({route}, routeIndex);
              }}
              onLongPress={() => {
                onTabLongPress({route});
              }}
              accessibilityLabel={getAccessibilityLabel({route})}>
              {renderIcon({route, focused: isRouteActive, tintColor})}
            </TouchableOpacity>


          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TabBar;