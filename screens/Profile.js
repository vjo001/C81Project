import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Profile extends Component {
    redner() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Profile</Text>
            </View>
        )
    }
}