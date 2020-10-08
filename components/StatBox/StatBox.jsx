import React from "react";
import { Dimensions, View, Image } from "react-native";
import { Card, Title, Paragraph, Switch } from "react-native-paper";
import formatNumber from "../../utils/formatNumber";
import img from "../../images/active.png";

export default function StatBox({
  cases,
  title,
  backgroundColor,
  height,
  size,
  imgUrl,
  titleColor,
  casesColor,
}) {
  switch (size) {
    case "large":
      size = Dimensions.get("window").width - 20;
      break;
    case "medium":
      size = Dimensions.get("window").width / 2 - 15;
      break;
    case "small":
      size = Dimensions.get("window").width / 3 - 15;
      break;
    default:
      size = Dimensions.get("window").width - 15;
      break;
  }
  return (
    <Card
      style={{
        backgroundColor,
        height,
        maxWidth: size,
        width: "100%",
        padding: 10,
        paddingVertical: 12,
        margin: 5,
        marginVertical: 10,
        elevation: 0,
        justifyContent: "center",
        borderRadius: 15,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Paragraph
        style={{ color: titleColor ? titleColor : "white", fontWeight: "bold" }}
      >
        {title}
      </Paragraph>
      <Title
        style={{
          color: titleColor ? titleColor : "white",
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        {formatNumber(Number(cases))}
      </Title>
      <View
        style={{
          position: "absolute",
          width: 75,
          height: 75,
          backgroundColor: "white",
          right: -18,
          top: -18,
          borderRadius: 100,
          opacity: 0.5,
        }}
      ></View>
      <Image
        style={{
          position: "absolute",
          width: 34,
          height: 34,
          right: 0,
        }}
        source={imgUrl}
      />
    </Card>
  );
}
