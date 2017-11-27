import React from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import axios from "axios";

import ListItem from "./src/components/ListItem";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get(`https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=25`)
      .then(response => {
        this.setState({ data: response.data });
      });
  }

  render() {
    return (
      <View>
        <StatusBar />
        <FlatList
          style={styles.listContainer}
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              name={item.name}
              eur={item.price_eur}
              usd={item.price_usd}
              btc={item.price_btc}
              hour={item.percent_change_1h}
              day={item.percent_change_24h}
              week={item.percent_change_7d}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  listContainer: {
    marginTop: 20
  }
});
