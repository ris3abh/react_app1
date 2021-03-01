import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, View ,Button ,FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    
    const [courseGoals ,setCourseGoals] =useState([]); 

    const [isAddMode ,setisAddMode] = useState(false);

    const addGoalHandler = goalTitle =>{
        setCourseGoals(currentGoals => [...courseGoals,
            {id: Math.random().toString(), value: goalTitle
        }]);
    };

    const removeGoalHandler = goalId =>{
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id != goalId);
        });
    }

    return (
        <View style={styles.container}>
            <Button title = "Add new Goal" 
                onPress={() => setisAddMode(true)}
            />
            <StatusBar style="auto" />
            <GoalInput visible = {isAddMode} onAddGoal={addGoalHandler}/>
            <FlatList 
                data={courseGoals} 
                keyExtractor={(item ,index) => item.id}
                renderItem={itemData => 
                <GoalItem id = {itemData.item.id} onDelete={removeGoalHandler } title={itemData.item.value}/>
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
