import React, { useState } from 'react'
import { SafeAreaView, View, Text, FlatList, Pressable } from 'react-native'
import cn from '../utils/cn'

type TodoListProps = {
  item: itemData
  onPress: () => void
  backgroundColor: boolean
}

type itemData = {
  id: string
  text: string
}

const Data: itemData[] = [
  { id: '1', text: 'Like 👍' },
  { id: '2', text: 'Comment 📢' },
  { id: '3', text: 'Subscribe 🍀' },
]

const TodoList = ({ item, onPress, backgroundColor }: TodoListProps) => (
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
      onPress={onPress}
    ></Pressable>
  </View>
)

export default function Todo() {
  const [selectedId, setSelectedId] = useState<string>()

  const renderItem = ({ item }: { item: itemData }) => {
    const backgroundColor = item.id === selectedId ? true : false

    return (
      <TodoList
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
      />
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-zinc-200">
      <View className="py-4 px-6">
        <Text className="text-2xl font-bold">Today's tasks</Text>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          className="mt-7"
        />
      </View>
    </SafeAreaView>
  )
}
