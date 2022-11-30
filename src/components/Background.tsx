import { Text, View, StyleSheet } from "react-native";

const WHT = "rgb(100, 133, 68)";
const BLK = "rgb(230, 233, 198)";

interface RowProps {
  row: number;
}

interface SquareProps extends RowProps {
  col: number;
}

const Square = ({ row, col }: SquareProps) => {
  const offset = row % 2 === 0 ? 1 : 0;
  const backgroundColor = (col + offset) % 2 === 0 ? WHT : BLK;
  const color = (col + offset) % 2 === 0 ? BLK : WHT;
  const fontWeight = "500";
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        padding: 4,
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color, opacity: col === 0 ? 1 : 0, fontWeight }}>
        {8 - row}
      </Text>
      <Text
        style={{ color, opacity: row === 7 ? 1 : 0, alignSelf: "flex-end" }}
      >
        {String.fromCharCode("a".charCodeAt(0) + col).toUpperCase()}
      </Text>
    </View>
  );
};

const Row = ({ row }: RowProps) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {new Array(8).fill(0).map((_, col) => (
        <Square key={col} row={row} col={col} />
      ))}
    </View>
  );
};

const Background = () => {
  return (
    <View style={{ flex: 1 }}>
      {new Array(8).fill(0).map((_, row) => (
        <Row key={row} row={row} />
      ))}
    </View>
  );
};

export default Background;
