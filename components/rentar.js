import React from 'react';
import { render } from 'react-dom';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  
  } from "react-native";

class Rentar extends React.Component {

    constructor(props) {
        super(props)
        //variables de estado
        this.state = {
          Id_Book: "",
          Id_User: "",
          Renta: "",
          dataSource: []
        };
      }


       //agregar una renta
  InsertRent = () => {
    fetch(`http://localhost:8081/Api_Renta/InsertRenta.php`, {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },

      body: JSON.stringify({
        libro_id: this.state.Id_Book,
        usuario_id: this.state.Id_User,
        rendate: this.state.Renta

      })
    })

      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);

      })
      .catch((error) => {
        console.error(error);
      });

  }


    render (){
    return (

        <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
          {" "}
          Renta de Libros{" "}
        </Text>

        <TextInput
          placeholder="Ingrese el ID del libro"
          onChangeText={(TextInputValue) =>
            this.setState({ Id_Book: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          value={this.state.Id_Book}
          autoFocus={true}
        />

        <TextInput
          placeholder="Ingrese el ID del Usuario"
          onChangeText={(TextInputValue) =>
            this.setState({ Id_User: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          value={this.state.Id_User}
          autoFocus={true}
        />

        <TextInput
          placeholder="Ingrese la fecha"
          onChangeText={(TextInputValue) =>
            this.setState({ Renta: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          value={this.state.Renta}
          autoFocus={true}
        />

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.InsertRent}
        >
          <Text style={styles.TextStyle}> Rentar Libro</Text>
        </TouchableOpacity>

      </View>
    );
    }
};

const styles = StyleSheet.create({

    MainContainer: {
      alignItems: "center",
      flex: 1,
      paddingTop: 30,
      backgroundColor: "#fff",
    },
  
    TextInputStyleClass: {
      textAlign: "center",
      width: "40%",
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: "#5656db",
      borderRadius: 5,
    },
  
    FlatList: {
      width: "100%",
      align_Items: "center",
    },
  
    TouchableOpacityStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 7,
      width: "40%",
      backgroundColor: "#00BCD4",
    },
  
    TextStyle: {
      color: "#fff",
      textAlign: "center",
    },
  
    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },
  });

export default Rentar;