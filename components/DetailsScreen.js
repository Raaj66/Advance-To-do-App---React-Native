import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {v4 as uuidv4} from 'uuid';

const Order = [
  {
    id: uuidv4(),
    categoryName: 'Family',
    SubCategory: [
      {
        id: uuidv4(),
        name: 'Father Side',
        tasks: [
          {
            id: uuidv4(),
            details: 'Call dady1',
          },
          {
            id: uuidv4(),
            details: 'Call Mom1',
          },
        ],
      },
      {
        name: 'Mother Side',
        tasks: [
          {
            id: uuidv4(),
            details: 'Call dady1',
          },
          {
            id: uuidv4(),
            details: 'Call Mom1',
          },
        ],
      },
    ],
  },
];
console.log('order', Order);
export default function DetailsScreen() {
  return (
    <View style={styles.sectionContainer}>
      {Order.map(item => {
        return (
          <View key={item.id}>
            <View style={styles.taskWrapper}>
              <Text style={styles.CategoryTitle}>{item.categoryName}</Text>
            </View>
            {item.SubCategory.map(item => {
              return (
                <View>
                  <View style={styles.subtaskWrapper}>
                    <Text style={styles.SubCategoryTitle}>{item.name}</Text>
                  </View>
                  {item.tasks.map(item => {
                    return (
                      <View style={styles.eachtaskWrapper}>
                        <Text style={styles.eachtaskTitle}>{item.details}</Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 14,
    backgroundColor: '#E8EAED',
  },
  CategoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'skyblue',
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 20,
  },
  subtaskWrapper: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  SubCategoryTitle: {
    fontSize: 24,
    fontWeight: '500',
    paddingLeft: 20,
  },
  eachtaskWrapper: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'yellow',
    marginLeft: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  eachtaskTitle: {
    fontSize: 18,

    paddingLeft: 20,
  },
});
