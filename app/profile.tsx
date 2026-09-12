import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Profile() {
  return (
    <View
      style={{
        display: "flex",
        gap: 8,
      }}
    >
      <Text>INI HALAMAN PROFILE</Text>
      {/* Menggunakan <Link> */}
      <Link href={"/"}>Kembali</Link>
      {/* Menggunakan <Button> router.push() */}
      <Button
        title="Kembali [router.push()]"
        onPress={() => router.push("/")}
      />
      {/* Menggunakan <Button> router.back() */}
      <Button
        title="Kembali [router.back()]"
        onPress={() => router.back()}
      />
    </View>
  );
}
