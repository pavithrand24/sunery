import React from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TextInput
} from 'react-native';
import {Portal} from '@gorhom/portal';
import {Modalize} from 'react-native-modalize';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../styles/pixel';  
import {TouchableOpacity} from 'react-native-gesture-handler';
import Share from 'react-native-share';
import Close from '../../assets/images/close1.svg';

import {useToast} from 'react-native-toast-notifications';

const {height} = Dimensions.get('screen');
const modalHeight = height * 0.42; //0.42

const BottomSheet = ({modalRef}) => {
  const toast = useToast();

  const errorMessage = () => {
    toast.show('On latest version', {
      type: 'success',
      placement: 'bottom',
      duration: 1000,
      offset: 30,
    });
  };

  const notAvailable = () => {
    toast.show('Not available', {
      type: 'danger',
      placement: 'bottom',
      duration: 1000,
      offset: 30,
    });
  };

  const options = {
    title: 'Share via',
    message: 'Sunery-weather App',
    url: 'some share url',
  };

  const sharets = () => {
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  const onClose = () => {
    modalRef.current?.close();
  };

  return (
    <Portal>
      <Modalize ref={modalRef} modalHeight={modalHeight} snapPoint={250}>
        <View>
          <View style={styles.content}>
            <View style={styles.con1}>
              <Image
                style={styles.image}
                source={require('../image/Logo12.png')}
              />
              <Image
                style={styles.image1}
                source={require('../image/pavi234.jpeg')}
              />
            </View>
            <View style={styles.con2}>
              <Text style={styles.text1}>SUNERY</Text>
              <Text style={styles.text}>FREE</Text>
              <Text style={styles.text2}>1.0.1</Text>
              <TouchableOpacity onPress={errorMessage}>
                <Text style={styles.text3}>upgrade</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={notAvailable}>
                <Text style={styles.text3}>rate and review</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={notAvailable}>
                <Text style={styles.text3}>send feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={sharets}>
                <Text style={styles.text3}>share app</Text>
              </TouchableOpacity>
              <Text style={styles.text5}>Developed by</Text>
              <Text style={styles.text6}>Pavithran Devendran</Text>
              <Text style={styles.text4}>Copyrights</Text>
              <Text style={styles.text4}>©2022 FoxBolts</Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <View>
                <Close style={styles.closebut} width="30" height="30" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modalize>
    </Portal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: modalHeight,
    backgroundColor: '#F7F5F2',
    borderRadius: 10,
  },
  con1: {
    marginTop: pixelSizeVertical(30),
    marginLeft: pixelSizeHorizontal(20),
    width: widthPixel(70),
    height: heightPixel(300),
  },
  image: {
    width: widthPixel(130),
    height: heightPixel(150),
    borderRadius: 13,
  },
  image1: {
    marginTop: pixelSizeVertical(20),
    width: widthPixel(130),
    height: heightPixel(180),
    borderRadius: 13,
  },
  closebut: {
    marginTop: pixelSizeVertical(10),
    marginRight: pixelSizeHorizontal(10),
  },
  closebuttext: {
    color: '#fff',
    alignSelf: 'center',
    marginTop: pixelSizeVertical(-6),
    fontSize: fontPixel(35),
  },
  text: {
    color: '#000000',
    fontSize: fontPixel(20),
    fontFamily: 'Questrial-Regular',
  },
  text2: {
    color: '#000000',
    fontSize: fontPixel(20),
    fontFamily: 'Questrial-Regular',
  },
  text3: {
    color: '#1EAE98',
    fontSize: fontPixel(20),
    fontFamily: 'Questrial-Regular',
  },
  text4: {
    color: '#000000',
    fontSize: fontPixel(12),
    fontFamily: 'Questrial-Regular',
  },
  text5: {
    marginTop: pixelSizeVertical(35),
    color: '#000000',
    fontSize: fontPixel(21),
    fontFamily: 'Questrial-Regular',
  },
  text6: {
    color: '#000000',
    fontSize: fontPixel(17),
    fontFamily: 'Questrial-Regular',
  },
  text1: {
    color: '#000000',
    fontSize: fontPixel(28),
    fontFamily: 'DMSans-Regular',
  },
  con2: {
    marginTop: pixelSizeVertical(30),
    marginLeft: pixelSizeHorizontal(40),
  },
  testtext: {
    color: '#000000',
    fontSize: fontPixel(30),
  },
  loctext: {
    marginLeft: pixelSizeHorizontal(10),
    width: widthPixel(120),
    height: heightPixel(55),
    fontSize: fontPixel(23),
    fontFamily: 'Questrial-Regular',
    backgroundColor: '#1EAE98',
  },
});
