import React from 'react'
import { WebView } from 'react-native-webview'

export default function Home() {
  return (
    <WebView
      source={{
        uri: 'https://www.google.co.kr',
      }}
    />
  )
}
