import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, View } from 'react-native'

type SplashProps = {
  Home: undefined
  Settings: undefined
}

export default function Splash() {
  const navigation = useNavigation<NavigationProp<SplashProps>>()

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="w-fit h-auto bg-slate-400 rounded-md"
      >
        <Text className="text-white text-xl px-1">Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}
