import React from "react";
import { Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

export default class Listado extends React.Component {
  //CONSTRUCTOR
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  refreshStudents() {
    fetch(
      `http://localhost:8081/Api_Books/ShowAllBooks.php`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        });
      });
  }

  componentDidMount() {
    this.refreshStudents();
  }

  render() {
    return (
      <div>
        <FlatList
          style={styles.FlatList}
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                alert(item.isnm + " " + item.gender)
              }
              style={styles.TouchableOpacityStyle}
            >
              <Text>
                {item.isbn} - {item.name} - {item.gender} - {item.date} - {item.status}
                
              </Text>
            </TouchableOpacity>
          )}
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: "center",
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
  },

  TouchableOpacityStyle: {
    align_Items: "center",
    flex: 1,  
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    width: "50%",
    backgroundColor: "#00BCD4",
  },
  
  FlatList: {
    width: "80%",
    align_Items: "center",
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
});
