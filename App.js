/**
 * Created by ggoma on 2016. 11. 27..
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    LogBox
} from 'react-native';
import RootReducer from './redux/reducers'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import Board from './components/board';

LogBox.ignoreAllLogs()

import reducers from './redux/reducers'


export const store = createStore(reducers)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <StatusBar barStyle='default' />
                    <Board />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});