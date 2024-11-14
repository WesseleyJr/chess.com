import {Image, ImageSourcePropType, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import eye from '../../assets/images/eyeIcon.png'
import eyeClose from '../../assets/images/closeEyeIcon.png'
import { useState } from "react";

interface PropsInput {
  placeHolder: string;
  typeInput?: boolean;
  valueInput?: string;
  handleFunctionInput: (value: string) => void;
  propsIcon?: ImageSourcePropType;
  propsShowEye?: boolean;
}

export const TextInputField = ({ placeHolder, typeInput, valueInput, handleFunctionInput, propsIcon, propsShowEye }: PropsInput) => {

  const [viewPassword, setViewPassword] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Image source={propsIcon} style={styles.styleIcon}/>
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      placeholderTextColor="#CAC6C5"
      secureTextEntry={propsShowEye ? viewPassword : typeInput}
      value={valueInput}
      onChangeText={handleFunctionInput}
      autoCapitalize="none"
    />

    {propsShowEye === true && 
          <TouchableOpacity onPress={() => setViewPassword(!viewPassword)}>
            {viewPassword ? (
              <Image source={eye} style={styles.styleIconEye}/>
            ) : (
              <Image source={eyeClose} style={styles.styleIconEye}/>
            )}
          </TouchableOpacity>
        }
    </View>
  );
};
