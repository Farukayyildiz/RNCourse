import {useState} from 'react'
import {
    StyleSheet,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([])

    function addGoalHandler(enteredGoalText) {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.appContainer}>
                <GoalInput onAddGoal={addGoalHandler} />
                <View style={styles.goalsContainer}>
                    <FlatList data={courseGoals} renderItem={(itemData) => {
                        return <GoalItem text={itemData.item.text} />;
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


    goalsContainer: {
        flex: 4,
    },
});
