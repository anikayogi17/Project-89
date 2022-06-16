import React from "react";
import { createDrawerNavigator } from "@ract-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import { render } from "react-dom";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ( ) => {
    componentDidMount(){
        let theme;
        firebase
            .database()
            .ref("/users/" + firebase.auth().currentUser.uid)
            .on("value", function(snapshot){
                theme = snapshot.val().current_theme;
            });
        this.setState({ light_theme: theme === "light" ? true : false});
    }

    render(){
        let props = this.props;
        return(
            <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: "#e91e63",
                inacticeTintColor: this.state.light_theme ? "black" : "white",
                itemStyle: {marginVertical: 5}
            }}
            drawerContent={props => <CustomSidebarMenu {...props}/>}
            >
                <Drawer.Screen
                    name="Home"
                    compontent={StackNavigator}
                    options={{unmountOnBlur: true}}
                />
                <Drawer.Screen
                    name="Profile"
                    compontent={Profile}
                    options={{unmountOnBlur: true}}
                />
                <Drawer.Screen
                    name="Logout"
                    compontent={Logout}
                    options={{unmountOnBlur: true}}
                />
            </Drawer.Navigator>

        )
    }


    
};

export default DrawerNavigator;