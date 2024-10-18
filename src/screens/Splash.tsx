import { View } from 'react-native'
import GoBtn from '../components/GoBtn'

export default function Splash() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <GoBtn title="home" />
      <GoBtn title="setting" />
    </View>
  )
}
