import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../styles/pixel';
import Refresh from '../../assets/images/refresh.svg';
import Arrow from '../../assets/images/leftarrow.svg';
import Uv from '../../assets/images/uv.svg';
import Winde from '../../assets/images/wind.svg';
import Precipitation from '../../assets/images/precipitation.svg';
import Humidity from '../../assets/images/humidty.svg';
import Pressure from '../../assets/images/pressure.svg';
import Clouds from '../../assets/images/clouds.svg';
import GetCurrentWeather from '../api/Api';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';

import Strom from '../../assets/images/storm.svg';
import Cloudy from '../../assets/images/cloud2.svg';
import Snow from '../image/snow.svg';
import Clear from '../image/day foggy.svg';

const More = () => {
  const [currentTemperature, setCurrentTemperature] = useState('27');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('19');
  const [day, setDay] = useState('sun');
  const [wind, setWind] = useState('65');
  const [humidity, setHumidity] = useState('80');
  const [visibility, setVisiblity] = useState('21');
  const [pressure, setPressure] = useState('31');
  const [cloud, setCloud] = useState([]);
  const [precipitation, setPrecipitation] = useState('20');
  const [weather, setWeather] = useState('Clouds');

  const navigation = useNavigation();

  const Icn = () => {
    if (weather === 'Clouds')
      return (
        <View style={styles.cloudt}>
          <Cloudy width="80" height="80" />
        </View>
      );
    else if (weather === 'Rain' && 'Heavy Rain')
      return <Strom width="80" height="80" />;
    else if (weather === 'Snow') return <Snow width="80" height="80" />;
    else
      return (
        <View style={styles.cleart}>
          <Clear width="80" height="80" />
        </View>
      );
  };

  function convertKelvintoC(kelvin) {
    return parseInt(kelvin - 273.15);
  }

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
    setVisiblity(convertKelvintoC(data[2]));
    setWind(data[3]);
    setHumidity(data[4]);
    setPressure(data[5]);
    setCloud(data[6]);
    setPrecipitation(data[7]);
    setWeather(data[8]);
  }

  useEffect(() => {
    setCurrentWeather();
  });

  return (
    <View style={styles.titlecon}>
      <View marginTop="10%" flexDirection="row">
        <View style={styles.arrow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow width={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.loca}>{location}</Text>
      </View>
      <View style={styles.refreshcon}>
        <TouchableOpacity style={styles.refreshico}>
          <Refresh />
        </TouchableOpacity>
      </View>
      <View style={styles.maincon}>
        <View style={styles.timecard} flexDirection="row">
          <Text style={styles.time}>TODAY</Text>
          <Text style={styles.up}>Updated Just Now</Text>
        </View>
        <View style={styles.con}>
          <View style={styles.stromcon}>
            <Icn width="80" height="80" />
          </View>
          <View>
            <Text style={styles.wea}>{weather}</Text>
            <View flexDirection="row">
              <Text style={styles.temp}> {currentTemperature}</Text>
              <Text style={styles.o}> °</Text>
              <Text style={styles.cel}>c</Text>
            </View>
          </View>
          <View style={styles.datecon}>
            <Text style={styles.day}>{day}</Text>
            <Text style={styles.date}>{date}'</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View
            flexDirection="row"
            justifyContent="space-around"
            marginTop="7%">
              <TouchableOpacity style={styles.group1}>
              <AnimatedLinearGradient customColors={presetColors.instagram} speed={2500}/>
                <View style={styles.uv}>
                  <Uv width={35} height={35} />
                </View>
                <Text style={styles.nextbut3}>Visibility</Text>
                <View style={styles.Values}>
                  <Text style={styles.ValuesStyle}>{visibility}</Text>
                  <Text style={styles.UnitStyle}> m</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.group1}>
              <AnimatedLinearGradient customColors={presetColors.instagram} speed={2500}/>
                <View>
                  <Winde width={45} height={35} />
                </View>
                <Text style={styles.nextbut3}>Wind force</Text>
                <View style={styles.Values}>
                  <Text style={styles.ValuesStyle}>{wind}</Text>
                  <Text style={styles.UnitStyle}> km/h</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.group1}>
              <AnimatedLinearGradient customColors={presetColors.instagram} speed={2500}/>
                <View>
                  <Precipitation width={40} height={35} />
                </View>
                <Text style={styles.nextbut3}>Precipitation</Text>
                <View style={styles.Values}>
                  <Text style={styles.ValuesStyle}>{precipitation}</Text>
                  <Text style={styles.UnitStyle}> mm</Text>
                </View>
              </TouchableOpacity>
          </View>
          <View
            flexDirection="row"
            justifyContent="space-around"
            marginTop="7%">
                          <TouchableOpacity style={styles.group1}>
              <AnimatedLinearGradient customColors={presetColors.instagram} speed={2500}/>
                <View>
                  <Humidity width={30} height={30} />
                </View>
                <Text style={styles.nextbut3}>Humidity</Text>
                <View style={styles.Values}>
                  <Text style={styles.ValuesStyle}>{humidity}</Text>
                  <Text style={styles.UnitStyle}> %</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.group1}>
              <AnimatedLinearGradient customColors={presetColors.instagram} speed={2500}/>
                <View>
                  <Pressure width={45} height={35} />
                </View>
                <Text style={styles.nextbut3}>Pressure</Text>
                <View style={styles.Values}>
                  <Text style={styles.ValuesStyle}>{pressure}</Text>
                  <Text style={styles.UnitStyle}> mb</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.group1}>
              <AnimatedLinearGradient customColors={presetColors.instagram} speed={2500}/>
                <View>
                  <Clouds width={35} height={35} />
                </View>
                <Text style={styles.nextbut3}>Clouds</Text>
                <View style={styles.Values}>
                  <Text style={styles.ValuesStyle}>{cloud}</Text>
                  <Text style={styles.UnitStyle}> okta</Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titlecon: {
    backgroundColor: '#ebebeb',
  },
  maincon: {
    marginTop: pixelSizeVertical(37),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#ffffff',
  },
  con: {
    flexDirection: 'row',
    marginTop: pixelSizeVertical(46.25),
  },
  stromcon: {
    marginLeft: pixelSizeHorizontal(33),
    marginTop: pixelSizeVertical(0),
  },
  wea: {
    marginLeft: pixelSizeHorizontal(18),
    fontFamily: 'LEMONMILK-Bold',
    color: '#000000',
  },
  day: {
    fontFamily: 'LEMONMILK-Bold',
    color: '#000000',
  },
  date: {
    fontFamily: 'LEMONMILK-Bold',
    color: '#000000',
  },
  temp: {
    marginLeft: pixelSizeHorizontal(5),
    fontFamily: 'Milestone',
    fontSize: fontPixel(65),
    color: '#000000',
  },
  datecon: {
    marginLeft: pixelSizeHorizontal(130),
  },
  o: {
    marginLeft: pixelSizeHorizontal(-11),
    fontFamily: 'Milestone',
    fontSize: fontPixel(71.5),
    color: '#000000',
  },
  cel: {
    marginLeft: pixelSizeHorizontal(-8),
    marginTop: pixelSizeVertical(6),
    fontFamily: 'LEMONMILK-Bold',
    fontSize: fontPixel(19.5),
    color: '#000000',
  },
  group1: {
    height: heightPixel(155),
    width: widthPixel(128),
    backgroundColor: '#2bd6ac',
    borderRadius: 19.5,
    overflow: 'hidden',
  },
  nextbut3: {
    marginTop: pixelSizeVertical(12),
    marginLeft: pixelSizeHorizontal(9),
    fontFamily: 'Inter-Regular',
    fontSize: fontPixel(19),
    fontWeight: '600',
    color: '#FFFFFF',
  },
  searchcon: {
    marginLeft: pixelSizeHorizontal(10),
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  refreshcon: {
    alignSelf: 'flex-end',
    marginTop: pixelSizeVertical(-71),
    marginRight: pixelSizeHorizontal(20),
    width: 45,
    height: 45,
    color: '#11cbf0',
    backgroundColor: '#11cbf0',
    borderRadius: 25,
  },
  search: {
    marginLeft: pixelSizeHorizontal(-10),
    marginTop: pixelSizeVertical(4.6),
  },
  refreshico: {
    marginLeft: pixelSizeHorizontal(12),
    marginTop: pixelSizeVertical(11),
  },
  loca: {
    marginTop: pixelSizeVertical(9),
    marginLeft: pixelSizeHorizontal(17),
    fontSize: fontPixel(19.5),
    fontFamily: 'LEMONMILK-Regular',
    color: '#000000',
  },
  arrow: {
    marginLeft: pixelSizeHorizontal(33),
    marginTop: pixelSizeVertical(-18),
  },
  time: {
    marginLeft: pixelSizeHorizontal(33),
    fontSize: fontPixel(32.5),
    fontFamily: 'LEMONMILK-Bold',
    color: '#000000',
  },
  up: {
    alignSelf: 'flex-end',
    marginTop: pixelSizeVertical(0),
    marginRight: pixelSizeHorizontal(20),
    fontSize: fontPixel(19.5),
    fontFamily: 'Questrial-Regular',
  },
  timecard: {
    justifyContent: 'space-between',
    marginTop: pixelSizeVertical(36),
  },
  card: {
    marginTop: pixelSizeVertical(23),
    backgroundColor: '#ebebeb',
  },
  Values: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: pixelSizeVertical(22),
    marginRight: pixelSizeHorizontal(5),
  },
  ValuesStyle: {
    fontSize: fontPixel(28),
    fontFamily: 'Lato-Regular',
    color: 'black',
  },
  UnitStyle: {
    marginTop: pixelSizeVertical(8),
    fontSize: fontPixel(18),
    fontFamily: 'Lato-Regular',
    color: '#fff',
  },
  cloudt: {
    marginTop: pixelSizeVertical(8),
  },
  cleart: {
    marginTop: pixelSizeVertical(-3),
  },
});
export default More;
