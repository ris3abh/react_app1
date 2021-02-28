import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View ,Button ,TextInput ,FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals ,setCourseGoals] =useState([]);  

  

    const addGoalHandler = goalTitle =>{
        setCourseGoals(currentGoals => [...courseGoals,
            {id: Math.random().toString(), value: goalTitle
        }]);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <GoalInput onAddGoal={addGoalHandler}/>
            <FlatList 
                data={courseGoals} 
                keyExtractor={(item ,index) => item.id}
                renderItem={itemData => 
                <GoalItem title={itemData.item.value}/>
            }/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 40,
    },
});
