import { View, Text, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import { MaterialIcons } from '@expo/vector-icons';
import useAuthStore from '../../authStore';

const MultiSelect = ({ formData, setFormData, listItems, label }) => {

    const { addToForm, formState } = useAuthStore();


    const [selectedItems, setSelectedItems] = useState(formData ? formData.skills : []);
    const ref = useRef(null)



    function onSelectedItemsChange(selectedItems) {
        setSelectedItems(selectedItems);

        setFormData({ ...formData, skills: selectedItems })

    };


    const handleSubmit = () => {
        setFormData({ ...formData, [label]: selectedItems })


    };

    const handleSelect = (selectedList) => {
        setItems(selectedList);
    };

    const handleRemove = (selectedList) => {
        setItems(selectedList);
    };


    return (
        <SectionedMultiSelect
            items={listItems}
            IconRenderer={MaterialIcons}
            selectToggleIconComponent={<MaterialIcons name="keyboard-arrow-down" size={20} color="#000" />}
            modalWithTouchable
            uniqueKey="id"
            ref={ref}
            subKey="children"
            selectText={label}
            showDropDowns={true}
            readOnlyHeadings={true}
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={formData.skills ? formData.skills : selectedItems}
            modalWithSafeAreaView={true}
            colors={{
                primary: '#5c3a9e',
                success: '#5c3a9e',
                chipColor: '#333'
            }}
            styles={{
                chipText: {
                    maxWidth: Dimensions.get('screen').width - 90,
                    color: '#fff',

                },
                chipContainer: {
                    backgroundColor: '#000',
                    justifyContent: 'space-between',

                },

                container: {
                    backgroundColor: '#fff',
                    padding: 20
                },
                modalWrapper: {
                    padding: 30,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                },
                chipsWrapper: {
                    paddingHorizontal: 10,
                    marginTop: 10
                },
                searchBar: {
                    marginBottom: 40,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    borderRadius: 20
                },

                selectToggle: {
                    marginTop: 20,
                    marginBottom: 6,
                    padding: 16,
                    borderWidth: 0.5,
                    borderRadius: 50,
                    borderColor: '#7c445f',
                    borderStyle: 'solid',


                },
                selectToggleText: {
                    color: '#7c445f',
                },

                item: {
                    paddingHorizontal: 20,
                    width: '100%',
                    borderColor: '#7c445f',
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    paddingVertical: 10,

                },
                button: {
                    backgroundColor: '#7c445f',
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    borderRadius: 50,
                    textTransform: 'uppercase',
                },




                subItem: {

                    paddingVertical: 20,
                    paddingHorizontal: 20,
                    width: '100%',

                },

                subSeparator: {

                },

                selectedItem: {

                },
                selectedSubItem: {
                    backgroundColor: '#'
                },
                selectedSubItemText: {
                    color: '#000'
                },


                scrollView: { paddingHorizontal: 2 },

                chipIcon: {
                    color: '#fff',
                },
                itemText: {
                    color: 'black',
                    fontSize: 20,
                    marginBottom: 0,
                    marginTop: 10,

                },
                selectedItemText: {
                    color: '#ccc',
                },
                subItemText: {
                    color: 'black',
                    fontSize: 16,
                },

            }}
        />
    )
}










export default MultiSelect