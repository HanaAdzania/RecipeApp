import React from 'react';

import RecipeListScreen from './RecipeListScreen';
import ScanRecipeScreen from './ScanRecipeScreen';
import SavedRecipesScreen from './SavedRecipesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const MainScreen = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name='RecipeListScreen' 
            component={RecipeListScreen} 
            options={{
                title:'Recipes', //yang atas
                tabBarLabel:'Recipes', //yang bawah
                tabBarIcon:({color, size, focused})=>(
                <Ionicons
                name={focused?"home-sharp":"home-outline"}
                size={size}
                color={color}
                />
                ),
                tabBarLabelStyle:{color:'pink',},
            }}/>
            <Tab.Screen 
            name='ScanRecipeScreen' 
            component={ScanRecipeScreen} 
            options={{
                title:'Scan',
                tabBarLabel:'Scan',
                tabBarIcon:({color, size, focused})=>(
                <Ionicons
                    name={focused?"scan-sharp":"scan-outline"}
                    size={size}
                    color={color}
                    />
                    ),
                tabBarActiveTintColor:'pink',
                tabBarInactiveTintColor:'grey',

                
            }}/>
            <Tab.Screen name='SavedRecipesScreen' component={SavedRecipesScreen}options={{
                title:'Saved',
                tabBarLabel:'Saved',
                tabBarIcon:({color, size, focused})=>(
                    <Ionicons
                        name={focused?"bookmark":"bookmark-outline"}
                        size={size}
                        color='orange'
                        />
                        ),
            }}/>
        </Tab.Navigator>
    );
};

export default MainScreen;