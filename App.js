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

    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState({});

    const handleAddTodo = (text) => {
        if (!isEdit) {
            setTodos((prev) => {
                return [...prev, { name: text, key: Math.random() }];
            });
        } else {
            setTodos((prev) => {
                const prevData = prev.filter(
                    (item) => item.key !== editText.key
                );
                return [...prevData, { name: text, key: editText.key }];
            });
            setIsEdit(false);
        }
    };

    const handleDelete = (key) => {
        setTodos((prev) => prev.filter((item) => item.key !== key));
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
                    <AddTodo
                        handleAddTodo={handleAddTodo}
                        isEdit={isEdit}
                        editText={editText}
                        setEditText={setEditText}
                    />
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <TodoItem
                                item={item}
                                handleDelete={handleDelete}
                                setEditText={setEditText}
                                setIsEdit={setIsEdit}
                                isEdit={isEdit}
                            />
                        )}
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
