import { Platform, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../shared'
const styles = StyleSheet.create({
    mainContiner: {
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        // backgroundColor: colors.bodyBlack,
    },
    callerComponent: {
        flexDirection: 'row',
        marginTop: '10%'
    },
    imageContainer: {
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: colors.silverGray,
        borderRadius: 60,
        marginHorizontal: 10
    },
    callerImage: {
        width: '100%', height: '100%'
    },
    nameStyle: {
        color: colors.white,
        fontSize: 18,
        paddingBottom: 3
    },
    numStyle: {
        color: colors.gray_ebebeb,
        fontSize: 18,
        paddingBottom: 3
    },
    endContainer: {
        alignItems: 'center',
        backgroundColor: 'red',
        marginHorizontal: 20,
        flexDirection: 'row',
        padding: 7,
        borderRadius: 6,
        justifyContent: 'center', marginVertical: 5
    },
    callToolbar: {
        //  alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        marginHorizontal: 20,
        flexDirection: 'row',
        padding: 7,
        borderRadius: 6,
        justifyContent: 'space-around', marginVertical: 5,
        alignItems: 'center'
    },
    endCall: {
        width: 40,
        marginHorizontal: 5
    },
    callActionIcon: {
        width: 35,
        height: 30
    },
    callActionName: {
        color: colors.gray_ebebeb,
        fontSize: 13,
    }

})

export default styles
