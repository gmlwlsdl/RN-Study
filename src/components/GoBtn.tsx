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

type GoBtnProps = {
  title: string
}

export default function GoBtn({ title }: GoBtnProps) {
  const navigation = useNavigation<NavigationProp<SplashProps>>()

  const handlePress = () => {
    if (title === 'home') {
      navigation.navigate('Home')
    } else if (title === 'setting') {
      navigation.navigate('Settings')
    }
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`w-fit h-auto bg-slate-400 rounded-md ${
        title === 'setting' ? 'mt-4' : ''
      }`}
    >
      <Text className="text-white text-xl px-1">Go to {title}</Text>
    </TouchableOpacity>
  )
}
