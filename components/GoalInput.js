import React ,{useState} from 'react';
import {View ,TextInput ,Button ,StyleSheet ,Modal} from 'react-native';

const GoalInput = props => {
	const [enteredGoal ,setEnteredGoal] =useState('');

	const goalInputHandler = (enteredText) =>{
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => { 
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
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
            <View style={styles.buttonBros}>
                <Button 
                    title= "Cancel" 
                    color= "red"
                    onPress={props.onCancel}
                />
                <Button 
                    title="Add Goal" 
                    style={styles.buttonField}
                    onPress={addGoalHandler}
                /> 
            </View>
    	</View>
    </Modal>
	);
};
const styles = StyleSheet.create({
	fieldOne:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    goalField:{
        width: '60%',
        borderBottomColor: 'darkgrey' ,
        borderBottomWidth: 2 ,
        marginBottom:10,
        paddingLeft:70,
        paddingTop:20,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonBros:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GoalInput;