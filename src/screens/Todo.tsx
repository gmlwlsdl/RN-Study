import React from 'react'
import { SafeAreaView, View, Text, FlatList, Pressable } from 'react-native'

export default function Todo() {
  type TodoListProps = {
    text: string
  }

  const Data = [
    { id: '1', text: 'Like 👍' },
    { id: '2', text: 'Comment 📢' },
    { id: '3', text: 'Subscribe 🍀' },
  ]

  const TodoList = ({ text }: TodoListProps) => (
    <View className="flex flex-row ">
      <View className="w-6 h-6 bg-cyan-400 rounded-sm "></View>
      <Text className="text-xs">{text}</Text>
      <Pressable className="w-4 h-4 rounded-full border-cyan-400 border-2"></Pressable>
    </View>
  )

  return (
    <SafeAreaView>
      <View className="py-4 px-6">
        <Text className="text-2xl font-bold">Today's tasks</Text>
        <FlatList
          data={Data}
          renderItem={({ item }) => <TodoList text={item.text} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}
