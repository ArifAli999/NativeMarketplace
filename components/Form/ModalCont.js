import React, { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import GradDrop from './GradDropDown';
import { AntDesign } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context';
import AutoInput from './AutoInput';
import useAuthStore from '../../authStore';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';


const DefaultModalContent = ({ setModalVisible, formData, setFormData }) => {

    const { addToForm, formState, deleteFormState } = useAuthStore();


    const [uniname, setUni] = useState('');
    const [country, setCountry] = useState('');
    const [year, setYear] = useState('');
    const [degree, setDegree] = useState('');
    const [button, setButton] = useState(false);


    useEffect(() => {
        //deleteFormState()
        if (uniname.length > 0) {
            setButton(false)

        }
        //console.log(formState)
    }, [])


    const scratchRef = useRef(useAuthStore.getState().formState)
    // Connect to the store on mount, disconnect on unmount, catch state-changes in a reference
    useEffect(() => useAuthStore.subscribe(
        state => (scratchRef.current = state.formState)


    ), [])



    async function saveData() {
      
        //setFormData({ ...formData, education: { country: country, year: year, degree: degree } });
    }








    const checkInputs = () => {






        if (formData.education.university && formData.education.country) {
            addToForm([formData.education])
            alert('Data saved')
        }

        else {
            alert('fill in all fields')
        }
        //deleteFormState()
      //  console.log([scratchRef])









    }



    function returnData() {
        const data = formState && formState.filter(n => n).map((item, index) => (



            <View className=' flex-1  border-b p-4 border-gray-400' key={index} >
                {item.map((item, index) => (
                    <Text className=' font-xl flex-1 text-gray-600 ' key={index}>{item.university}  </Text>
                ))}

            </View>


        ))

        return data
    }






    return (

        <SafeAreaView style={styles.content} className='bg-white w-full h-full justify-between '>
            <View>
                <View className=' w-full border border-t-0 border-r-0 border-l-0 justify-between flex-row items-center border-gray-300'>

                    <Text className='mt-4 mb-4 ml-4 mr-4 font-bold border border-gray-300'>ADD EDUCATION</Text>
                    <AntDesign name="close" size={20} color="#7c445f" style={{ marginRight: 20 }} onPress={() => setModalVisible(false)} />

                </View>

                <View className='w-full  px-4 mt-4'>
                    <AutoInput formData={formData} setFormData={setFormData} uniname={uniname} setUni={setUni} />


                    <View className='  flex-row justify-bbetween mt-4'>
                        <View className='flex-1'>
                            <TextInput
                                value={formData.education ? formData.education.country : ''}

                                onChangeText={(text) => setFormData({ ...formData, education: { ...formData.education, country: text } })}
                                placeholder='Country' placeholderTextColor='black' className='border rounded-full px-4 py-4 mr-4   border-[#7c445f] flex-1 w-full ' />
                        </View>

                        <GradDrop formData={formData} setFormData={setFormData} year={year} setYear={setYear} />
                    </View>



                </View>


                <View className='p-4 flex-row items-center justify-between gap-4'>
                    <TextInput
                        value={formData.education.degree}
                        onChangeText={(text) => setFormData({ ...formData, education: { ...formData.education, degree: text } })}
                        placeholder='Degree Type' placeholderTextColor='black' className='border rounded-full px-4 py-4   border-[#7c445f] flex-1 w-[100%] ' />
                    <TouchableOpacity onPress={() => saveData()} className='bg-white border border-[#7c445f] text-white p-4 rounded-full'>
                        <AntDesign name="check" size={20} color="#7c445f" />
                    </TouchableOpacity>
                </View>

            </View>



            <View className="flex-1 justify-between mt-4 bg-gray-200">
                <ScrollView

                    showsVerticalScrollIndicator={true}>

                    {returnData()}

                </ScrollView>


                <TouchableOpacity onPress={() => checkInputs()} className='p-4 bg-black text-white flex flex-row justify-between w-full items-center'
                    disabled={false}>
                    <Text className='text-white text-base uppercase font-bold p-0' styles={{ color: 'white' }}>Confirm</Text>
                    <AntDesign name="arrowright" size={26} color="#7c445f" style={{ marginRight: 20 }} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    )
};

const styles = StyleSheet.create({
    content: {


        width: '100%',
        height: '80%',


        borderRadius: 4,

    },
    modalContainer: {
        justifyContent: ''
    },
    modalContent: {
    }
    ,
    contentTitle: {
        fontSize: 20,
        marginBottom: 1,
        width: '100%',

    },
});

export default DefaultModalContent;