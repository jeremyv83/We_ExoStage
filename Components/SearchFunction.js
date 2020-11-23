import React, { Component } from 'react'
import { View, Text, FlatList, TextInput, Button, Image } from 'react-native'
import personne from '../Helpers/mock'

class SearchFunction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
    };

    
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  searchItems = text => {
    let newData = personne.filter(item => {
      const itemData = `${item.first_name.toUpperCase()}`;
      const textData = text.toUpperCase();
    if(text.length >0 ){
      return itemData.indexOf(textData) > -1;
    }
    });
    this.setState({
      data: newData,
      value: text,
    });
  };

  renderHeader = () => {
    return (
      <TextInput
        style={{ height: 60, borderColor: '#000', borderWidth: 1 }}
        placeholder="   Rechercher.."
        onChangeText={text => this.searchItems(text)}
        value={this.state.value}
      />
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 50,
          width: '98%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => ( 
            <Text style={{ padding: 10 }}>{item.first_name}
            <Image 
            style={{padding: 15, width:50, height:50}}
            source={{uri: item.photo}}/>
            <Button
            title = "EN SAVOIR PLUS"
            style={{flex : 1, padding: 20, AlignItem: 'flex-end'}}
            onPress={() => alert(`Prénom : ${item.first_name} \n Nom : ${item.last_name} \n Contact : ${item.email}`)}
          />
            </Text>
          )}
          keyExtractor={item => item.first_name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default SearchFunction;