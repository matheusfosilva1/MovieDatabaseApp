import { StyleSheet } from 'react-native';
import React from 'react';

export default StyleSheet.create({

    conteiner: {
      flex: 1,
      backgroundColor: 'white',
    },
  
    HeaderStyle: {
      backgroundColor: 'black',
      height: 100,
      justifyContent: 'center'
    },
  
    HeaderText: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      paddingTop: 15,
      fontWeight: 'bold',
    },
  
    ScrollView: {
  
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingVertical: 10
  
    },
  
    Card: {
  
      flexDirection: 'row',
      backgroundColor: 'black',
      width: '75%',
      padding: 10,
  
    },
  
    CardText: {
  
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 10,
  
    },
  
    Image: {
      width: '100%',
      height: 200,
    },
  
    overview: {
      textAlign: 'center',
      fontSize: 12,
      color: 'white'
    }
  
  
  
  });