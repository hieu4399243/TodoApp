import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { ListView, TodoText, TodoDate, colors,  HiddenButton, SwipedTodoText, ListViewHidden } from '../styles/appStyles';
import {Entypo} from "@expo/vector-icons"

const ListItem = ({ todos, setTodos }) => {
  const [swipedRow, setswipedRow] = useState(null);
  return (
      <SwipeListView
          data={todos}
          renderItem={({ item }) => {
            const RowText = item.key == swipedRow ? SwipedTodoText : TodoText;
            return (
              <ListView>
                <>
                  
                  <RowText>{item.title}</RowText>
                  <TodoDate>{item.date}</TodoDate>
                </>
              </ListView>
            )
          }}
          renderHiddenItem={() => {
            return(
              <ListViewHidden>
                <HiddenButton>
                    <Entypo name="trash" size={25} colors={colors.secondary} />
                </HiddenButton>
              </ListViewHidden>
            )
          }}
          leftOpenValue={80}
          previewRowKey={"1"}
          previewOpenValue={80}
          previewOpenDelay={3000}
          disableLeftSwipe={true}
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1, paddingBottom:30, marginBottom:40
          }}
          onRowOpen={(rowKey)=>{
            setswipedRow(rowKey);
          }}
          onRowClose={(rowKey) =>{
            setswipedRow(null);
          }}
      />
  );
};

export default ListItem