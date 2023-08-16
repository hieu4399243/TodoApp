import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {HeaderView, HeaderButton, HeaderTitle, colors} from "./../styles/appStyles";
import { Entypo } from '@expo/vector-icons';
const Header = () => {
  return (
    <HeaderView>
        <HeaderTitle>Todo</HeaderTitle>
        <HeaderButton>
            <Entypo name='trash' size={25} color={colors.tertiary}/>
        </HeaderButton>
    </HeaderView>
  )
}

export default Header