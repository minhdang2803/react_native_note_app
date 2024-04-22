import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const OnboardingScreen = () => {
    return (
    <SafeAreaView style ={styles.onboardingScreenStyle}>
        <View style={styles.onboardingMainViewStyle}>
                <Text
                    style={styles.appBarTextStyle}>NOTELY
                </Text>
                <Image
                    style={styles.imageStyle}
                    source={require("../../assets/images/png/login.png")}
                />
                <Text style={styles.titleTextStyle}>
                    World’s Safest And Largest Digital Notebook
                </Text>
                <Text style={styles.contentTextStyle}>
                    Notely is the world’s safest, largest and intelligent digital notebook. Join over 10M+ users already using Notely.
                </Text>
        </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen

const styles = StyleSheet.create({
    contentTextStyle: {
        marginTop: 12,
        marginHorizontal: 34,
        fontSize:16,
        textAlign: 'center',
        fontFamily: 'Nunito-Bold',
        color: '#595550',
    },
    titleTextStyle: {
        marginHorizontal:35.5,
        paddingTop: 27,
        fontSize: 24,
        fontFamily: "Nunito-Black",
        textAlign: "center",
        color: "#403B36",
    },
    imageStyle: {
        resizeMode: "contain",
        height: 197,
        width: 268,
        marginTop:114,
        
    },
    appBarTextStyle: {
        fontFamily: "TitanOne",
        fontSize: 20,
        color: "#403B36",
    },
    onboardingMainViewStyle: {
        alignItems: "center",
        flexDirection:"column",   
    },
    onboardingScreenStyle: {
        flex: 1,
        backgroundColor: 0xffE5E5E5,
    }
})