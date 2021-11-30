import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import App from '../App';
import '../styles/users.css'

export default class Users extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      ID: '',
      Name: '',
      Password: '',
      Phone: "",
      Password: "",
      Email: "",
    }

  }

  SearchUser = () => {

    fetch(`http://localhost:8081/Api_Users/SearchUser.php`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.Name,
        password: this.state.Password,
        email: this.state.Email,
        phone: this.state.Phone
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          Name: responseJson[0]['name'],
          Password: responseJson[0]['password']
        })
        this.props.navigation.navigate('Inicio', {
          Name: this.state.Name
        })

      }).catch((error) => {
        alert('No se encuentra el Usuario');
        this.setState({
          ID: '',
          Name: '',
          Email: '',
          Password: '',
        })
      });

  }

  //agregar un ususario
  InsertUser = () => {
    fetch(`http://localhost:8081/Api_Users/InsertUser.php`, {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },

      body: JSON.stringify({
        name: this.state.Name,
        email: this.state.Email,
        password: this.state.Password,
        phone: this.state.Phone
      })
    })

      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);

        this.props.navigation.navigate('Inicio', {
          Name: this.state.Name
        })
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return (

      <View style={styles.MainContainer}>

        {/* FORMULARIO */}

        <body>
          <div class="form">
            <form>
              <h2>Sign In</h2>


              <div class="input-box">
                <TextInput
                  placeholder="Nombre de Usuario"
                  onChangeText={TextInputValue => this.setState({ Name: TextInputValue })}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  value={this.state.Name}
                  autoFocus={true}

                />
              </div>

              <div class="input-box">

                <TextInput
                  placeholder="Contraseña"
                  onChangeText={TextInputValue => this.setState({ Password: TextInputValue })}
                  underlineColorAndroid='transparent'
                  secureTextEntry={true}
                  style={styles.TextInputStyleClass}
                  value={this.state.Password}

                />
              </div>

              <div class="input-box">
                <i class="fa fa-email"></i>
                <TextInput
                  placeholder="Email"
                  onChangeText={TextInputValue => this.setState({ Email: TextInputValue })}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  value={this.state.Email}

                />
              </div>

              <div class="input-box">
                <i class="fa fa-phone"></i>
                <TextInput
                  placeholder="Telefono"
                  onChangeText={TextInputValue => this.setState({ Phone: TextInputValue })}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  value={this.state.Phone}

                />
              </div>
            <div class="botones">
              <div class="input-box-b">
                <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.SearchUser} >
                  <Text style={styles.TextStyle}> Iniciar Sesión </Text>
                </TouchableOpacity>
              </div>

              <div class="input-box-b">
                <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.InsertUser} >
                  <Text style={styles.TextStyle}> Registrate! </Text>
                </TouchableOpacity>
              </div>
            </div>

            </form>
          </div>
        </body>

        <View style={styles_image.container_image}>
          <Image
            source={require("../assets/books.jpg")}
            style={{
              width: "900px",
              height: "1500px",
              resizeMode: "center",
              marginLeft: -500,
              marginTop: -860,

            }}
          />
        </View>

      </View>




    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
    display:'flex', 


  },

  TextInputStyleClass: {

    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,

  },

  TouchableOpacityStyle: {

    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    marginLeft: 10,
    width: '100%',
    backgroundColor: '#5656db',

    border: "none",
    cursor: "pointer",
    color:"#fff",
    transition:"0.5s",
    borderRadius: "8px",

  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }

});

const styles_image = StyleSheet.create({
  container_image: {
    display:'flex',
    top: '10%'
  },
});