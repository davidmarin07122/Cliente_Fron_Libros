import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,

} from "react-native";
import './styles/app_styles.css'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Listado from "./components/listado";
import Users from "./components/users";
import Rentar from "./components/rentar";

class Home extends React.Component {
  //definicion del constructor y sus variables de estado

  constructor(props) {
    super(props)
    //variables de estado
    this.state = {
      Book_Id: "",
      Book_Isbn: "",
      Book_Name: "",
      Book_Gender: "",
      Book_Date: "",
      Book_Status: "",
      dataSource: []
    };
  }

  refreshBooks() {
    fetch(`http://localhost:8081/Api_Books/ShowAllBooks.php`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        })
      })
  }
  //Metodos 
  //al cargar todos los componentes de la interfaz
  componentDidMount() {
    this.refreshBooks();
  }

  //agregar un Libro
  InsertBook = () => {
    fetch(`http://localhost:8081/Api_Books/InsertBook.php`, {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },

      body: JSON.stringify({
        isbn: this.state.Book_Isbn,
        name: this.state.Book_Name,
        gender: this.state.Book_Gender,
        date: this.state.Book_Date,
        status: this.state.Book_Status

      })
    })

      .then((response) => response.json())
      .then((responseJson) => {
        alert("Libro registrado");
        alert(responseJson);

        this.refreshBooks();

      })
      .catch((error) => {
        console.error(error);
      });

  }

  //BUSCAR UN Libro
  SearchUser = () => {
    fetch(`http://localhost:8081/Api_Books/ShowBookId.php`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },

      body: JSON.stringify({
        id_book: this.state.Book_Id
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          Book_Isbn: responseJson[0]['isbn'],
          Book_Name: responseJson[0]['name'],
          Book_Gender: responseJson[0]['gender'],
          Book_Date: responseJson[0]['date'],
          Book_Status: responseJson[0]['status'],
        })
      })
      .catch((error) => {
        alert("No se encuentra el ID");
        this.setState({
          Book_Isbn: '',
          Book_Name: '',
          Book_Gender: '',
          Book_Phone_Num: '',
          Book_Date: '',
          Book_Status: '',
          dataSource: []
        })
      })
  }

  //ELIMINAR UN Libro 
  DeleteBook = () => {
    fetch('http://localhost:8081/Api_Books/DeleteBook.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isbn: this.state.Book_Isbn
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson)
        this.refreshBooks();
      }).catch((error) => {
        console.error(error);
      });
  }

  //ACTUALIZAR UN Libro
  UpdateBook = () => {

    fetch('http://localhost:8081/Api_Books/UpdateBook.php', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
        id_book:  this.state.Book_Id,
        isbn:     this.state.Book_Isbn,
        name:     this.state.Book_Name,
        gender:   this.state.Book_Gender,
        date:     this.state.Book_Date,
        status:   this.state.Book_Status
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
        this.refreshBooks();
      }).catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (

      <View style={styles.MainContainer}>
        <Text style={{ color: 'red' }}>
          Bienvenid@: {JSON.stringify(this.props.navigation.getParam('Name', 'sin usuario'))}
        </Text>
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
          {" "}
          Registro de Libro{" "}
        </Text>

        <TextInput
          placeholder="Ingrese el ID del libro"
          onChangeText={(TextInputValue) =>
            this.setState({ Book_Id: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          value={this.state.Book_Id}
          autoFocus={true}
        />


        <TextInput
          placeholder="Ingrese el isbn del Libro"
          onChangeText={(TextInputValue) =>
            this.setState({ Book_Isbn: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          value={this.state.Book_Isbn}
          autoFocus={true}
        />

        <TextInput
          placeholder="Ingreseel nombre del Libro"
          onChangeText={(TextInputValue) =>
            this.setState({ Book_Name: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          value={this.state.Book_Name}
        />

        <TextInput
          placeholder="Ingrese genero del libro"
          onChangeText={(TextInputValue) =>
            this.setState({ Book_Gender: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          value={this.state.Book_Gender}
        />

        <TextInput
          placeholder="Ingrese la fecha"
          onChangeText={(TextInputValue) =>
            this.setState({ Book_Date: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          value={this.state.Book_Date}
        />

        <TextInput
          placeholder="Ingrese el status del libro"
          onChangeText={(TextInputValue) =>
            this.setState({ Book_Status: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          value={this.state.Book_Status}
        />

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.InsertBook}
        >
          <Text style={styles.TextStyle}> Agregar </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.SearchUser}
        >
          <Text style={styles.TextStyle}> Buscar </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.UpdateBook}
        >
          <Text style={styles.TextStyle}> Atualizar </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.DeleteBook}
        >
          <Text style={styles.TextStyle}> Eliminar </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={() => this.props.navigation.navigate('Libros')}
        >
          <Text style={styles.TextStyle}> Listar </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={() => this.props.navigation.navigate('Rentas')}
        >
          <Text style={styles.TextStyle}> Rentar Libro </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
//IMPORTACION DE LOS COMPONENTES
const RootStack = createStackNavigator(
  {
    Inicio: Home,
    Libros: Listado,
    Sesion: Users, 
    Rentas: Rentar
  },
  {
    initialRouteName: 'Sesion',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


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
