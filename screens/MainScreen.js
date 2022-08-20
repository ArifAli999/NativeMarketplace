import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { Entypo } from '@expo/vector-icons';
import QuickView from '../components/QuickView';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CategoryBoxes from '../components/CategoryBoxes';
import CategoryPills from '../components/CategoryPills';
import { Ionicons } from '@expo/vector-icons';
import useAuthStore from '../authStore'
import { auth, db } from '../firebase'
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import getUserDetails from '../util/getUserDetails'
import { signOut } from 'firebase/auth';




const MainScreen = () => {
    const { userDetails, userProfile, addUserDets, addUser } = useAuthStore()




    const handleSignOut = (e) => {
        signOut(auth)
            .then(() => {
                addUser('')
                addUserDets('');
                alert("Logged Out");

            })
            .catch((error) => {
                alert(error.message);
                // ..
            });
    };






    return (
        <SafeAreaView className='h-full w-full bg-white'>

            <View className='  w-full  max-h-[95%]  h-[90%]  mb-20 relative ' >

                <SafeAreaView className='flex-row justiy-between items-center'>
                    <View className='p-4 flex-1'>
                        <Text className='text-xl font-normal text-[#424242]   whitespace-pre-wrap'>
                            Hello {userDetails && userDetails.firstname}
                        </Text>
                        <Text className='text-base text-gray-600'>Good to see you again</Text>
                    </View>


                    <Pressable className=' p-4 bg-pink-300 w-10 h-10 rounded-full mr-6 ml-6 ' onPress={handleSignOut}>
                    </Pressable>



                </SafeAreaView>



                <View className=' p-4 flex-1  relative '>

                    <ScrollView className='flex-row  h-[10%] px-2 mb-10 mt-10 '
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>

                        <QuickView name='Trending' link='' color='#FF5733' icons={<FontAwesome5 name="fire" size={24} color='#FF5733' />} />
                        <QuickView name='Watched' link='' color='#F03182' icons={<Feather name="watch" size={24} color="#F03182" />} />
                        <QuickView icon='heart' name='Wish List' color='#F52E5E' link='' />
                        <QuickView icon='book' name='Orders' color='#9215F9' link='' />
                        <QuickView icon='setting' name='Settings' link='' />
                    </ScrollView>





                    <CategoryBoxes />






                    <ScrollView className='flex-row px-4 mt-2  h-[30%]   '
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <CategoryPills name='Food' icons={<Ionicons name="fast-food" size={24} color="#7c445f" />} />
                        <CategoryPills name='Electronics' icons={<Entypo name="classic-computer" size={24} color="#7c445f" />} />
                        <CategoryPills name='Clothing' icons={<Ionicons name="shirt" size={24} color="#7c445f" />} />

                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MainScreen