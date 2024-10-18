import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'react-native'

type SplashProps = {
  Home: undefined
  Settings: undefined
}

export default function Splash() {
  const navigation = useNavigation<NavigationProp<SplashProps>>()

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </>
  )
}
