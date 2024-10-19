import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Pressable,
  Alert,
} from 'react-native'
import cn from '../utils/cn'
import { TextInput } from 'react-native-gesture-handler'
import Entypo from '@expo/vector-icons/Entypo'

type TodoListProps = {
  item: itemData
  onDelete: () => void
  backgroundColor: boolean
}

type itemData = {
  id: string
  text: string
}

const initialData: itemData[] = [
  { id: '1', text: 'Like 👍' },
  { id: '2', text: 'Comment 📢' },
  { id: '3', text: 'Subscribe 🍀' },
]

const TodoList = ({ item, onDelete, backgroundColor }: TodoListProps) => (
  <View
    className={cn(
      'flex flex-row items-center bg-slate-50 rounded-lg',
      'mb-5 w-full h-12 px-3 justify-between',
      'shadow-sm'
    )}
  >
    <View className="flex flex-row items-center">
      <View className="w-6 h-6 bg-cyan-300 rounded-md"></View>
      <Text className="ml-3 text-xs">{item.text}</Text>
    </View>
    <Pressable
      className={`w-4 h-4 rounded-full border-cyan-300 border-2 ${
        backgroundColor === true ? 'bg-cyan-300' : ''
      }`}
      onPress={onDelete}
    ></Pressable>
  </View>
)

export default function Todo() {
  const [selectedId, setSelectedId] = useState<string>()
  const [data, setData] = useState<itemData[]>(initialData)
  const [newTask, setNewTask] = useState<string>('')

  const renderItem = ({ item }: { item: itemData }) => {
    const backgroundColor = item.id === selectedId ? true : false

    const deleteTodo = () => {
      setData((prevData) => prevData.filter((Todo) => Todo.id != item.id))
    }

    return (
      <TodoList
        item={item}
        onDelete={deleteTodo}
        backgroundColor={backgroundColor}
      />
    )
  }

  const addTodo = () => {
    if (newTask.trim() === '') {
      Alert.alert('Please write a task before adding')
      return
    }

    const newTodo: itemData = {
      id: (data.length + 1).toString(),
      text: newTask,
    }

    setData((prevData) => [...prevData, newTodo])
    setNewTask('')
  }

  return (
    <SafeAreaView className="flex-1 bg-zinc-200">
      <View className="flex-1 justify-between py-4 px-6">
        <View className="flex-1">
          <Text className="text-2xl font-bold">Today's tasks</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            className="mt-7"
          />
        </View>
        <View className="flex-row items-center gap-8 shadow-sm">
          <TextInput
            value={newTask}
            onChangeText={setNewTask}
            placeholder="Write a task"
            className="flex-grow h-12 bg-white rounded-3xl placeholder:text-center"
          />
          <Pressable
            onPress={addTodo}
            className="flex-none w-16 h-16 bg-white rounded-full justify-center items-center"
          >
            <Entypo name="plus" size={40} color="#e4e4e7" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}
