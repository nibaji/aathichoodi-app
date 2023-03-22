import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {changeAppInfoVisibility} from '../Redux/appInfo';
import AppColor from '../Theme/colors';
import {ScrollView} from 'react-native-gesture-handler';

const AppInfo = () => {
  const dispatch = useDispatch();
  // const showInfo: any = useSelector(
  //   (state: any) => state.appInfoVisibility.showAppInfo
  // );

  const {showAppInfo} = useSelector((state: any) => state.appInfoVisibility);

  //console.log("modal" + showAppInfo);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showAppInfo}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <ScrollView style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>ஆத்திச்சூடி</Text>
          <Image
            source={require('../assets/adaptive-icon.png')}
            style={{
              width: 150,
              height: 150,
            }}
          />
          <Text style={styles.para}>
            The Ātticcūṭi (Tamil: ஆத்திச்சூடி) is a collection of single-line
            quotations written by Avvaiyar and organized in alphabetical order.
            There are 109 of these sacred lines
          </Text>

          {/* Credits */}
          <Text style={styles.creditsTitleText}>Credits</Text>
          <View style={styles.creditSectionView}>
            <Text style={styles.creditsText}>
              Huge Thanks to ArjunKumar, who made this data available in his
              github for easy access.
            </Text>
            <TouchableOpacity
              onPress={async () =>
                await Linking.openURL('https:github.com/tk120404/Aathichudi')
              }>
              <Text style={styles.linkText}>POEMS</Text>
            </TouchableOpacity>
          </View>

          {/* About App */}
          <Text style={styles.creditsTitleText}>App Author</Text>
          <TouchableOpacity
            onPress={async () => await Linking.openURL('https:nibaji.xyz')}>
            <Text style={styles.linkText}>Nidhun Balaji T R (nibaji)</Text>
          </TouchableOpacity>

          <Text style={styles.creditsTitleText}>App Source</Text>
          <TouchableOpacity
            onPress={async () =>
              await Linking.openURL('https:github.com/nibaji/aathichoodi-app')
            }>
            <Text style={styles.linkText}>GIT</Text>
          </TouchableOpacity>

          <TouchableHighlight
            style={styles.okButton}
            onPress={() => {
              dispatch(changeAppInfoVisibility());
            }}>
            <Text style={styles.textStyle}>OKAY</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    left: '5%',
    right: '5%',
    top: '10%',
    bottom: '10%',
  },
  modalView: {
    margin: 24,
    backgroundColor: AppColor.accent,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  okButton: {
    backgroundColor: AppColor.primary,
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  para: {
    color: 'grey',
    paddingBottom: 8,
    marginBottom: 16,
    borderBottomColor: AppColor.primary,
    borderBottomWidth: 0.5,
  },
  creditsTitleText: {
    marginBottom: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  creditsText: {
    textAlign: 'justify',
    fontStyle: 'italic',
    color: 'grey',
  },
  linkText: {
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: AppColor.primary,
    textDecorationLine: 'underline',
    textDecorationColor: AppColor.primary,
  },
  creditRowView: {
    flexDirection: 'row',
  },
  creditSectionView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomColor: AppColor.primary,
    borderBottomWidth: 0.5,
  },
});

export default AppInfo;
