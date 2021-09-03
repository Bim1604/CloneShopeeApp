/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, Button, Linking, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
// import {UseScanQR, resetScan} from '../Action/useScanQR';
import styles from '../styles/qr';

const barCode = [];
const UseScanQR = () => {
  const OnBarCodeRead = scanResult => {
    if (scanResult.data != null) {
      if (!barCode.includes(scanResult.data)) {
        Linking.canOpenURL(scanResult.data).then(supported => {
          if (supported) {
            Linking.openURL(scanResult.data);
          } else {
            console.log("Can't open the URL: " + scanResult.data);
          }
        });
        console.log(scanResult.type);
        console.log(scanResult.data);
        Alert.alert(scanResult.data);
        barCode.push(scanResult.data);
      }
    }
  };
  return {
    OnBarCodeRead,
  };
};

const resetScan = () => {
  const resetScanQr = () => {
    console.log('Reset clicked');
    console.log(barCode);
    barCode.splice(0, barCode.length);
    console.log(barCode);
  };
  return {
    resetScanQr,
  };
};

const ScanQRComponent = props => {
  const {OnBarCodeRead} = UseScanQR();
  const {resetScanQr} = resetScan();
  return (
    <View style={styles.container}>
      <RNCamera
        captureAudio={false}
        defaultTouchToFocus
        flashMode={RNCamera.Constants.FlashMode.on}
        mirrorImage={false}
        onBarCodeRead={OnBarCodeRead.bind(this)}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
      />
      <View style={[styles.overlay, styles.topOverlay]}>
        <Text style={styles.scanScreenMessage}>Please scan the barcode.</Text>
      </View>
      <View style={[styles.overlay, styles.bottomOverlay]}>
        <Button
          onPress={() => {
            resetScanQr();
          }}
          style={styles.enterBarcodeManualButton}
          title="Reset Scan QR Code"
        />
      </View>
    </View>
  );
};

export default ScanQRComponent;
