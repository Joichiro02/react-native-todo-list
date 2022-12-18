import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export const TodoItem = ({
    item,
    handleDelete,
    setEditText,
    setIsEdit,
    isEdit,
}) => {
    const [isDone, setIsDone] = useState(false);
    const handleFinish = () => {
        if (!isDone) {
            setIsDone((prev) => !prev);
        }
    };

    const handleEdit = () => {
        setIsEdit(true);
        setEditText(item);
    };

    return (
        <View style={isDone ? styles.itemDone : styles.item}>
            <Text style={isDone ? styles.done : styles.text}>{item.name}</Text>
            <View style={styles.icons}>
                <MaterialIcons
                    style={styles.icon}
                    name="check"
                    size={20}
                    color="#333"
                    onPress={handleFinish}
                />
                <AntDesign
                    style={styles.icon}
                    name="edit"
                    size={20}
                    color="#333"
                    onPress={handleEdit}
                />
                <MaterialIcons
                    style={styles.icon}
                    name="delete"
                    size={20}
                    color="#333"
                    onPress={() => handleDelete(item.key)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderColor: "#000",
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    itemDone: {
        padding: 10,
        borderColor: "lightgreen",
        backgroundColor: "lightgreen",
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 20,
    },
    done: {
        textDecorationLine: "line-through",
        fontSize: 20,
    },
    icons: {
        flexDirection: "row",
    },
    icon: {
        marginHorizontal: 5,
    },
});
