import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Picker,
  CheckBox,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [destino, setDestino] = useState(0);
  const [numPer, setNumPer] = useState("");
  const [numDias, setNumDias] = useState("");
  const [addBarco, setAddBarco] = useState(false);
  const [addDisco, setAddDisco] = useState(false);
  const [total, setTotal] = useState("");

  const Limpiar = () => {
    setId("");
    setName("");
    setDestino("");
    setNumPer("");
    setNumDias("");
    setAddBarco("");
    setAddDisco("");
    setTotal("");
  }

  const Calcular = () => {
    let precio;
    if (id != "" && name != "" && destino != 0 && numPer != "" && numDias != "") {
      if (parseInt(numPer) > 0 && parseInt(numDias) > 0) {
        switch(destino){
          case '1': precio = 300000;break;
          case '2': precio = 250000;break;
          case '3': precio = 200000;break;
        }
        precio = precio * parseInt(numPer);
        precio = precio * parseInt(numDias);
        if(addBarco == true){
          precio = precio + (100000 * parseInt(numPer));
        }
        if(addDisco == true){
          precio = precio + (120000 * parseInt(numPer));
        }
        if(parseInt(numPer) > 10){
          precio = precio - (precio * 10 / 100);
        }
        setTotal(precio);
      }
      else {
        alert("Los campos número de personas y número de días deben ser númericos!!");
      }
    }
    else {
      alert("Los campos con * son obligatorios!!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ textAlign: "left" }}>
        <View>
          <Image
            style={{ width: 200, height: 200, margin:"auto" }}
            source={require("./img/logo.jpg")}
          />
        </View>
        <View style={styles.separar}>
          <Text style={{ color: "red" }}>*</Text>
          <Text style={styles.text}>Identificación</Text>
          <TextInput
            value={id}
            onChangeText={setId}
            style={styles.input}
          />
        </View>
        <View style={styles.separar}>
          <Text style={{ color: "red" }}>*</Text>
          <Text style={styles.text}>Nombre</Text>
          <TextInput value={name} onChangeText={setName} style={styles.input} />
        </View>
        <View style={styles.separar}>
          <Text style={{ color: "red" }}>*</Text>
          <Text style={styles.text}>Destino</Text>
          <Picker
            selectedValue={destino}
            style={{ height: 35, width: 200, borderWidth: 1 }}
            onValueChange={(itemValue, itemIndex) => setDestino(itemValue)}
          >
            <Picker.Item label="Seleccione su destino" value="0" />
            <Picker.Item label="Cartagena" value="1" />
            <Picker.Item label="Santa Marta" value="2" />
            <Picker.Item label="San Andres" value="3" />
          </Picker>
        </View>
        <View style={styles.separar}>
          <Text style={{ color: "red" }}>*</Text>
          <Text style={styles.text}>Número de personas</Text>
          <TextInput
            value={numPer}
            onChangeText={setNumPer}
            style={styles.input}
          />
        </View>
        <View style={styles.separar}>
          <Text style={{ color: "red" }}>*</Text>
          <Text style={styles.text}>Número de días</Text>
          <TextInput
            value={numDias}
            onChangeText={setNumDias}
            style={styles.input}
          />
        </View>
        <View style={styles.separar}>
          <Text style={styles.text}>Adiccionales</Text>
          <View>
            <View style={styles.separar}>
              <CheckBox value={addBarco} onValueChange={setAddBarco} />
              <Text>Barco</Text>
            </View>
            <View style={styles.separar}>
              <CheckBox value={addDisco} onValueChange={setAddDisco} />
              <Text>Discoteca</Text>
            </View>
          </View>
        </View>
        <View style={styles.separar}>
          <Text style={styles.text}>Total a pagar</Text>
          <TextInput style={styles.input} value={total} />
        </View>
        <View style={styles.separar}>
          <TouchableOpacity style={styles.button} onPress={Calcular}>
            <Text>Calcular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={Limpiar}>
            <Text>Limpiar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
  },
  input: {
    borderBottomWidth: 1,
  },
  separar: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
  },
  button: {
    backgroundColor: "lightblue",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    margin: 10,
  },
});
