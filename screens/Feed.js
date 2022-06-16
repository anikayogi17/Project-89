import React, { Component } from 'react';
import { FlatList, Platform, StatusBar, Text, View } from 'react-native';
import PostCard from "./PostCard.js"

export default class Feed extends Component {
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                        source={require("../assets/logo.png")}
                        style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>  
                    <FlatList
                    keyExtractor={this.keyExtractor}
                    date={posts}
                    renderItem={this.renderItem}
                    />
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgrounColor: "black"
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)

    },
    appTitle: {
        flexc: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
    },
    cardContainer: {
        flex: 0.85
    }
})