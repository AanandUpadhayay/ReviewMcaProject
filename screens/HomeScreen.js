import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import database from '@react-native-firebase/database';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';

const HomeScreen = ({navigation}) => {
  const theme = useTheme();

  // database()
  // .ref('/users/123')
  // .set({
  //   name: 'Ada Lovelace',
  //   age: 31,
  // })
  // .then(() => console.log('Data set.'));

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          autoplayTimeout	={3.55}
          horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/homeService.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/homeService1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/homeService2.png')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/homeService3.png')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/homeService4.png')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <Text 
          style={{
           
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#333',
            marginTop: 3
          }}>
          Our Services
        </Text>
        <Text 
          style={{
           
            alignSelf: 'center',
            fontSize: 12,
            fontWeight: 'normal',
            marginBottom: 6,
            color: '#333'
          }}>
          Choose From Our Wide Range Of Household Services.
        </Text>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Electrician'})
          }>
          <View style={styles.categoryIcon}>
            <Image source={require('../assets/icon/electrician.png')} 
             style={{width: 120, height: 120}} />

          </View>
          <Text style={styles.categoryBtnTxt}>Electrician</Text>
          <Text style={styles.categoryBtnTxt}>ఎలక్ట్రీషియన్</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Mechanic'})
          }>
          <View style={styles.categoryIcon}>
            <Image source={require('../assets/icon/mechanic.png')} 
             style={{width: 120, height: 120}} />
          </View>
          <Text style={styles.categoryBtnTxt}>Mechanic</Text>
          <Text style={styles.categoryBtnTxt}>యంత్రకారుడు</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.categoryContainer, {marginTop: 40}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() =>navigation.navigate('CardListScreen', {title: 'Carpenter'})
        }>
          <View style={styles.categoryIcon}>
            <Image source={require('../assets/icon/carpenter.png')} 
             style={{width: 120, height: 120}} />
          </View>
          <Text style={styles.categoryBtnTxt}>Carpenter</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Plumber'})
          }>
          <View style={styles.categoryIcon}>
            <Image source={require('../assets/icon/plumber.png')} 
             style={{width: 120, height: 120}} />
          </View>
          <Text style={styles.categoryBtnTxt}>Plumber</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Restaurant'})
          }>
          <View style={styles.categoryIcon}>
            <Image source={require('../assets/icon/maintenance.png')} 
             style={{width: 120, height: 120}} />

          </View>
          <Text style={styles.categoryBtnTxt}>Air Conditioning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Fastfood Center'})
          }>
          <View style={styles.categoryIcon}>
            <Image source={require('../assets/icon/washing-machine.png')} 
             style={{width: 120, height: 120}} />
          </View>
          <Text style={styles.categoryBtnTxt}>Appliances</Text>
        </TouchableOpacity>
      </View>

<View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Restaurant'})
          }>
          <View style={styles.categoryIcon}>
            <Image source={require('../assets/icon/laptop.jpg')} 
             style={{width: 140, height: 150}} />

          </View>
          <Text style={styles.categoryBtnTxt}>Computer & Laptop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Fastfood Center'})
          }>
          <View style={styles.categoryIcon}>
            <Image source={require('../assets/icon/cleaning.png')} 
             style={{width: 120, height: 120}} />
          </View>
          <Text style={styles.categoryBtnTxt}>Cleaning Service</Text>
        </TouchableOpacity>
      </View>



      {/* <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Recently Viewed
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/food-banner2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/food-banner3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/food-banner4.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
      </View> */}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '90%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 175,
    height: 150,
    backgroundColor: '#fdeae7' /* '#FF6347'  #fdeae7 */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D2691E',  // #030303
  },
  cardsWrapper: {
    marginTop: 22,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
