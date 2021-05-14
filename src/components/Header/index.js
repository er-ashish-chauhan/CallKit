/**
 * App Header
 */
 import React from 'react';
 import {
   StyleSheet,
   TouchableOpacity,
   Image,
 } from 'react-native';
 import { Body, Container, Header, Icon, Left, Right, Title, Button } from 'native-base';
 import { colors } from '../../shared';

 const hitSlop = { top: 10, left: 10, bottom: 10, right: 10 };
 const CustomHeader = ({ showBellIcon,
   showBackIcon,
   onBackPress,
   onRightPress,
   navigation, title }) => {
 
 
   return (
     <Header style={styles.header}>
       <Left>
         {showBackIcon && (
           <TouchableOpacity
             hitSlop={hitSlop}
             activeOpacity={.6}
             onPress={onBackPress}>
            <Icon 
            name="arrow-back"
            style={{
                fontSize: 28
            }} />
           </TouchableOpacity>
         )}
       </Left>
       <Body style={{ flex: 3 }}>
         <Title style={styles.pageTitle}>{title}</Title>
       </Body>
       <Right>
       </Right>
     </Header>
   );
 };
 
 
 export default CustomHeader;
 
 const styles = StyleSheet.create({
   header: {
     borderBottomWidth: 0,
     //  borderBottomColor: colors.lightGray,
     backgroundColor: colors.light,
    //  paddingLeft: 20,
    //  paddingRight: 10
   },
   
   pageTitle: {
     marginTop: 0,
     fontSize: 20,
     color: colors.primary,
     // fontFamily: 'PTSans-Bold',
   },
   black_text: {
     color: colors.primary,
     paddingLeft: 12,
   },
   notificationBadge: {
     position: 'absolute',
     top: -5,
     right: 5,
     fontSize: 12,
     fontWeight: '400',
     backgroundColor: colors.secondary,
   },
 });
 