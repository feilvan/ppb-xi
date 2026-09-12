import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
} from "react-native";

export default function State() {
  const [jumlah, setJumlah] = useState(0);
  const [bio, setBio] = useState({ nama: "", kelas: "" });
  const [simpanBio, setSimpanBio] = useState({
    nama: "",
    kelas: "",
  });

  return (
    <View
      style={{
        display: "flex",
        gap: 8,
        width: 200,
        marginHorizontal: "auto",
      }}
    >
      <Text>Jumlah: {jumlah}</Text>
      <Button
        title="Tambah"
        onPress={() => setJumlah(jumlah + 5)}
      />
      <Button title="Reset" onPress={() => setJumlah(0)} />

      <TextInput
        placeholder="Masukkan Nama"
        value={bio.nama}
        onChangeText={(text) =>
          setBio({ nama: text, kelas: bio.kelas })
        }
      />
      <TextInput
        placeholder="Masukkan Kelas"
        value={bio.kelas}
        onChangeText={(text) =>
          setBio({ nama: bio.nama, kelas: text })
        }
      />
      <Button
        title="Simpan Biodata"
        onPress={() => setSimpanBio(bio)}
      />
      <Biodata
        nama={simpanBio.nama}
        kelas={simpanBio.kelas}
      />
    </View>
  );
}

function Biodata({
  nama,
  kelas,
}: {
  nama: string;
  kelas: string;
}) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
      }}
    >
      <Text>Nama: {nama}</Text>
      <Text>Kelas: {kelas}</Text>
    </View>
  );
}
