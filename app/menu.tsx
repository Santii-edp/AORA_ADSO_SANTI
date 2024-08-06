import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router';


const Menu = () => {
  return (
    <View className="flex-1 items-center justify-center
    bg-white">
      <Text>Menu</Text>
      <Text className="text-3xl">Hola Santiago</Text>
      <Text className="text-2xl"> Welcome to Menu </Text>
      <StatusBar style="auto" />
      <Link href='/#' style={{color: 'red'}}>Go to Home</Link>
    </View>
  )
}

export default Menu
