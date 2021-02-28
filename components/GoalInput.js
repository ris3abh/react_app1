import React ,{useState} from 'react';
import {View ,TextInput ,Button ,StyleSheet} from 'react-native';

const GoalInput = props => {
	const [enteredGoal ,setEnteredGoal] =useState('');
	const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText);
  };
	return(
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
          		onPress={() => props.onAddGoal(enteredGoal)}
        	/>
    	</View>
	);
};
const styles = StyleSheet.create({
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
});

export default GoalInput;