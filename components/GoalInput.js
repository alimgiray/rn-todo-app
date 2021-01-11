import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };
    return (
        <Modal visible={props.modalState} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Goal" 
                    style={styles.textInput} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal}
                />
                <View style={styles.button}>
                    <Button 
                        title="ADD" 
                        color="white"
                        onPress={() => {
                            props.onAddGoal(enteredGoal);
                            setEnteredGoal('');
                            props.setModalState();
                        }}
                    />
                </View>
                <Button
                    title="CANCEL"
                    color="red"
                    onPress={() => {
                        setEnteredGoal('');
                        props.setModalState();
                    }}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    textInput: {
        borderBottomColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        width: '80%'
    },
    button: {
        width: '80%',
        marginTop: 10,
        backgroundColor: 'blue',
    }
});

export default GoalInput;