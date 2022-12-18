import React from "react";
import { StyleSheet, Text } from "react-native";

export const TodoItem = ({ item }) => {
    return <Text style={styles.item}>{item.name}</Text>;
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 20,
        borderColor: "#000",
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 5,
    },
});
