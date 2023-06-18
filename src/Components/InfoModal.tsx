import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Linking,
  useWindowDimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {changeAppInfoVisibility} from '../Redux/appInfo';
import AppColor from '../Theme/colors';
import {ScrollView} from 'react-native-gesture-handler';

const InfoModal = () => {
  const dispatch = useDispatch();

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const {showAppInfo} = useSelector((state: any) => state.appInfoVisibility);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showAppInfo}
      onRequestClose={() => dispatch(changeAppInfoVisibility())}>
      <View
        style={{
          ...styles.modalView,
          top: windowHeight * 0.1,
          marginBottom: windowHeight * 0.15,
        }}>
        <ScrollView>
          <View style={styles.creditSectionView}>
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
              quotations written by Avvaiyar and organized in alphabetical
              order. There are 109 of these sacred lines
            </Text>
          </View>

          {/* Credits */}
          <View style={styles.creditSectionView}>
            <Text style={styles.creditsTitleText}>Credits</Text>
            <Text style={styles.creditsText}>
              Huge Thanks to ArjunKumar, who made this data available in{' '}
              <Text
                style={styles.linkText}
                onPress={async () =>
                  await Linking.openURL('https:github.com/tk120404/Aathichudi')
                }>
                github
              </Text>{' '}
              for easy access.
            </Text>
          </View>

          {/* About App */}
          <View style={styles.creditSectionView}>
            <Text style={styles.creditsTitleText}>App Author</Text>
            <Pressable
              android_ripple={{radius: 80}}
              onPress={async () => await Linking.openURL('https:nibaji.xyz')}>
              <Text style={styles.linkText}>Nidhun Balaji T R (nibaji)</Text>
            </Pressable>

            <Text style={styles.creditsTitleText}>App Source</Text>
            <Pressable
              android_ripple={{radius: 16}}
              onPress={async () =>
                await Linking.openURL('https:github.com/nibaji/aathichoodi-app')
              }>
              <Text style={styles.linkText}>GIT</Text>
            </Pressable>
          </View>

          <View style={[styles.creditSectionView, styles.privacySectionView]}>
            <Pressable
              android_ripple={{radius: 56}}
              onPress={async () =>
                await Linking.openURL(
                  'https:raw.githubusercontent.com/nibaji/aathichoodi-app/main/privacy-policy.txt',
                )
              }>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Pressable>
            <Text style={[styles.creditsText, {textAlign: 'center'}]}>
              v1.8.0
            </Text>
          </View>

          <Pressable
            android_ripple={{radius: windowWidth}}
            style={styles.okButton}
            onPress={() => dispatch(changeAppInfoVisibility())}>
            <Text style={styles.textStyle}>OKAY</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 24,
    backgroundColor: AppColor.accent,
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
    margin: 8,
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
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
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomColor: AppColor.primary,
    borderBottomWidth: 0.5,
  },
  privacySectionView: {
    borderBottomWidth: 0,
    marginBottom: 0,
  },
});

export default InfoModal;
