import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Sections from './sections/Sections';
import Fruits from './sections/Fruits';
import DairyProducts from './sections/DairyProducts';
import BreadCereal from './sections/BreadCereal';
import Drinks from './sections/Drinks';
import MeatGroup from './sections/MeatGroup';
import Vegetables from './sections/Vegetables';
import Nuts from './sections/Nuts';
import FatsOils from './sections/FatsOils';
import Creams from './sections/Creams';



const Navigator = createStackNavigator({
  Sections: { screen: Sections },
  Fruits: { screen: Fruits },
  DairyProducts:{screen:DairyProducts},
  BreadCereal: { screen: BreadCereal },
  Drinks:{screen:Drinks},
  MeatGroup: { screen: MeatGroup },
  Vegetables:{screen:Vegetables},
  Nuts:{screen:Nuts},
  FatsOils:{screen:FatsOils},
  Creams:{screen:Creams},

});


const SectionApp = createAppContainer(Navigator);

export default SectionApp;