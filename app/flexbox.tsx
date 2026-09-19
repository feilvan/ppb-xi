import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Flexbox() {
  const siswa = [
    { id: "1", nama: "Budi", kelas: "XI RPL" },
    { id: "2", nama: "Andi", kelas: "XI RPL" },
    { id: "3", nama: "Citra", kelas: "XI RPL" },
  ];

  const style = StyleSheet.create({
    item: {
      padding: 8,
      backgroundColor: "#f00",
      height: 70,
      width: 70,
    },
  });

  return (
    <View>
      <View
        style={{
          display: "flex",
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
      <View>
        <FlatList
          data={siswa}
          renderItem={({ item }) => (
            <Text style={style.item}>
              {item.nama} {item.kelas}
            </Text>
          )}
        />
      </View>
    </View>
  );
}
