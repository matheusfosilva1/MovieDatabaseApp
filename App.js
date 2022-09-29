import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Modal, Pressable } from 'react-native';
import Constants from 'expo-constants';


export default function App() {

  const [movie, setMovie] = useState(null);
  const [abas, setAbas] = useState(0);

  let imageUri = 'https://image.tmdb.org/t/p/original/';


  useEffect(() => {

    //requisição vai aqui 
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US', { //access the api by the html host
      method: 'POST'
    })
      .then(response => response.json())
      .then((json) => {

        setMovie(json); //build the movie state
        console.log(json);
      })


  }, [])


  if (movie != null) { //validade state to evite error 
    return (
      <ScrollView>

        <View style={styles.Header}>
          <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', marginTop: Constants.statusBarHeight }}>Movie DataBase</Text>

        </View>

        {
          movie.results.map((val) => { //foreach to request info from API 
            return (

              <View style={styles.Body}>

                <Text style={{ textAlign: 'center', fontSize: 20, width: '100%', paddingBottom: 10 }} >{val.original_title}</Text> 
                <Image style={{ flex: 1, width: '50%', height: '50%', paddingHorizontal: 100, justifyContent: 'center' }} source={{ uri: imageUri + val.backdrop_path }}></Image>
                <Text numberOfLines={5} style={{ textAlign: 'center', paddingTop: 10 }} >{val.overview}</Text>

              </View>

            )
          })
        }

        

      </ScrollView>

    )

  } else { //show screen loading wait data are coming 
    return (
      <View>
        <View style={styles.Header}>
          <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', marginTop: Constants.statusBarHeight }}>Movie DataBase</Text>
        </View>
        <View><Text>Loading...</Text></View>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  Header: {
    backgroundColor: 'black',
    width: '100%',
    height: 100
  },

  Body: {

    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
    height: 300,
    marginVertical: 15,
    marginHorizontal: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25

  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 7
  }

});
