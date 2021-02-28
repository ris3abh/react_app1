import React ,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

const GoalItem = props => {
	return(
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.goalList}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
	);
};

const styles = StyleSheet.create({
  goalList:{
    marginTop:20,
    padding:10,
    backgroundColor: 'lightblue',
    borderRadius: 10
  },
});


export default GoalItem;