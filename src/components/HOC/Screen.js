import React, { useRef } from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
// import { CustomHeader, CalenderStrip, CustomTouchableIcon } from '../../';
import colors from "../../shared/constants/colors";
import CustomHeader from "../Header";
// import { TEXT_CONST, _scaleText } from '../../../shared';
// import Menu from 'react-native-material-menu';

const ScreenHOC = ({
    type = "primary",
    barStyle = 'dark-content',
    bottomSafeArea,
    children,
    containerStyle = {},
    showBellIcon = true,
    headerContainerStyle,
    headerLeft,
    headerRight,
    headerTitle,
    onBackPress,
    safeAreaRequired = true,
    showBackIcon = false,
    showHeader = false,
    statusBarColor = 'white',
    statusBarRequired = true,
    titleStyle,
    showMenuIcon,
    onSelectDate,
    onRightPress,
    changeFilter,
    showFilter,
    rightText,
    backIcon,
    navigation
}) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.light, borderColor: 'red', borderWidth: 0 }}>
            {!!safeAreaRequired && <SafeAreaView style={{ backgroundColor: type == "primary" ? colors.light : colors.primary_7c2529, }} />}
            { <StatusBar backgroundColor={type == "primary" ? colors.light : colors.primary_7c2529} animated barStyle={barStyle} />}

            <CustomHeader
                showBackIcon={showBackIcon}
                title={headerTitle}
                showBellIcon={showBellIcon}
                onBackPress={() => navigation.goBack()} 
                onRightPress={() =>navigation.navigate("Notifications")}/>
            <View style={{
                borderTopWidth: 0.2,
                borderTopColor: colors.gray_9e9e9e
            }} />
            <View style={{ flex: 1, ...containerStyle, borderWidth: 0, padding: 20, paddingTop: 10 }}>
                {children}
            </View>
            {!!bottomSafeArea && <SafeAreaView style={{ backgroundColor: 'white', }} />}
        </View>)
};


export default ScreenHOC;