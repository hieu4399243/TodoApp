import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Header from './Header'
import ListItem from './ListItem'
const Home = () => {

    const initialTodos = [{
        title: "Get some snacks",
        date: "Fri, 08 Jan 2021 16:32:22 GMT",
        key:"1"
    },{
        title: "Get some snacks 2",
        date: "Fri, 08 Jan 2021 16:32:22 GMT",
        key:"2"
    },{
        title: "Get some snacks",
        date: "Fri, 08 Jan 2021 16:32:22 GMT",
        key:"3"
    
    }]
    const [todos, setTodos] = useState(initialTodos);
    
    const handleDelete = () =>{
        setTodos([]);
    }
    
    return (
        <>
            <Header handleDelete ={handleDelete} />
            <ListItem todos={todos} setTodos={setTodos}/>
        </>
    )
}

export default Home
