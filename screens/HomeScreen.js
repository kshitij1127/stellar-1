import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})