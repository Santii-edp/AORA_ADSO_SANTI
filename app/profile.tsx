import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router';


const Profiles = () => {
  return (
    <View className="flex-1 items-center justify-center
        bg-white">
      <Text>Profile</Text>
      <Text className="text-3xl">Hola Santiago</Text>
      <Text className="text-2xl">Ficha:2902082</Text>
      <StatusBar style="auto" />
      <Link href='/menu' style={{color: 'green'}}>Go to Menu</Link>
    </View>
  )
}

export default Profiles
