import { Alert, FlatList, View } from "react-native";
import { styles } from "./style";
import { Button } from "../Button";
import { DataFooter } from "../../Mock/DataFooter";

const handlePlay = () => {
  Alert.alert("Jogar");
};
const handleClick = (title: string) => {
  Alert.alert(`Você clicou ${title}`);
};

export const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Button
          propsColor="#fff"
          propsBackgroundColor="#86A94B"
          title="Jogar"
          handleFunction={handlePlay}
          propsFontSize={25}
          propsHeight={55}
        />

        <FlatList
          contentContainerStyle={styles.nav}
          horizontal={true}
          data={DataFooter}
          keyExtractor={(dados) => dados.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.styleItem}>
              <Button
                propsTypeButton="iconTextVertical"
                handleFunction={() => handleClick(item.title)}
                propsIcon={item.propsIcon}
                title={item.title}
                propsColor={item.propsColor}
                propsWidthIcon={item.propsWidthIcon}
                propsHeightIcon={item.propsHeightIcon}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};
