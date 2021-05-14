import React, { useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";
import messaging from '@react-native-firebase/messaging';
import { useDispatch } from "react-redux";


const SplashScreen = (props) => {

    const dispatch = useDispatch();

    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
            const fcmToken = await messaging().getToken();

            console.log(fcmToken, "FCMToken")

            try{
                // await dispatch(store)
            }catch(err){
                console.log(err)
            }
        }
    }

    useEffect(() => {
        requestUserPermission()
    });

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });

        return unsubscribe;
    }, []);

    return (
        <View style={{
            height: Dimensions.get("window").height,
            justifyContent: "center",
            alignItems: "center",
            alignItems: "center"
        }}>
            <Text style={{ fontSize: 28, textAlign: "center", fontWeight: "700" }}>
                Splash Screen
            </Text>

            <Text style={{
                fontSize: 15,
                position: "absolute",
                top: "70%"
            }}>Please wait...</Text>
        </View>
    )
}

export default SplashScreen;