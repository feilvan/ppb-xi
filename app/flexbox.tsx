import { StyleSheet, Text, View } from "react-native";

export default function Flexbox() {
  const style = StyleSheet.create({
    item: {
      padding: 8,
      backgroundColor: "#f00",
      height: 50,
      width: 50,
    },
  });
  return (
    <View
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Text style={style.item}>Item 1</Text>
      <Text style={style.item}>Item 2</Text>
      <Text style={style.item}>Item 3</Text>
    </View>
  );
}
