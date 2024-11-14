import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";

export const Login = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUser = (value: string) => {
    setUser(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
    Alert.alert("Login realizado");
    console.log(`User: ${user} / Senha: ${password}`);
  };

  const handleForgotPassword = () => {
    Alert.alert("Esqueceu a senha");
  };

  return (
    <>
      <Header />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.main}>
            <Button
              title="Acesse com Facebook"
              handleFunction={handleLogin}
              propsBackgroundColor="#464241"
              propsIcon={require("../../assets/images/facebookIcon.png")}
              propsTypeButton="iconText"
            />
            <Button
              title="Acesse com Google"
              handleFunction={handleLogin}
              propsBackgroundColor="#464241"
              propsIcon={require("../../assets/images/googleIcon.png")}
              propsTypeButton="iconText"
            />
            <View style={styles.division}>
              <View style={styles.line} />
              <Text style={styles.styleText}>ou entre com</Text>
              <View style={styles.line} />
            </View>
            <TextInputField
              placeHolder="Nome de usuário ou email"
              valueInput={user}
              handleFunctionInput={handleUser}
              propsIcon={require("../../assets/images/userIcon.png")}
            />
            <TextInputField
              placeHolder="Senha"
              typeInput={true}
              valueInput={password}
              handleFunctionInput={handlePassword}
              propsIcon={require("../../assets/images/cadeadoIcon.png")}
              propsShowEye={true}
            />
            <Button
              title="Esqueceu / Redefinir Senha?"
              propsBackgroundColor="#312D2A"
              propsHeight={20}
              propsFontSize={15}
              propsColor="#CAC6C5"
              handleFunction={handleForgotPassword}
            />
            <Button
              title="Entrar"
              handleFunction={handleLogin}
              propsBackgroundColor="#86A94B"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
