/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  // container
  container: {
    flex: 1,
  },
  // header
  headerContainer: {
    flex: 1,
    backgroundColor: '#eb755c',
  },
  headerSearchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 300,
    alignItems: 'center',
    paddingLeft: 10,
  },
  headerSearchIcon: {
    color: 'gray',
  },
  headerSearchText: {
    marginRight: 20,
    fontSize: 18,
    fontWeight: '600',
  },
  headerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  headerShoppingCart: {
    color: '#fff',
  },
  //Header swiper
  headerWrap: {
    marginTop: 15,
    height: 200,
  },
  headerImage: {
    flex: 1,
    borderRadius: 4,
  },
  //Header Container2
  headerTouchableContainer: {
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginLeft: 10,
    width: width - 20,
    height: height - 610,
    borderRadius: 6,
  },
  headerQRCodeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
  headerQRCode: {
    color: '#8d8d8d',
    borderRightColor: '#8d8d8d',
    borderRightWidth: 1,
    paddingRight: 60,
  },
  headerVoucherContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    width: width - 260,
  },
  headerVoucherTitle: {
    flexDirection: 'row',
  },
  headerVoucherIcon: {
    color: '#e69e99',
    marginRight: 5,
  },
  headerTouchableText1: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  headerTouchableText2: {
    color: '#90949c',
    fontSize: 12,
  },
  headerCoinContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  headerCoin: {
    borderLeftColor: '#8d8d8d',
    borderLeftWidth: 1,
    paddingLeft: 10,
  },
  headerCoinTitle: {
    flexDirection: 'row',
  },
  headerCoinIcon: {
    color: '#f6c250',
    marginRight: 5,
  },
});

export default styles;
