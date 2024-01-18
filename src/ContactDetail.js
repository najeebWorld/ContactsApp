import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ContactDetail = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Name: {contact.firstName}</Text>
      <Text>Phone: {contact.phoneNumbers && contact.phoneNumbers[0].number}</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactDetail;
