import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View ,Button ,TextInput ,FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
export default function App() {

  const [enteredGoal ,setEnteredGoal] =useState('')
  const [courseGoals ,setCourseGoals] =useState([]);  

  const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () =>{
    setCourseGoals(currentGoals => [...courseGoals,
      {id: Math.random().toString(), value: enteredGoal
    }]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style= {styles.fieldOne} >
        <TextInput 
          placeholder="COURSE GOAL" 
          style={styles.goalField}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button 
          title="Add Goal" 
          style={styles.buttonField}
          onPress={addGoalHandler}
        />
      </View>
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
  fieldOne:{
    flexDirection:'row' ,
    justifyContent:"space-between",
    alignItems:"center"
  },
  goalField:{
    width: '70%',
    borderBottomColor: 'darkgrey' ,
    borderBottomWidth: 2 ,
    paddingTop:20,
  },
  buttonField:{
    borderRadius: 40,
  },
  goalList:{
    marginTop:20,
    padding:10,
    backgroundColor: 'lightblue',
    borderRadius: 10
  },
});
