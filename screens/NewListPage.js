import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';
import GeneralForm from '../components/Form/GeneralForm';
import FinalForm from '../components/Form/FinalForm';
import AdvancedForm from '../components/Form/AdvancedForm';
import useAuthStore from '../authStore';
import { addToDb } from '../util/addDb';



const NewListPage = ({ navigation }) => {

    const { userProfile, userDetails, formState, addToForm } = useAuthStore();
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: '',
        job: '',
        location: userDetails && userDetails.location,
        name: userDetails && userDetails.username,
        userid: userProfile.uid,
        skills: [],
        education: {},
        phone: ''
    });



    function nextPage() {
        setPage(page + 1);
    }


    // useEffect(() => { console.log(formData); }, [formData])

    function logData() {
        setFormData({ ...formData, education: { ...formData.education, ...formState } })

        addToDb(formData).then(() => {
            setFormData({ ...formData, education: {}, skills: [], location: '', job: '', type: '', description: '', title: '', phone: '' });

        }
        ).then(() => {
            navigation.navigate('Home');

        }).
            catch(err => {
                console.log(err);
            }
            )
    }

    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return <GeneralForm formData={formData} setFormData={setFormData} nextPage={nextPage} />;
            case 1:
                return <AdvancedForm formData={formData} setFormData={setFormData} nextPage={nextPage} />;
            case 2:
                return <FinalForm formData={formData} setFormData={setFormData} nextPage={nextPage} />;
            default:
                return <GeneralForm formData={formData} setFormData={setFormData} nextPage={nextPage} />;
        }
    };



    return (

        <SafeAreaView className='  h-full w-full   max-h-[90%]'>
            <KeyboardAvoidingView
                keyboardVerticalOffset={300}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className='    border-gray-300   flex-1 overflow-hidden'>


                {conditionalComponent()}





            </KeyboardAvoidingView>

            <View className='  mt-0 mb-6 mr-6 ml-6 overflow-hidden   justify-between  flex-row  '>


                <View >
                    {
                        page > 0 && <Pressable className='w-[100px] bg rounded-full border border-[#d4b360] items-center justify-center ' onPress={() => setPage(page - 1)}>
                            <Text className='text-[#d4b360] p-4 font-bold'>Back</Text>
                        </Pressable>
                    }
                </View>




                <View>
                    {page === 0 || page === 1 ? (
                        <Pressable className='w-[%] bg-transparent items-center justify-center border border-[#7c445f]  rounded-full' onPress={nextPage}>
                            <Text className='text-[#7c445f] p-4 font-bold'>Continue</Text>
                        </Pressable>
                    ) : (
                        <Pressable className='w-[120px] rounded-full bg-[#7c445f] border border-[#7c445f]  items-center justify-center ' onPress={() => logData()}>
                            <Text className='text-white p-4 font-bold'>Submit</Text>
                        </Pressable>
                    )}
                </View>




            </View>


        </SafeAreaView>




    )
}

export default NewListPage