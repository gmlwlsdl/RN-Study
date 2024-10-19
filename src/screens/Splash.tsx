import { View } from 'react-native'
import GoBtn from '../components/Splash/GoBtn'

export default function Splash() {
  return (
    <View className="flex-1 items-center justify-center">
      <GoBtn title="home" />
      <GoBtn title="todo" />
    </View>
  )
}
