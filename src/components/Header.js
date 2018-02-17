import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

renderHeader = (bool) => {
    if (bool) {
        return <View> <Icon name = "lock" /> </View>;
    }
}

const Header = ({ onHamPress, headerText, showLogOut }) => {
    const { textStyle, viewStyle, hamburgerStyle } = styles;
    return ( <View style = { viewStyle } >
        <Text style = { textStyle } > { headerText } </Text> { renderHeader(showLogOut) } </View>
    );
}

const styles =StyleSheet.create( {
    textStyle: {
        fontSize: 20,
        fontFamily: 'fifawelcome1.3',
        color: 'red',
        alignSelf: 'center'
    },
    viewStyle: {
        backgroundColor: '#7BE5C1',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 200 },
        shadowOpacity: 0.7,
        elevation: 2,
        position: 'relative',
        flexDirection: 'row'
    },
    hamburgerStyle: {
        flex: 1
    }
});

export { Header };