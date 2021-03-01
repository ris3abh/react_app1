import React ,{useState} from 'react';
import {View ,TextInput ,Button ,StyleSheet ,Modal} from 'react-native';

const GoalInput = props => {
	const [enteredGoal ,setEnteredGoal] =useState('');
	const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText);
  };
	return(
    <Modal visible={props.visible} animationType="slide">
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
    </Modal>
	);
};
const styles = StyleSheet.create({
	fieldOne:{
      flex:1,
    	justifyContent:"center",
    	alignItems:"center",
      marginBottom:10
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