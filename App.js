import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import { TextInput } from "react-native";
import * as PhoneContacts from "expo-contacts";


const ContactBox = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderColor: "black",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#f2eaa8",
      }}
    >
      <Text style={{ color: "black" }}>{props.contact.firstName}</Text>
      <Text style={{ color: "black" }}>
        {props.contact.phoneNumbers && props.contact.phoneNumbers[0].number}
      </Text>
    </View>
  );
};



const ContactList = (props) => {
  return (
    <View>
      {props.contacts.map((contact) => {
        return (
          <ContactBox contact={contact} />
        );
      })}
    </View>
  );
};

const ContactSearch = (props) => {
  const [search, setSearch] = useState("");
  const searchFilter = (text) => {
    setSearch(text);
    const newData = props.contacts.filter((item) => {
      const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    props.setContacts(newData);
  };
  useEffect(() => {
    if (!search.length) return;
  }, [search]);
  return (
    <TextInput
      onChangeText={(text) => {
        searchFilter(text);
      }}
      value={search}
      style={{
        width: "100%",
        height: 60,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        color: "black",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white', // Set a background color
        marginBottom: 20, // Add some margin if needed
        marginTop: 30,
      }}
      placeholder="Search Contacts"
      placeholderTextColor={"grey"}
    />
  );
};


const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await PhoneContacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await PhoneContacts.getContactsAsync({
          fields: [PhoneContacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          console.log(data[0]);
          setContacts(data);
          setFilteredContacts(data);
        }
      }
    })();
  }, []);

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      <ContactSearch contacts={contacts} setContacts={setFilteredContacts} />
      <ScrollView style={{ width: "100%" }}>
        <ContactList contacts={filteredContacts} />
      </ScrollView>
    </View>
  );
};



export default function App() {
  return (
    
      <Contacts />
  
  );
}


