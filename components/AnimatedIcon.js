import { View, Text, Animated, Easing } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { spin } from '../anims/spin'



const AnimatedIcon = () => {
    return (
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <FontAwesome5 name="spinner" size={26} color="white" />
        </Animated.View>
    )
}

export default AnimatedIcon