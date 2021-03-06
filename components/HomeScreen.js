import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import Task from './Task';
import {AddCategory} from '../redux/action/ToDoAction';
import {v4 as uuidv4} from 'uuid';

function HomeScreen(props) {
  const [singleTask, setsingleTask] = useState();
  const [taskList, settaskList] = useState([]);

  const {navigation, Tasks} = props;

  console.log('Tasks', Tasks);
  const handleAddTask = id => {
    if (singleTask) {
      settaskList([...taskList, singleTask]);
      setsingleTask(null);
      props.AddCategory({...taskList, id: uuidv4(), categoryName: singleTask});
    } else {
      alert('please enter task');
    }
  };

  const CompleteTask = index => {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    settaskList(itemsCopy);
  };

  const handlenavigation = () => {
    navigation.navigate('Details', {
      taskList,
    });
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        {/* Task Section */}
        <View style={styles.items}>
          {taskList?.length > 0 &&
            taskList?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlenavigation()}>
                  <View>
                    <Task
                      key={item.id}
                      data={item}
                      handleDelete={() => CompleteTask(index)}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
      {/* Create a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTextWrapper}>
        <TextInput
          name="catergoryName"
          style={styles.input}
          placeholder={'Write a task'}
          value={singleTask}
          onChangeText={text => setsingleTask(text)}
        />

        {/* Create task */}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#E8EAED',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTextWrapper: {
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 30,
    width: 360,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth: 0.5,
    borderColor: '#C0C0C0',
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {},
});

const mapDispatchToProps = {
  AddCategory,
};

const mapStateToProps = state => {
  const {Tasks} = state.ToDoReducer;
  return {
    Tasks,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
