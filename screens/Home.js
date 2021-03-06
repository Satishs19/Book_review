import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme, Text } from "galio-framework";

import { Card, Button } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex row>
        <Card 
          item={articles[0]}
          style={{ marginRight: theme.SIZES.BASE }}
        />
        <Card 
          item={articles[1]} 
        />
        </Block>
        <Block flex row>
        <Card
          item={articles[2]}
          style={{ marginRight: theme.SIZES.BASE }}
        />
        <Card 
          item={articles[3]}
        />
        </Block>
        <Block flex row>
        <Card 
          item={articles[4]}
          style={{ marginRight: theme.SIZES.BASE }}
        />
        <Card 
          item={articles[5]}             
        />
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular'

  }
});

export default Home;
