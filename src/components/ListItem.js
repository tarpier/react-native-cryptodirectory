import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = props => {
  const roundToTwoDezimalPoints = number => {
    return (Math.round(number * 100) / 100).toFixed(2);
  };

  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={[styles.priceContainer, styles.container]}>
        <Text>€ {roundToTwoDezimalPoints(props.eur)}</Text>
        <Text>$ {roundToTwoDezimalPoints(props.usd)}</Text>
        <Text>BTC {props.btc}</Text>
      </View>
      <View style={[styles.changeContainer, styles.container]}>
        <View>
          <Text style={styles.changeHeadline}>last hour</Text>
          <Text style={props.hour > 0 ? styles.positive : styles.negative}>
            {props.hour} %
          </Text>
        </View>
        <View>
          <Text style={styles.changeHeadline}>last 24 hours</Text>
          <Text style={props.day > 0 ? styles.positive : styles.negative}>
            {props.day} %
          </Text>
        </View>
        <View>
          <Text style={styles.changeHeadline}>last 7 days</Text>
          <Text style={props.week > 0 ? styles.positive : styles.negative}>
            {props.week} %
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: "#C0C0C0"
  },
  titleContainer: {},
  title: {
    fontWeight: "bold",
    fontSize: 16
  },
  container: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  priceContainer: {
    paddingTop: 5
  },
  changeContainer: {
    paddingTop: 10
  },
  changeHeadline: {
    fontSize: 12,
    fontWeight: "200",
    marginBottom: 3
  },
  positive: {
    color: "green"
  },
  negative: {
    color: "red"
  }
});

export default ListItem;
