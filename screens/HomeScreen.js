import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './launchScreen/LoginScreen';
import MainScreen from './MainScreen';
import NewListPage from './NewListPage';



const Tab = createBottomTabNavigator();


const HomeScreen = () => {

    function MyTabBar({ state, descriptors, navigation }) {
        return (
            <View style={{ flexDirection: 'row', position: 'absolute', height: 75, bottom: 30, right: 20, left: 20, borderRadius: 15, borderColor: '#fff', borderWidth: 1.5, backgroundColor: '#7c445f', padding: 3 }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };


                    const tabBarIcon = options.tabBarIcon




                    return (
                        <View className='flex-1  flex-row  text-center gap    justify-center mb-0 mt-0  '

                            key={label}>

                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                onPress={onPress}
                                className='w-full h-full   relative'
                                style={{ flex: 1, alignSelf: 'center', alignContent: 'center', justifyContent: 'center' }}
                            >

                                {options.name == 'add' ? (
                                    <View className='w-full flex-1 h-full items-center justify-center'>
                                        <View className='bg-[#d4b360] rounded-full  items-center justify-center p-1.5 mt-2 mb-2'>
                                            <AntDesign name={tabBarIcon} size={40} color={isFocused ? '#7c445f' : 'white'} />
                                        </View>
                                    </View>
                                ) :
                                    (<View className='w-full items-center justify-center'>
                                        {tabBarIcon === 'user' || tabBarIcon === 'logout' ? (


                                            <View className='w-full flex-1 h-full items-center justify-center'>
                                                <View className='bg-[#7c445f] rounded-full  items-center p-3.5 justify-center mt-2 mb-2'>
                                                    <AntDesign name={tabBarIcon} size={24} color={isFocused ? '#d4b360' : 'white'} />
                                                </View>
                                            </View>




                                        ) :

                                            <View className='w-full flex-1 h-full items-center justify-center'>
                                                <View className='bg-[#7c445f] rounded-full  items-center p-3.5 justify-center mt-2 mb-2'>
                                                    <Ionicons name={tabBarIcon} size={24} color={isFocused ? '#d4b360' : 'white'} className='text-white bg-black' />
                                                </View>
                                            </View>


                                        }

                                    </View>)
                                }



                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        );
    }


    return (
        <>


            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#fff"
                tabBar={props => <MyTabBar {...props} />}
                shifting="false"
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#e91e63',
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 40,
                        right: 20,
                        left: 20,
                        height: 80,
                        borderRadius: 200,
                    },
                }}
                sceneContainerStyle={{ marginBottom: 0 }}

            >
                <Tab.Screen name="Home" component={MainScreen}
                    options={{
                        tabBarLabel: 'Home',
                        showIcon: true,
                        tabBarIcon: 'home',
                        name: 'Home'
                    }} />
                <Tab.Screen name="Notes" component={LoginScreen}
                    options={{
                        tabBarLabel: 'Notes',
                        showIcon: true,
                        tabBarIcon: 'book',
                        name: 'Explore'
                    }} />

                <Tab.Screen name="New" component={NewListPage}
                    options={{
                        tabBarLabel: 'user',
                        showIcon: true,
                        tabBarIcon: 'plus',
                        name: 'add'
                    }} />

                <Tab.Screen name="Profile" component={LoginScreen}
                    options={{
                        tabBarLabel: 'Profille',
                        showIcon: true,
                        tabBarIcon: 'user',
                        name: 'Profile'
                    }} />


                <Tab.Screen name="Logout" component={LoginScreen}
                    options={{
                        tabBarLabel: 'Logout',
                        showIcon: true,
                        name: 'Settings',
                        tabBarIcon: 'cog',
                        tabBarStyle: {
                            borderColor: 'red',
                            borderRadius: '20px',
                            borderWidth: 2
                        },
                        tabBarBadge: 3,
                    }} />
            </Tab.Navigator></>

    )
}

export default HomeScreen