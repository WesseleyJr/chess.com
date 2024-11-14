import { Dimensions, StyleSheet } from "react-native";

const{width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  styleButton: {
    width: "100%", 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontWeight:'bold',
  },

  styleButtonIconText: {
    width: "100%", 
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 30,
    paddingLeft: 20
  },

  textIconText:{
    color: '#fff',
    fontSize: width < 767? 18 : 50,
  },

  styleIconText:{
    width: 40,
    height: 40
  },


  styleButtonIcon: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  styleButtonIconTextVertical: {
    width: "100%", 
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  textIconTextVertical:{
    color: '#fff',
    fontSize: width < 767? 10 : 50,
  },

});