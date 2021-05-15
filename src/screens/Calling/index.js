import React from 'react';
import {
    View, Text,
    TouchableOpacity,
    Image, ImageBackground
} from 'react-native';
import { Body, Container, Header, Icon, Left, Right, Title, Button } from 'native-base';
import styles from './styles';
import { images } from '../../shared'
const hitSlop = { top: 10, left: 10, bottom: 10, right: 10 };

const Calling = () => {
    return (
        <ImageBackground source={images.dark_theme} style={{ width: '100%', height: '100%' }}>

            <View style={styles.mainContiner}>
                <View style={styles.callerComponent}>
                    <View style={styles.imageContainer}>
                        <Image resizeMode='cover' style={styles.callerImage} source={images.default}></Image>
                    </View>
                    <View>
                        <Text style={styles.nameStyle}>Username</Text>
                        <Text style={styles.numStyle}>967664368</Text>
                        <Text style={styles.numStyle}>Calling... (Ashraf)</Text>
                    </View>

                </View>

                <View style={{ width: '100%', }}>
                    <View style={styles.callToolbar}>
                        <TouchableOpacity>
                            <Image style={styles.callActionIcon} resizeMode='contain' source={images.speaker}></Image>
                            <Text style={styles.callActionName}>Speaker</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.callActionIcon} resizeMode='contain' source={images.mute}></Image>
                            <Text style={styles.callActionName}>Mute</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={[styles.callActionIcon, { width: 20 }]} resizeMode='contain' source={images.hold}></Image>
                            <Text style={styles.callActionName}>Hold</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.endContainer}>
                        <Image style={styles.endCall} resizeMode='contain' source={images.end_call}></Image>
                        <Text style={styles.nameStyle} >End</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    )
}

export default Calling;