import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";

interface PropsButton {
  title?: string;
  propsBackgroundColor?: string;
  handleFunction?: () => void;
  propsFontSize?: number;
  propsHeight?: number;
  propsColor?: string;
  propsIcon?: ImageSourcePropType;
  propsTypeButton?: string;
  propsWidthIcon?: number;
  propsHeightIcon?: number;
}

export const Button = ({
  title,
  propsBackgroundColor,
  handleFunction,
  propsFontSize,
  propsHeight,
  propsColor,
  propsTypeButton = "text",
  propsIcon,
  propsWidthIcon,
  propsHeightIcon,
}: PropsButton) => {
  return (
    <>
      {propsTypeButton === "text" && (
        <TouchableOpacity
          onPress={handleFunction}
          activeOpacity={0.7}
          style={[
            styles.styleButton,
            {
              backgroundColor: propsBackgroundColor
                ? propsBackgroundColor
                : "red",
            },
            { height: propsHeight ? propsHeight : 60 },
          ]}
        >
          <Text
            style={[
              styles.text,
              { fontSize: propsFontSize ? propsFontSize : 20 },
              { color: propsColor ? propsColor : "#fff" },
            ]}
          >
            {title ? title : "Entrar"}
          </Text>
        </TouchableOpacity>
      )}

      {propsTypeButton === "iconText" && (
        <TouchableOpacity
          onPress={handleFunction}
          activeOpacity={0.7}
          style={[
            styles.styleButtonIconText,
            {
              backgroundColor: propsBackgroundColor
                ? propsBackgroundColor
                : "red",
            },
          ]}
        >
          <Image source={propsIcon} style={styles.styleIconText} />
          <Text style={styles.textIconText}>{title ? title : "Entrar"}</Text>
        </TouchableOpacity>
      )}

      {propsTypeButton === "icon" && (
        <TouchableOpacity
          onPress={handleFunction}
          activeOpacity={0.7}
          style={[
            styles.styleButtonIcon,
            {
              backgroundColor: propsBackgroundColor
                ? propsBackgroundColor
                : "red",
            },
          ]}
        >
          <Image
            source={propsIcon}
            style={[
              { height: propsHeightIcon ? propsHeightIcon : 25 },
              { width: propsWidthIcon ? propsWidthIcon : 30 },
            ]}
          />
        </TouchableOpacity>
      )}

      {propsTypeButton === "iconTextVertical" && (
        <TouchableOpacity
          onPress={handleFunction}
          activeOpacity={0.5}
          style={[styles.styleButtonIconTextVertical]}
        >
          <Image
            source={propsIcon}
            style={[
              { width: propsWidthIcon ? propsWidthIcon : 20 },
              { height: propsHeightIcon ? propsHeightIcon : 20 },
            ]}
          />
          <Text
            style={[
              styles.textIconTextVertical,
              { color: propsColor ? propsColor : "#7D7C7A" },
            ]}
          >
            {title ? title : "Entrar"}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};
