// Todo.tsx에서 FlatList로 대체

import { View, Text, Pressable } from 'react-native'

type TodoListProps = {
  text: string
}

export default function TodoList({ text }: TodoListProps) {
  return (
    <View className="flex flex-row ">
      <View className="w-6 h-6 bg-cyan-400 rounded-sm "></View>
      <Text className="text-xs">{text}</Text>
      <Pressable className="w-4 h-4 rounded-full border-cyan-400 border-2"></Pressable>
    </View>
  )
}
