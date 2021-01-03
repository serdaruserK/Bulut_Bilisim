import React from 'react';
import {View,Text, ScrollView,TouchableOpacity} from 'react-native';

export default class Restorant extends React.Component{
  constructor(props){
    super(props)
    this.state={
      restorantlar:null,
      resyorumlar:[]
    }
  }
  componentDidMount(){
    fetch('https://developers.zomato.com/api/v2.1/search?category=6',{
      method:'GET',
      headers:{
        'user-key':'6282d37fc2b0c97ff15d118d446ccf8d'
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(res=>{
      this.setState({restorantlar:res.restaurants});
    })
    .catch(e=>{
      console.warn('error: ', e);
    });
  }
  secildi(id){
    var str = 'https://developers.zomato.com/api/v2.1/reviews?res_id='+id;
    fetch(str,{
      method:'GET',
      headers:{
        'user-key':'6282d37fc2b0c97ff15d118d446ccf8d'
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(res=>{
      this.setState({resyorumlar:res.user_reviews});
    })
    .catch(e=>{
      console.warn('error: ', e);
    });
  }
  render(){
    if (!this.state.restorantlar){
      return (<View><Text>Lütfen bekleyin...</Text></View>);
    }
    return(
      <View>
        <ScrollView style={{backgroundColor:'yellow'}}>
        {
          this.state.restorantlar.map(v=>{
            return(<TouchableOpacity onPress={()=>this.secildi(v.restaurant.id)}>
              <Text key={v.restaurant.id}>{v.restaurant.name}</Text>
              </TouchableOpacity>)
          })
        }
        </ScrollView>
        <View>
          <Text>Yorumlar</Text>
          <ScrollView>
            {this.state.resyorumlar.map(v=>{
              return(<Text key={v.review.id}>{v.review.review_text}</Text>)
            })}
          </ScrollView>
        </View>
      </View>
    )
  }
}
