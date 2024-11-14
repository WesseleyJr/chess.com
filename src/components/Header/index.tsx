import { Alert, Image, View } from "react-native";
import logoImage from "../../assets/images/logo.png";
import { styles } from "./style";
import { Button } from "../Button";

interface PropsHeader {
  propsPageHeader?: string;
}

const handleReturn = () => {
  Alert.alert("Voltar");
};

const handleRegister = () => {
  Alert.alert("Registrar");
};

const handleConfig = () => {
  Alert.alert('Configuração');
};

export const Header = ({ propsPageHeader = "default" }: PropsHeader) => {
  return (
    <>
      {propsPageHeader === "default" && (
        <View style={styles.container}>
          <View style={styles.nav}>
            {/* <Image source={setaIcon} style={styles.setaIcon} alt="Botao para voltar"/> */}
            <Button
              propsBackgroundColor="#252422"
              propsIcon={require("../../assets/images/setaIcon.png")}
              handleFunction={handleReturn}
              propsTypeButton="icon"
            />
          </View>
          <View style={styles.nav}>
            <Image
              source={logoImage}
              style={styles.logoImage}
              alt="Logo chess.com"
            />
          </View>
          <View style={styles.nav}>
            <Button
              title="REGISTRAR"
              propsFontSize={12}
              propsHeight={20}
              propsColor="#FDFCFA"
              propsBackgroundColor="#252422"
              handleFunction={handleRegister}
            />
          </View>
        </View>
      )}

      {propsPageHeader === "home" && (
        <View style={styles.containerHome}>
          <View style={styles.navHome}>
            <Button
              title="REGISTRAR"
              propsFontSize={12}
              propsHeight={20}
              propsColor="#FDFCFA"
              propsBackgroundColor="#252422"
              handleFunction={handleRegister}
            />
          </View>
          <View style={styles.navHome}>
            <Image
              source={logoImage}
              style={styles.logoImageHome}
              alt="Logo chess.com"
            />
          </View>
          <View style={styles.navHome}>
            <Button
              propsBackgroundColor="#252422"
              propsIcon={require("../../assets/images/engrenagemIcon.png")}
              propsHeightIcon={25}
              propsWidthIcon={25}
              handleFunction={handleConfig}
              propsTypeButton="icon"
            />
          </View>
        </View>
      )}
    </>
  );
};
