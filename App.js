import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import styles from './styles';


export default function App() {

  const [movie, setMovie] = useState(null);

  const imageUri = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {

    //requisição vai aqui 
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US', { //access the api by the html host
      method: 'POST'
    })
      .then(response => response.json())
      .then((json) => {

        setMovie(json); //build the movie state
      })

  }, [])

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

                    <Text numberOfLines={6} style={styles.overview} >Clique para saber mais</Text>

                    {/* <Text numberOfLines={6} style={styles.overview} >{val.overview}</Text> */}

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

