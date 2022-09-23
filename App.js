import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider';
import Feather from 'react-native-vector-icons/Feather'

export default function App() {

  const [tamanhoSenha, setTamanhoSenha] = useState(6);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Feather
          size={40}
          name="lock"
          color={'#33b2ff'}

        />
        <Text style={styles.titulo}>Gerador de Senhas</Text>
      </View>
      <View style={styles.areaContainer}>
        <Slider
          style={{ width: '90%', height: 90 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor={'#fff'}
          minimumTrackTintColor={'#085eff'}
          thumbTintColor={'#085eff'}

          value={tamanhoSenha}
          onValueChange={(valor) => setTamanhoSenha(valor)}

        />


        <Text style={styles.caracteres}>Tamhanho: {tamanhoSenha.toFixed()} caracteres</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textBotao}>Gerar Senha</Text>
        </TouchableOpacity>
      </View>



    </SafeAreaView>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102841',
    justifyContent: 'center',
    paddingBottom: 90
  },
  titulo: {
    color: '#33b2ff',
    fontSize: 30,
    marginTop: 10
  },
  areaContainer: {
    alignItems: 'center',
  },
  caracteres: {
    color: "#FFF",
    fontSize: 18
  },
  botao: {
    marginTop: 20,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '90%',
    backgroundColor: '#33b2ff'
  },
  textBotao: {
    fontSize: 18,
    color: '#fff'
  }
});