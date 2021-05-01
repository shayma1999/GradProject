import * as React from "react";
//import { HALLS } from "../halls";
import { StyleSheet, View, Image ,ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import { Card, Text} from "react-native-elements";
import axios from 'axios'


export default class RoomSearch extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        search: '',
        rooms: null,
        roomNo: null,
        desc: "",
        floor: "",
        //college: "",
        //campus: "",
      });
    //this.setData = this.setData.bind(this);
    

  }
    
  updateSearch = (search) => {
    this.setState({search});
  };
  setData = (number) => {
 
    //let halls = this.state.rooms;
   let url4 = 'http://' + '192.168.0.115' + ':3000/search/'+number;
    axios.get(url4)
    .then(response => {
      this.setState({ rooms: response.data }) 
        this.setState({rooms : response.data})
       
  })
  
  }
  render() {



    const search = this.state.search;
    const rooms = this.state.rooms;
    return (
      <View style={styles.container}>
        <Searchbar
          placeholder="ابحث"
          onChangeText={this.updateSearch}
          value={search}
          onIconPress={(e)=>this.setData(search)}
          icon={({ size, color }) => (
            <Image
              source={require("../images/scan.png")}
              style={{ width: 40, height: 40, tintColor: "blue" }}
            />
          )}
        />
            <ScrollView style={styles.scrollView}> 
             {this.state.rooms && this.state.rooms.map(rom=>
              <Card title="وصفة الطبيخ">
              <Text style={{ margin: 10 }}> {rom.list_title}</Text>
              <Image source={{uri:rom.list_img}} style = {{height: 200, resizeMode : 'stretch', margin: 5 }} />
              <Text style={{ margin: 10 }}> {rom.list_p}</Text>
              <Text style={{ margin: 10 }}> {rom.list_time}</Text>
              <Text style={{ margin: 10 }}> {rom.list_timeA}</Text>
              <Text style={{ margin: 10 }}> {rom.list_time1}</Text>
              <Text style={{ margin: 10 }}> {rom.list_time1A}</Text>
              <Text style={{ margin: 10 }}> {rom.list_count}</Text>
              <Text style={{ margin: 10 }}> {rom.list_countA}</Text>
              <Text style={{ margin: 10 }}> {rom.list_amount}</Text>
              <Text style={{ margin: 10 }}> {rom.list_name}</Text>
              <Text style={{ margin: 10 }}> {rom.list_Idiv}</Text>
              <Text style={{ margin: 10 }}> {rom.list_way}</Text>
              <Text style={{ margin: 10 }}> {rom.list_name1}</Text>
              <Text style={{ margin: 10 }}> {rom.list_IIdiv}</Text>
              
            </Card>
            ) }
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#f0f8ff",
  },
});

