import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

export default class LoadingScreen extends Component {
    signInWithGoogleAsync = async () => {
        try{
            const result = await this.signInWithGoogleAsync.loginAsync({
                behaviour: "web"
                androidClientId: 
                iosClientId:

                scopes: ['profile','email']

                
            })
        }
    }

    render(){
        if(!this.state.fontsLoaded){
            return <AppLoading/>;
        } else {
            return(
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Button
                            title="Sign in with Google"
                            onPress={() => this.signInWithGoogleAsync()}></Button>
                    </View>
                 
            )
             }

            return(
                <View style = {styles.container}>
                <SafeAreaView style=(styles.droidSafeArea)/>
                <View style={styles.appTitle}>
                    <Image
                    source={require("../assets/logo.png")}
                    style={styles.appIcon}
                    ></Image>
                <Text style={styles.appTitleText}>{'Story Telling/nApp'}</Text>
                </View>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> this.signInWithGoogleAsync()}>
                        <Image
                        source={require("../assets/google_icon.png")
                        style={styles.googleIcon}
                        ></Image>
                        <Text style={styles.googleText}>Sign in with Google</Text>
                    </TouchableOpacity> 
                   </View>
                   <View style={styles.cloudContainer}>
                       <Image
                       source={require("../assets/cloud.png")}
                       style={styles.cloudImage}
                       ></Image>
                   </View>
                </View>
            );
        
    }

}