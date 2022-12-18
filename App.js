import { useState } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/Header";
import { TodoItem } from "./components/TodoItem";

export default function App() {
    const [todos, setTodos] = useState([
        { name: "Go Shopping", key: "1" },
        { name: "Study", key: "2" },
        { name: "Play Chess", key: "3" },
    ]);

    const handleAddTodo = (text) => {
        setTodos((prev) => {
            return [...prev, { name: text, key: Math.random() }];
        });
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.container}>
                <Header />
                <View style={styles.main}>
                    <AddTodo handleAddTodo={handleAddTodo} />
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => <TodoItem item={item} />}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 25,
    },
    main: {
        flex: 1,
        backgroundColor: "#999",
        paddingTop: 20,
        paddingHorizontal: 20,
    },
});
