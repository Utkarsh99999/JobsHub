import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./welcome.style";
import { SIZES, icons } from "@/constants";
import { useRouter } from "expo-router";

const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Temporary",
  "Internship",
  "Freelance",
  "Remote",
  "Volunteer",
  "Seasonal"
];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Utkarsh</Text>
      <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchQuery}
            placeholder="What is your query ?"
            placeholderTextColor="#888"
            style={styles.searchInput}
            onChangeText={(val) => {setSearchQuery(val)}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          horizontal
          data={jobTypes}
          keyExtractor={(item) => item}
          contentContainerStyle={{columnGap:SIZES.small}}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
              style={styles.tab(activeJobType, item)}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
