import React ,{useState} from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';

const GoalItem = props => {
	return(
		<View style={styles.goalList}>
        	<Text>{props.title}</Text>
      	</View>
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