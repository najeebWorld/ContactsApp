import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ContactDetail = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.contactInfo}>
        Name: {contact.firstName}{'\n'}
        Phone: {contact.phoneNumbers && contact.phoneNumbers[0].number}{'\n'}
       {/* id : {contact.id && contact.id}{'\n'} */}
        contactType :{contact.contactType && contact.contactType }{'\n'}
        
      </Text>

      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,

  },
  contactInfo: {
    textAlign: 'center',
    marginBottom: 5,
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: '#f2eaa8', 

    
  },
  goBackButton: {
    backgroundColor: '#f2eaa8', 
    padding: 10,
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,

  },
  goBackText: {
    color: 'black',
  },
});

export default ContactDetail;
