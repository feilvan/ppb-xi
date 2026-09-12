import { Link } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <View style={{ display: "flex", gap: 8 }}>
      <Link href={"/profile"}>Ke halaman profile</Link>
      <Text>Jumlah: {jumlah}</Text>
      <Button
        title="Tambah"
        onPress={() => setJumlah(jumlah + 5)}
      />
      <Button title="Reset" onPress={() => setJumlah(0)} />
    </View>
  );
}
