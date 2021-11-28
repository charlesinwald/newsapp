import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  NativeBaseProvider,
  FlatList,
  ScrollView,
  Divider,
  Image,
  Spinner,
} from "native-base";
import { services } from "../API/services";

export default function NewsFeed({ navigation, route }) {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { filter } = route.params;

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <NativeBaseProvider>
      {!isLoading ? (
        <FlatList
          refreshing={isLoading}
          onRefresh={() => {
            fetchNews();
          }}
          data={newsData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.newsContainer}
              key={item.title}
              onPress={() => {
                console.log(item.url);
                navigation.navigate("WebView", { url: item.url });
              }}
            >
              <Image
                width={550}
                height={250}
                resizeMode={"cover"}
                source={{
                  uri: item.urlToImage,
                }}
                alt="Alternate Text"
                onPress={() => {
                  console.log(item.url);
                  navigation.navigate("WebView", { url: item.url });
                }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>
                {moment(item.publishedAt).format("LLL")}
              </Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
              <Divider my={2} bg="#e0e0e0" />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.spinner}>
          <Spinner color="danger.400" />
        </View>
      )}
    </NativeBaseProvider>
  );

  function fetchNews() {
    services(filter)
      .then((data) => {
        setNewsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }
}

const styles = StyleSheet.create({
  newsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "600",
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
});
