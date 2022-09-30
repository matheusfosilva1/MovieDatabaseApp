import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';


export default function App() {

  const [movie, setMovie] = useState(null);

  const imageUri = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {

    //requisição vai aqui 
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1', { //access the api by the html host
      method: 'POST'
    })
      .then(response => response.json())
      .then((json) => {

        setMovie(json); //build the movie state
        console.log(json);
      })

  }, [])

  {/*

  
  const [modalVisible, setModalVisible] = useState(false);

  const MostrarDetalhes = (val) => {

    console.log(val);


    return (

      <Modal
        animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          

        <ScrollView contentContainerStyle={styles.ScrollView} >

          <View style={styles.modalView} >

            <Text style={styles.CardText}>{val.original_title}</Text>

            <Image style={styles.Image} source={{ uri: imageUri + val.backdrop_path }} />

            <TouchableOpacity style={styles.CardButton} onPress={() => setModalVisible(!modalVisible)} >
              <Text style={styles.CardButtonText}>Voltar </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>

     

      </Modal>

    )

  }
 */}

  if (movie != null) {

    return (

      <View style={styles.conteiner} >

        <StatusBar style='light' />

        <View style={styles.HeaderStyle} ><Text style={styles.HeaderText}  > The Movie's </Text></View>

        <ScrollView contentContainerStyle={styles.ScrollView} >


          {
            movie.results.map((val) => {
              return (

                  <Card style={styles.Card} >

                    <Text style={styles.CardText}>{val.original_title}</Text>

                    <Image style={styles.Image} source={{ uri: imageUri + val.backdrop_path }} />

                    <Text numberOfLines={6} style={styles.overview} >{val.overview}</Text>

                  </Card>

                

              )
            }

            )
          }

        </ScrollView>

      </View >

    )

  } else {

    return (

      <View style={styles.conteiner} >
        <View style={styles.HeaderStyle} ><Text style={styles.HeaderText}  > The Movie's </Text></View>
        <View><Text >Loading...</Text></View>
      </View>

    )

  }

}

const styles = StyleSheet.create({

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
