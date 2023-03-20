import React, {useEffect, useState, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PixelRatio,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {PortalProvider} from '@gorhom/portal';
import BottomSheet from './bottomsheet';
import SnackBar from 'rn-snackbar-component';
import NetInfo from '@react-native-community/netinfo';
import Search1 from '../../assets/images/search.svg';
import Ine from '../../assets/images/settings.svg';
import Refresh from '../../assets/images/refresh.svg';
import Warning from '../../assets/images/warning1.svg';
import GetCurrentWeather from '../api/Api';
import {useNavigation} from '@react-navigation/native';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../styles/pixel';

import Strom from '../../assets/images/storm.svg';
import Cloudy from '../../assets/images/cloud2.svg';
import Snow from '../image/snow.svg';
import Clear from '../image/day foggy.svg';

var a = [];

var snackvar = [];

var snackcake = true;

const Home = () => {
  const [text, onChangeText] = useState('chennai');
  const [currentTemperature, setCurrentTemperature] = useState('27');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('19');
  const [day, setDay] = useState('sun');
  const [weather, setWeather] = useState('Clouds');

  const navigation = useNavigation();

  const modalRef = useRef(null);

  const onOpen = () => {
    modalRef.current?.open();
  };

  const onClose = () => {
    modalRef.current?.close();
  };

  var ab = false;

  a[0] = {text};
  module.exports = a;

  NetInfo.fetch().then(state => {
    var snackvare = state.isConnected;
    snackvar = [snackvare];
  });

  if (snackvar[0] === true) {
    ab = false;
  } else {
    ab = true;
  }

  function convertKelvintoC(kelvin) {
    return parseInt(kelvin - 273.15);
  }

  const Icn = () => {
    if (weather === 'Clouds')
      return (
        <View style={styles.cloudt}>
          <Cloudy width="80" height="80" />
        </View>
      );
    else if (weather === 'Rain' && 'Heavy Rain')
      return (
        <View style={styles.raint}>
          <Strom width="80" height="80" />
        </View>
      );
    else if (weather === 'Snow')
      return (
        <View style={styles.snowt}>
          <Snow width="80" height="80" />
        </View>
      );
    else
      return (
        <View style={styles.cleart}>
          <Clear width="80" height="80" />
        </View>
      );
  };

  async function setCurrentWeather() {
    let date = new Date();
    setDate(date.getDate());
    switch (date.getDay()) {
      case 0:
        setDay('Sun');
        break;
      case 1:
        setDay('Mon');
        break;
      case 2:
        setDay('Tue');
        break;
      case 3:
        setDay('Wed');
        break;
      case 4:
        setDay('Thu');
        break;
      case 5:
        setDay('Fri');
        break;
      case 6:
        setDay('Sat');
    }

    const data = await GetCurrentWeather();

    setLocation(data[0]);
    setCurrentTemperature(convertKelvintoC(data[1]));
    setWeather(data[8]);
  }
  useEffect(() => {
    setCurrentWeather();
  }, [currentTemperature]);
  return (
    <View>
      <ImageBackground
        style={styles.bg}
        source={require('../image/Artistic.jpg')}>
        <View style={styles.maincontainer}>
          <View>
            <View style={styles.top}>
              <View flexDirection="row" justifyContent="space-between">
                <View style={styles.con1}>
                  <TextInput
                    style={styles.loctext}
                    onChangeText={onChangeText}
                    value={text}
                    onSubmitEditing={() => setCurrentWeather()}
                  />
                </View>
                <View style={styles.searchcon}>
                  <View style={styles.search}>
                    <TouchableOpacity onPress={() => setCurrentWeather()}>
                      <Search1 width={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Text style={styles.loc}>{location}</Text>
            </View>
          </View>
          <View style={styles.con}>
            <View style={styles.bottom}>
              <View style={styles.botcon}>
                <Text style={styles.day}>{day}</Text>
                <Text style={styles.date}>{date}'</Text>
                <Text style={styles.wea}>{weather}</Text>
                <View flexDirection="row">
                  <Text style={styles.temp}>{currentTemperature}</Text>
                  <Text style={styles.o}> o</Text>
                  <Text style={styles.cel}>c</Text>
                </View>
                <View style={styles.strom}>
                  <Icn />
                </View>
                <TouchableOpacity
                  style={styles.morecon}
                  onPress={() => navigation.navigate('tapMore')}>
                  <Text style={styles.more}>TAP FOR MORE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bar}></View>
              <View flexDirection="row">
                <View style={styles.settingscon}>
                  <View style={styles.settingsico}>
                    <TouchableOpacity onPress={onOpen}>
                      <Ine width="30" height="30" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.refreshcon}>
                  <View style={styles.refreshico}>
                    <TouchableOpacity onPress={() => setCurrentWeather()}>
                      <Refresh width="30" height="30" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <PortalProvider>
            <BottomSheet modalRef={modalRef} onClose={onClose} />
          </PortalProvider>
        </View>
        <SnackBar
          visible={ab}
          native={false}
          message={
            <View style={styles.snackbarcon}>
              <View style={styles.snack1}>
                <Warning style={styles.warnico} width="25" height="25" />
                <Text style={styles.snackbartext3}>Warning!!!</Text>
              </View>
              <View style={styles.bar1}></View>
              <TouchableOpacity activeOpacity={0.5}>
                <Text style={styles.snackbartext2}>
                  No active internet connection
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
      </ImageBackground>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  con: {
    width: width,
    height: heightPixel(470),
    backgroundColor: '#F7F7F7',
    borderTopLeftRadius: 60,
  },
  bg: {
    width: width,
    height: height,
  },
  con1: {
    marginLeft: pixelSizeHorizontal(20),
    width: widthPixel(140),
    height: heightPixel(45),
    backgroundColor: '#AAAAAA',
    borderRadius: 20,
  },
  loctext: {
    marginLeft: pixelSizeHorizontal(10),
    width: widthPixel(120),
    height: heightPixel(55),
    fontSize: fontPixel(23),
    fontFamily: 'Questrial-Regular',
    color: 'white',
  },
  loc: {
    marginTop: pixelSizeVertical(1),
    marginLeft: pixelSizeHorizontal(30),
    fontSize: fontPixel(32),
    fontFamily: 'LEMONMILK-Bold',
    color: 'white',
  },
  searchcon: {
    justifyContent: 'center',
    marginRight: pixelSizeHorizontal(20),
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  botcon: {},
  wea: {
    marginTop: pixelSizeVertical(-50),
    marginLeft: pixelSizeHorizontal(50),
    fontSize: fontPixel(28),
    fontFamily: 'LEMONMILK-Bold',
    color: '#000000',
  },
  morecon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  more: {
    marginTop: pixelSizeVertical(-40),
    marginRight: pixelSizeHorizontal(20),
    fontSize: fontPixel(18),
    alignItems: 'flex-end',
    textAlign: 'right',
    fontFamily: 'LEMONMILK-Regular',
    color: '#11cbf0',
    borderBottomColor: '#11cbf0', // Add this to specify bottom border color
    borderBottomWidth: 2,
  },
  day: {
    marginLeft: pixelSizeHorizontal(352),
    fontSize: fontPixel(18),
    fontFamily: 'LEMONMILK-Bold',
    color: '#000000',
  },
  date: {
    marginLeft: pixelSizeHorizontal(352),
    fontSize: fontPixel(18),
    fontFamily: 'LEMONMILK-Bold',
    color: '#000000',
  },
  temp: {
    marginLeft: pixelSizeHorizontal(119),
    fontSize: fontPixel(160),
    fontFamily: 'Lato-Regular',
    color: '#000000',
  },
  top: {
    marginTop: pixelSizeVertical(75),
  },
  o: {
    marginLeft: pixelSizeHorizontal(-20),
    fontSize: fontPixel(63),//63
    fontFamily: 'Lato-Regular',
    color: '#000000',
    display: 'none',
  },
  cel: {
    marginLeft: pixelSizeHorizontal(-8),
    marginTop: pixelSizeVertical(25),
    fontFamily: 'LEMONMILK-Bold',
    fontSize: fontPixel(35),
    color: '#000000',
  },
  search: {
    marginLeft: pixelSizeHorizontal(15),
    marginTop: pixelSizeVertical(-3),
  },
  bar: {
    marginTop: pixelSizeVertical(25),
    height: heightPixel(2.5),
    backgroundColor: '#AAAAAA',
  },
  homecon: {
    marginLeft: pixelSizeHorizontal(28.93),
    marginTop: pixelSizeVertical(15),
    width: widthPixel(130.8),
    height: heightPixel(45),
    borderWidth: 2,
    borderColor: '#AAAAAA',
    borderRadius: 25,
    opacity: 0, //change this
  },
  settingscon: {
    marginLeft: pixelSizeHorizontal(268.6),
    marginTop: pixelSizeVertical(15),
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#AAAAAA',
    borderRadius: 25,
  },
  refreshcon: {
    marginLeft: pixelSizeHorizontal(12.4),
    marginTop: pixelSizeVertical(15),
    width: 50,
    height: 50,
    backgroundColor: '#11cbf0',
    borderRadius: 25,
  },
  homes: {
    opacity: 0, //change this
    marginLeft: pixelSizeHorizontal(-124),
    marginTop: pixelSizeVertical(30),
  },
  settingsico: {
    marginLeft: pixelSizeHorizontal(10),
    marginTop: pixelSizeVertical(9),
  },
  refreshico: {
    marginLeft: pixelSizeHorizontal(12),
    marginTop: pixelSizeVertical(12),
  },
  hometext: {
    opacity: 0.0, //change this
    marginLeft: pixelSizeHorizontal(4.13),
    marginTop: pixelSizeVertical(30),
    fontSize: fontPixel(15),
  },
  strom: {
    marginLeft: pixelSizeHorizontal(41.3),
    marginTop: pixelSizeVertical(-90),
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: pixelSizeVertical(50),
  },
  cloudt: {
    marginLeft: pixelSizeHorizontal(11),
  },
  snowt: {
    marginLeft: pixelSizeHorizontal(4),
  },
  cleart: {
    marginLeft: pixelSizeHorizontal(10),
  },
  avaimage: {
    width: 47,
    height: 45,
    borderRadius: 75,
  },
  snackbarcon: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#faad14',
  },
  snackbartext: {
    marginLeft: pixelSizeHorizontal(8),
    fontSize: fontPixel(18),
    color: '#fff',
  },
  snackbartext3: {
    fontSize: fontPixel(22),
    color: '#fff',
  },
  snackbartext2: {
    marginLeft: pixelSizeHorizontal(8),
    fontSize: fontPixel(19),
    color: '#fff',
  },
  bar1: {
    marginTop: pixelSizeVertical(2),
    alignSelf: 'center',
    width: '95%',
    height: heightPixel(1),
    backgroundColor: '#fff',
    opacity: 0.5,
  },
  snack1: {
    flexDirection: 'row',
    marginLeft: pixelSizeHorizontal(8),
  },
  warnico: {
    marginTop: pixelSizeVertical(3),
  },
});
export default Home;
