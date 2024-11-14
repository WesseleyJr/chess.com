import { FlatList, View } from "react-native";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { DataCards } from "../../Mock/DataCards";
import { styles } from "./style";

export const Home = () => {
  return (
    <>
      <Header  propsPageHeader="home"/>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.styleCard}
          data={DataCards}
          keyExtractor={(dados) => dados.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.subtitle}
              propsImage={item.propsImage}
              propsIcon={item.propsIcon}
              propsHeightIcon={item.propsHeightIcon}
              propsWidthIcon={item.propsWidthIcon}
            />
          )}
        />
      </View>
      <Footer/>
    </>
  );
};
