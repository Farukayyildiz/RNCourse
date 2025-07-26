import {useState} from 'react'
import {
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Keyboard,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([])

    function goalInputHandler(enteredText) {
        //console.log(enteredText);
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGoals(currentCourseGoals => [...courseGoals, {text: enteredGoalText, id: Math.random().toString()}])
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.appContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Your Course Goal'}
                        onChangeText={goalInputHandler}
                    />
                    <Button title="Add Goal" onPress={addGoalHandler}/>
                </View>
                <View style={styles.goalsContainer}>
                    <FlatList data={courseGoals} renderItem={(itemData) => {
                        return (
                            <Text style={styles.goalItem}>{itemData.item.text}</Text>
                        );
                    }}
                              keyExtractor={(item, index) => {
                                  return item.id;
                              }}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 4,
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    }
});
