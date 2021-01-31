import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const DEFAULT_PERCENT = '80%';
const DEFAULT_TITLE = "ProgressBar";
const DEFAULT_WIDTH = '100%';
const DEFAULT_PROGRESS_HEIGHT = '40%';
const DEFAULT_HEIGHT = '100%';
const DEFAULT_COLOR = '#12887F';
const DEFAULT_BG_COLOR_IN = '#fff';
const ProgressBar = (props) => {
    return (
        <View style={[styles.mainProgressBar, {
            width: props.width,
            height: props.height,
        }]}>
            <View style={styles.mainProgressBarHeader}>
                <Text style={styles.mainProgressBarHeaderText}>{props.title}</Text>
                <Text style={styles.mainProgressBarHeaderText}>{props.percent}</Text>
            </View>
            <View style={[styles.mainProgressBarBody, {
                width: props.width,
                height: props.progressHeight,
                backgroundColor: props.backgroundColor
            }]}>
                <View style={[styles.mainProgressBarBodyInside, { width: props.percent, backgroundColor: props.color }]} />
            </View>
        </View>
    );
}

ProgressBar.defaultProps = {
    percent: DEFAULT_PERCENT,
    title: DEFAULT_TITLE,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    progressHeight: DEFAULT_PROGRESS_HEIGHT,
    color: DEFAULT_COLOR,
    backgroundColor: DEFAULT_BG_COLOR_IN
}
const styles = StyleSheet.create({
    mainProgressBar: {

        display: 'flex',
        justifyContent: 'center'
    },
    mainProgressBarHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    mainProgressBarHeaderText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    mainProgressBarBody: {
        borderRadius: 10
    },
    mainProgressBarBodyInside: {
        height: '100%',
        borderRadius: 10,
    }
})

export default ProgressBar;