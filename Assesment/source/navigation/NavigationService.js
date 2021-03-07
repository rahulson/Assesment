import React from 'react'
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

function navigate(name, params) {
    navigationRef.current && navigationRef.current.navigate(name, params);
}

function goBack() {
    navigationRef.current && navigationRef.current.goBack()
}

function replace(name, param){
    navigationRef.current && navigationRef.current.replace(name, param);
}

function push(name, param){
    navigationRef.current && navigationRef.current.dispatch(StackActions.push(name, param))
}

function pop() {
    navigationRef.current && navigationRef.current.dispatch(StackActions.pop())
}

function popToTop() {
    navigationRef.current && navigationRef.current.dispatch(StackActions.popToTop())
}

export default {
    navigate,
    replace,
    push,
    pop,
    popToTop,
    goBack
}