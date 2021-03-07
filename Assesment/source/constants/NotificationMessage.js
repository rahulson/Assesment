import React from 'react'
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

function showSimpleMessage(type = "default", props = {}) {
    const message = {
        message: "Some message title",
        description: "Lorem ipsum dolar sit amet",
        icon: { icon: "auto", position: "left" },
        duration: 5000,
        type,
        ...props,
    };

    showMessage(message);
}

function messageWithPosition(position = "top", hasDescription = true, extra = {}) {
    let message = {
        message: "Some message title",
        type: "info",
        position,
        duration: 5000,
        ...extra,
    };

    if (hasDescription) {
        message = { ...message, description: "Lorem ipsum dolar sit amet" };
    } else {
        message = { ...message, floating: true };
    }

    showMessage(message);
}

export default {
    showSimpleMessage,
    messageWithPosition
}