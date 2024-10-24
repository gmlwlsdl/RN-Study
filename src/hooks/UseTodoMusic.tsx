import React, { useEffect, useState } from 'react'
import { Audio } from 'expo-av'
import { Alert } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import getLocalTime from '../utils/getLocalTime'

const useTodoMusic = () => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [sound, setSound] = useState<Audio.Sound | null>(null)

  useEffect(() => {
    const time = getLocalTime()
    const fetchMusicData = async () => {
      try {
        const response = await fetch(
          `https://ac-api.vercel.app/api/?time=${time}`
        )
        const data = await response.json()
        const bgm = data.music.find((music: any) => music.game === 'City Folk')

        if (bgm) {
          setAudioUrl(bgm.file)
          await playSound(bgm.file)
        } else {
          Alert.alert('New Horizons data not found')
        }
      } catch (err) {
        Alert.alert('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }

    fetchMusicData()

    return () => {
      unloadSound()
    }
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        unloadSound()
      }
    }, [sound])
  )

  const playSound = async (url: string) => {
    if (sound) {
      await unloadSound()
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: url },
      { shouldPlay: true }
    )

    setSound(newSound)
    await newSound.playAsync()
  }

  const unloadSound = async () => {
    if (sound) {
      await sound.stopAsync()
      await sound.unloadAsync()
      setSound(null)
    }
  }

  return
}

export default useTodoMusic
