import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function LineGraph({ data }) {
  const [graphData, setGraphData] = useState();

  useEffect(() => {
    const getGraphData = async () => {
      const keys = await Object.values(data?.cases);
      setGraphData(keys);
    };
    getGraphData();
  }, []);

  return (
    <View style={styles.graphContainer}>
      <Text>Global daily cases - Last 120 days </Text>
      <LineChart
        data={{
          labels: ["4", "3", "2", "1"],
          datasets: [
            {
              data: graphData ? graphData : [1, 2],
            },
          ],
        }}
        width={Dimensions.get("window").width - 10} // from react-native
        height={220}
        yAxisSuffix="k"
        yAxisInterval={10} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "1",
            strokeWidth: "5",
            stroke: "grey",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    padding: 10,
    marginVertical: 20,
  },
});
