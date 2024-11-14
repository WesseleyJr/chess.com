import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";

interface PropsButton {
  title?: string;
  subtitle?: string;
  propsIcon?: ImageSourcePropType;
  propsImage?: ImageSourcePropType;
  propsHeightIcon?: number;
  propsWidthIcon?: number;
}

export const Card = ({
  title,
  subtitle,
  propsImage,
  propsIcon,
  propsHeightIcon,
  propsWidthIcon
}: PropsButton) => {
  return (
    <TouchableOpacity activeOpacity={0.3} style={styles.styleCard}>
      <Image source={propsImage} style={styles.styleImage} />
      <View style={styles.styleInfo}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubtitle}>{subtitle}</Text>
        <Image source={propsIcon} style={[{height: propsHeightIcon? propsHeightIcon : 20}, {width: propsWidthIcon?propsWidthIcon:20}]} />
      </View>
    </TouchableOpacity>
  );
};
