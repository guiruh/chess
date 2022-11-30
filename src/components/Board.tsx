import { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import Background from "./Background";


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
    backgroundColor: '#c2c2c2'
  },
});

const Board = () => {
  const [state, setState] = useState({player: 'w'});
  return (
    <View style={styles.container}>
      <Background />
    </View>
  )
}

export default Board;