import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: "coral",
        paddingTop: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
});
