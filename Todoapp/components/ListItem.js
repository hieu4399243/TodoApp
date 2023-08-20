import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { ListView, TodoText, TodoDate, colors, Hidee } from '../styles/appStyles';

const ListItem = ({ todos, setTodos }) => {
  return (
      <SwipeListView
          data={todos}
          renderItem={({ item }) => {
            return (
              <ListView>
                <>
                  
                  <TodoText>{item.title}</TodoText>
                  <TodoDate>{item.date}</TodoDate>
                </>
              </ListView>
            )
          }}
          renderHiddenItem={() => {
            
          }}
      />
  );
};

export default ListItem