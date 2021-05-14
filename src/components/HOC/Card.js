import { Body, Card, CardItem, Content } from "native-base";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Text } from "../Fields";

const { width, height } = Dimensions.get("window");

export default CustomCard = ({
    children,
    style
}) => {
    // console.log(children, "childd...")
    return (
        <Card style={[{ ...styles.card }, style]} bordered={true}	>
            <View style={{ }}>
                {children}
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        alignSelf: "center",
        // backgroundColor: "black",
        width: width - 40,
        borderRadius: 20,
        padding: 15
    }
})