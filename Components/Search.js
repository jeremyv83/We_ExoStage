import React from 'react'
import personne from '../Helpers/mock'
import { View, TextInput, Button, StyleSheet, Text, FlatList} from 'react-native'

class Search extends React.Component {
    render() {
        return (    
            <View style={styles.container}>
                <TextInput placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => {}}/>
                <FlatList 
                    data={personne}
                    keyExtractor={(item) => item.id.toString()} 
                    renderItem={({item}) => <Text>Prénom : {item.first_name}</Text>}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
      },
      textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
      }
  });

export default Search
