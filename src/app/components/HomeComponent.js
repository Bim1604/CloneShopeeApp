/* eslint-disable prettier/prettier */
import {
  faBitcoin,
  faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCamera,
  faQrcode,
  faSearch,
  faShoppingCart,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../styles/home';

const HomeComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerIconContainer}>
          <View style={styles.headerSearchContainer}>
            <FontAwesomeIcon
              style={styles.headerSearchIcon}
              icon={faSearch}
              size={23}
            />
            <TextInput
              style={styles.headerSearchText}
              placeholder="Mum's Club - Quà 10 triệu"
              placeholderTextColor="#eb755c"
            />
            <FontAwesomeIcon
              style={styles.headerSearchIcon}
              icon={faCamera}
              size={23}
            />
          </View>
          <FontAwesomeIcon
            style={styles.headerShoppingCart}
            icon={faShoppingCart}
            size={26}
          />
          <FontAwesomeIcon
            style={styles.headerShoppingCart}
            icon={faFacebookMessenger}
            size={26}
          />
        </View>
        {/* Display image */}
        <View style={styles.headerWrap}>
          <Swiper showsButtons={false} autoplay>
            <Image
              style={styles.headerImage}
              resizeMode="stretch"
              source={{
                uri: 'https://cf.shopee.vn/file/ada42ddf1c6fdb866f049ddd2c17741f',
              }}
            />
            <Image
              style={styles.headerImage}
              resizeMode="stretch"
              source={{
                uri: 'https://storage.googleapis.com/cdn.nhanh.vn/store1/49060/artCT/69086/khuyen_mai_shopee_8_8_khung_gio_san_sale_1.jpg',
              }}
            />
            <Image
              style={styles.headerImage}
              resizeMode="stretch"
              source={{
                uri: 'https://s3-ap-southeast-1.amazonaws.com/storage.adpia.vn/affiliate_document/multi/shopee-khung-gio-san-sale-day-1111.jpg',
              }}
            />
            <Image
              style={styles.headerImage}
              resizeMode="stretch"
              source={{
                uri: 'https://stc.shopiness.vn/deal/2018/07/23/5/f/a/5/1532319895413_540.png',
              }}
            />
            <Image
              style={styles.headerImage}
              resizeMode="stretch"
              source={{
                uri: 'https://mgg.vn/wp-content/uploads/2020/08/khung-gio-san-sale-shopee-9-9-800x469.jpg',
              }}
            />
            <Image
              style={styles.headerImage}
              resizeMode="stretch"
              source={{
                uri: 'https://cdn.webcool.vn/songdep.com.vn/files/chinguyen/2021/06/06/cach-san-sale-6-6-tren-shopee-chuan-nhat-2-094648.jpg',
              }}
            />
          </Swiper>
        </View>
        <View style={styles.headerTouchableContainer}>
          <TouchableOpacity style={styles.headerQRCodeContainer} onPress={() => {
            navigation.navigate('ScanQRComponent');
          }}>
            <FontAwesomeIcon
              style={styles.headerQRCode}
              icon={faQrcode}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerVoucherContainer}>
            <View style={styles.headerVoucherTitle}>
              <FontAwesomeIcon
                style={styles.headerVoucherIcon}
                icon={faWallet}
                size={23}
              />
              <Text style={styles.headerTouchableText1}>ShopeePay</Text>
            </View>
            <Text style={styles.headerTouchableText2}>
              Voucher giảm 100K - Liên kết Ví ShopeePay ngay
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerCoinContainer}>
            <View style={styles.headerCoin}>
              <View style={styles.headerCoinTitle}>
                <FontAwesomeIcon
                  style={styles.headerCoinIcon}
                  icon={faBitcoin}
                  size={23}
                />
                <Text style={styles.headerTouchableText1}>Shopee Xu</Text>
              </View>
              <Text style={styles.headerTouchableText2}>
                Đăng nhập xem thông tin
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default HomeComponent;
