import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider';
import Feather from 'react-native-vector-icons/Feather'

export default function App() {

  const [tamanhoSenha, setTamanhoSenha] = useState(10);
  const [senha, setSenha] = useState('');
  const [botao, setBotao] = useState(true);

  function gerarSenha() {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!@#$';
    let pass = '';
    for (let i = 0; i < tamanhoSenha; i++) {
      pass += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setSenha(pass);
    setBotao(false);
  }

  function limpar() {
    setSenha('')
    setBotao(true);
    setTamanhoSenha(10);
  }

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


        <Text style={styles.caracteres}>Tamanho: {tamanhoSenha.toFixed()} caracteres</Text>

        {botao && (
          <TouchableOpacity style={styles.botao} onPress={gerarSenha}>
            <Text style={styles.textBotao}>Gerar Senha</Text>
          </TouchableOpacity>
        )}


      </View>

      {senha.length > 0 && (
        <View style={styles.areaResultado}>
          <Text style={styles.textResultado}>Sua senha gerada foi: </Text>
          <Text style={styles.senha}>{senha}</Text>
        </View>
      )}

      {senha.length != 0 && (
        <TouchableOpacity style={styles.botaoLimpar} onPress={limpar}>
          <Text style={styles.textBotao}>LIMPAR</Text>
        </TouchableOpacity>
      )}


    </SafeAreaView>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102841',
    justifyContent: 'center',
    paddingBottom: 90,
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
    backgroundColor: '#33b2ff',
    borderWidth: 0
  },
  textBotao: {
    fontSize: 18,
    color: '#fff'
  },
  areaResultado: {
    backgroundColor: "#121212",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 90,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    // opacity: .5,
  },
  textResultado: {
    color: '#fff',
    fontSize: 18,
  },
  senha: {
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold'
  },
  botaoLimpar: {
    marginTop: 20,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#0050b2',
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0
  }
});