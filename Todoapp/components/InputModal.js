import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Modal} from 'react-native'
import { ModalButton, ModalContainer, ModalView, StyledInput
, ModalAction, ModalActionGroup, ModalIcon, HeaderTitle, colors } from '../styles/appStyles'
import {AntDesign} from '@expo/vector-icons';
import Header from './Header';

const InputModal = ({modalVisible, todos, setmodalVisible,handleAddTodo, todoInoutValue, settodoInoutValue}) => {
    const handleClose = () =>{
        setmodalVisible(false);
    }
    const handleSubmit = () => {
        handleAddTodo({
            title: todoInoutValue,
            date: new Date().toUTCString(),
            key: `${(todos[todos.length-1] && parseInt(todos[todos.length-1].key)+1) || 1}`
        });
        console.log(todoInoutValue);
        
        settodoInoutValue("");

    }
  return (
    <>
        <ModalButton onPress={() => setmodalVisible(true)}>
            <AntDesign name="plus" size={30} color={colors.secondary}/>
        </ModalButton>

        <Modal 
        animationType='slide' 
        transparent={true} 
        visible={modalVisible} 
        onRequestClose={handleClose}>
            <ModalContainer>
                <ModalView>
                <HeaderTitle>Todos</HeaderTitle>
                    <ModalIcon>
                        <AntDesign name="edit" size={30} color={colors.tertiary}/>
                    </ModalIcon>
                    <StyledInput 
                        placeholder='add a todo' 
                        placeholderTextColor={colors.alternative} 
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => settodoInoutValue(text)}
                        value={todoInoutValue}
                        onSubmitEditing={handleSubmit}
                    />
                    <ModalActionGroup>
                        <ModalAction color={colors.primary} onPress={handleClose}>
                            <AntDesign name="close" size={28} color={colors.tertiary}/>
                        </ModalAction>
                        <ModalAction color={colors.primary} onPress={handleSubmit}>
                            <AntDesign name="check" size={28} color={colors.tertiary}/>
                        </ModalAction>
                    </ModalActionGroup>
                </ModalView>
            </ModalContainer>
        </Modal>
    </>
  )
}

export default InputModal