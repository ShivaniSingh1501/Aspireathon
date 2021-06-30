
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Dimensions, PixelRatio, Platform } from 'react-native'

import Logo from './component/assets/logo.png'

let { height, width } = Dimensions.get('window');
console.log(height);
console.log(width);


export default class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        activeIndex:0,
        carouselItems: [
        {
            title:"Optimize",
            text: "Text 1",
        },
        {
            title:"Recycle",
            text: "Text 2",
        },
        {
            title:"Reduce Plastic",
            text: "Text 3",
        },
        {
            title:"Give",
            text: "Text 4",
        },
        {
            title:"E-waste",
            text: "Text 5",
        },
      ]
    }
  }

  _renderItem({item,index}){
      return (
       
        <View style={{
            backgroundColor: "#f28b1d",
            borderRadius: 5,
            height: 250,
            padding: 50,
            marginLeft: 25,
            marginRight: 25, }}>
          <Text style={{fontWeight: 'bold', fontSize: 28,}}>{item.title}</Text>
          <Text style={{fontWeight: 'bold', fontSize: 15,}}>{item.text}</Text>
        </View>

      )
  }

  render() {
      return (

        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
          <Image style={[styles.backgroundImage,
            {
              height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
              width:  PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (40) / 100),
//              backgroundColor:"blue",
              alignSelf:"center"
              }]} source={require('./component/assets/logo.png')} />
          <View style ={{
            marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (1) / 100),
            height:PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (11) / 100),
            width:PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (80) / 100),
            backgroundColor:"#10a092",
            alignSelf: "center",
            alignContent:"center",
            zIndex: 2,
            borderRadius: 20,
            elevation: 5
              }}>
                <Text style={[styles.TextStyle, {
                  alignSelf:"center",
                  marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
                  }]}> Waste Busterszz..</Text>
          </View>

          <View style={[styles.flexRowBetween,{marginLeft:14,marginBottom:12, height:1}]}>
            {/*}  <Text style={{color: 'white',fontSize: 20,fontWeight: 'bold'}}>Games</Text> */}
          </View>

          <View style ={{
            //marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (5) / 100),
            height:PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (15) / 100),
            width:PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (90) / 100),
            backgroundColor:"#10a092",
            alignSelf: "center",
            //alignContent:"center",
            zIndex: 2,
            borderRadius: 20,
            elevation: 5
              }}>
                <Text style={[styles.TextStyle, {
                  alignSelf:"center",
                  marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
                  }]}>Guardians of the Garbage...</Text>
          </View>

           <View style={[styles.flexRowBetween,{marginLeft:14,marginBottom:12, height:1}]}>
            {/*}  <Text style={{color: 'white',fontSize: 20,fontWeight: 'bold'}}>Games</Text> */}
          </View>

          <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
      
              <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={100}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  autoplay={true}
                  loop={true}
                  autoplayInterval={2000}
                  autoplayDelay={500}
                  inactiveSlideScale={10}
                  inactiveSlideOpacity={1}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />      
          </View>

           <View style={[styles.flexRowBetween,{marginLeft:14,marginBottom:12, height:30}]}>
            {/*}  <Text style={{color: 'white',fontSize: 20,fontWeight: 'bold'}}>Games</Text> */}
          </View>

          <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              decelerationRate="fast"
            >
            {     
            this.cards = this.state.carouselItems,
               this.cards.map((card,i) => {
                return (
                  console.log(i),
                    <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('Screen1')}>
                   <Image style={[styles.backgroundImage,
            {
              height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
              width:  PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (40) / 100),
//              backgroundColor:"blue",
              alignSelf:"center"
              }]} source={require('./component/assets/logo.png')} />
              </TouchableOpacity>
                )
              })
            }      
          </ScrollView>

          </ScrollView>
        
      );
  }
}

const styles = StyleSheet.create({
  backgroundStyle:{
    backgroundColor: "#f9f9f9"
    //backgroundColor: "#25c109"
    //backgroundColor: "#68F265"
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  RegistrationSubmitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent:'center',
    backgroundColor: '#0E8EE3',
    borderRadius: 10,
    // marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (14) / 100),
    height:PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
    width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (75) / 100)
},
TextStyle: {
  color: "#000000",
  fontWeight: 'bold',
  fontSize: 28,
  lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (4) / 100),
},
});

