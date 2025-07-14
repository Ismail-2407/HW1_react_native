import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}
function SearchBar({ value, onChangeText, placeholder }: SearchBarProps) {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
      />
    </View>
  );
}

interface ListItemProps {
  text: string;
}
function ListItem({ text }: ListItemProps) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{text}</Text>
    </View>
  );
}

function StarRating() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 8,
      }}
    >
      {[...Array(5)].map((_, i) => (
        <Text
          key={i}
          style={{ color: "#FFA500", fontSize: 28, marginHorizontal: 2 }}
        >
          ★
        </Text>
      ))}
    </View>
  );
}

function RatingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4CB174" }}>
      <View style={styles.ratingHeaderRow}>
        <Text style={styles.ratingHeaderTitle}>Rating</Text>
      </View>
      <View style={styles.ratingCardWrapper}>
        <View style={styles.ratingCard}>
          <StarRating />
          <Text style={styles.ratingTitle}>Rate our app</Text>
          <Text style={styles.ratingText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa
            sint doloremque hic blanditiis reiciendis nam consequuntur tempora
            quaerat error?
          </Text>
          <TouchableOpacity style={styles.ratingButton}>
            <Text style={styles.ratingButtonText}>I love it!</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.ratingLink}>
              Don't like the app? Let us know.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function ContentScreen() {
  const [search, setSearch] = useState("");
  const data = Array(8).fill("Search result");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.headerRow}>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Content</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Filter</Text>
        </TouchableOpacity>
      </View>
      <SearchBar value={search} onChangeText={setSearch} placeholder="Search" />
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem text={item} />}
        keyExtractor={(_, i) => i.toString()}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      {tab === 0 ? <ContentScreen /> : <RatingScreen />}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => setTab(0)}>
          {tab === 0 ? (
            <View style={styles.tabDotActive} />
          ) : (
            <View style={styles.tabDot} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab(1)}>
          {tab === 1 ? (
            <View style={styles.tabDotActive} />
          ) : (
            <View style={styles.tabDot} />
          )}
        </TouchableOpacity>
        <View style={styles.tabDot} />
        <View style={styles.tabDot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  headerBtn: {
    color: "#4CB174",
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  searchBarContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  searchInput: {
    fontSize: 16,
    color: "#222",
    paddingVertical: 6,
  },
  listItem: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  listItemText: {
    fontSize: 16,
    color: "#222",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 48,
    backgroundColor: "#F5F5F5",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  tabDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 4,
  },
  tabDotActive: {
    width: 32,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#222",
    marginHorizontal: 4,
  },
  ratingHeaderRow: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  ratingHeaderTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingCardWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    width: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  ratingTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
    color: "#222",
  },
  ratingText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 16,
    fontSize: 15,
  },
  ratingButton: {
    backgroundColor: "#4CB174",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 8,
    width: "100%",
    alignItems: "center",
  },
  ratingButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  ratingLink: {
    color: "#4CB174",
    textAlign: "center",
    marginTop: 8,
    fontSize: 15,
    textDecorationLine: "underline",
  },
});
