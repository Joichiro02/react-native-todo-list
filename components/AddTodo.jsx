import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export const AddTodo = ({ handleAddTodo }) => {
    const [todo, setTodo] = useState("");
    const handleChange = (text) => {
        setTodo(text);
    };
    const handlePress = () => {
        handleAddTodo(todo);
        setTodo("");
    };
    return (
        <View style={styles.main}>
            <TextInput
                style={styles.input}
                placeholder="add todo..."
                onChangeText={handleChange}
                value={todo}
            />
            <View style={styles.button}>
                <Button title="Add Todo" color="coral" onPress={handlePress} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        marginBottom: 20,
        borderRadius: 5,
    },
    input: {
        backgroundColor: "cyan",
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
    },
    button: {
        marginTop: 10,
    },
});
