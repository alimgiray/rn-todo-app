import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal}]);
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals(currentGoals => [...currentGoals.filter((goal) => goal.id !== id)])
  }
  const [modalState, setModalState] = useState(false);
  const setModalStateHandler = () => {
    setModalState(currentModalState => !currentModalState);
  }
  return (
    <View style={styles.screen}>
      <Button title="Add new" onPress={setModalStateHandler} />
      <GoalInput onAddGoal={addGoalHandler} modalState={modalState} setModalState={setModalStateHandler} />
      <FlatList 
        data={courseGoals} 
        keyExtractor={(item, index) => item.id}
        renderItem={goal => <GoalItem title={goal.item.value} id={goal.item.id} onDelete={deleteGoalHandler} />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingHorizontal: 10
  },
});
