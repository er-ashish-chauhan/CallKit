import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FlatList, PermissionsAndroid, Text, TouchableOpacity, View } from "react-native";
import Contacts from 'react-native-contacts';
import Screen from "../../components/HOC/Screen";
import { Endpoint } from 'react-native-sip2';

const endpoint = new Endpoint();

const DashboardScreen = props => {

    //List of available accounts and calls when RN context is started, could not be empty because Background service is working on Android

    const [contacts, setContacts] = useState([]);



    const getContacts = () => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            PermissionsAndroid.PERMISSIONS.CALL_PHONE,
            {
                'title': 'Contacts',
                'message': 'This app would like to view your contacts.',
                'buttonPositive': 'Please accept'
            }
        )
            .then(Contacts.getAll().then(res => {
                // console.log(JSON.stringify(res, null, 2), "ressss")
                setContacts(res);
            }))
            .then(status => {
                console.log(status, "contacts")
            });
    }

    const sipConfigure = async () => {

        var sip_state = await endpoint.start()//

        let { accounts, calls, settings, connectivity } = sip_state;

        console.log("accounts:\n", accounts);
        console.log("calls:\n", calls);
        console.log("settings:\n", settings);
        console.log("connectivity:\n", connectivity);

        // Subscribe to endpoint events
        endpoint.on("registration_changed", (account) => {
            console.log("registration_changed", account);

            let options = {
                headers: {
                    "P-Assserted-Identity": "Header example",
                    "X-UA": "React native"
                }
            }

            let call = endpoint.makeCall(account, "79214334799", options);


        });
        endpoint.on("connectivity_changed", (online) => {
            console.log("connectivity_changed", online);
        });
        endpoint.on("call_received", (call) => {
            console.log("call_received", call);
            this.call = call;
            this.onCallReceived(call)
        });
        endpoint.on("call_changed", (call) => {
            console.log("call_changed", call);
            //this.onCallTerminated(call);
            //Если из SIP пришел сигнал повесить трубку - шлем intent в наш Dialer
        });
        endpoint.on("call_terminated", (call) => {
            console.log("call_terminated", call);
            //this.onCallTerminated(call);
            //Если из SIP пришел сигнал повесить трубку - шлем intent в наш Dialer
        });
        endpoint.on("call_screen_locked", (call) => {
            console.log("call_screen_locked", call);
        });

    }

    useEffect(() => {
        sipConfigure();
        // await getContacts();
        // await initTelephony();
    }, []);


    const createAccount = async () => {
        var configuration = {
            name: "Ashraf",
            username: "Ashraf",
            domain: "pbx.sarhaantech.ca",
            password: "819839a1eb941f7af5d04fddf0d8d748",
            transport: null, // Default TCP
            proxy: "99.79.131.132:5160",
            proxy:null,
            regServer: "pbx.sarhaantech.ca", // Default wildcard
            regTimeout: 4000,// Default 3600/ Default 3600
            // regHeaders: {
            //     "X-Custom-Header": "Value"
            // },
            // regContactParams: ";unique-device-token-id=1002"
        };

        try {
            console.log("endpoint.createAccount");
            let account = await endpoint.createAccount(configuration);
            console.log("account created", account);
        } catch (err) {
            console.log("err");
            console.log(err);
        }

    }

    const makeCall = async () => {
        let account = {"_data": {"domain": "pbx.sarhaantech.ca:5160", "id": 0, "name": "Ashraf", "password": "819839a1eb941f7af5d04fddf0d8d748", "regContactParams": ";unique-device-token-id=1002", "regHeaders": "{X-Custom-Header=Value}", "regOnAdd": true, "regTimeout": "600", "registration": {"active": false, "status": "PJSIP_SC_TRYING", "statusText": "In Progress"}, "uri": "Ashraf <sip:Ashraf@pbx.sarhaantech.ca:5160>", "username": "Ashraf"}, "_registration": {"_active": false, "_reason": undefined, "_status": "PJSIP_SC_TRYING", "_statusText": "In Progress"}};
        let options = {
            headers: {
                "P-Assserted-Identity": "Header example",
                "X-UA": "React native"
            }
        }

        let call = await endpoint.makeCall(account, "917206330362", options);
        call.getId() // Use this id to detect changes and make actions

        endpoint.addListener("call_changed", (newCall) => {
            if (call.getId() === newCall.getId()) {
                // Our call changed, do smth.
            }
        });
        endpoint.addListener("call_terminated", (newCall) => {
            if (call.getId() === newCall.getId()) {
                // Our call terminated
            }
        });
    }

    return (
        <Screen
            headerTitle="Dashboard">
            <View>
                <Text>
                    Dashboard Screen
                </Text>

                <View style={{ margin: 30 }}>
                    <TouchableOpacity
                        onPress={createAccount.bind(this)}
                        style={{
                            backgroundColor: "grey",
                            padding: 10,
                            alignItems: "center",
                            borderRadius: 5
                        }}>
                        <Text>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={makeCall.bind(this)}
                        style={{
                            backgroundColor: "grey",
                            padding: 10,
                            alignItems: "center",
                            borderRadius: 5,
                            marginTop: 20
                        }}>
                        <Text>
                            Make Call
                        </Text>
                    </TouchableOpacity>
                    {/* <FlatList
                        data={contacts}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    style={{
                                        borderWidth: 0.5,
                                        margin: 5,
                                        padding: 5,
                                        borderRadius: 3
                                    }}>
                                    <Text>{item.givenName}</Text>
                                    <Text>{item.phoneNumbers.length > 0 ? item.phoneNumbers[item.phoneNumbers.length - 1].number : ""}</Text>
                                </TouchableOpacity>
                            )

                        }}
                    /> */}
                </View>
            </View>
        </Screen>
    )
}

export default DashboardScreen;