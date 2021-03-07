package com.assesment;

import android.os.Build;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.util.HashMap;
import java.util.Map;

public class RNDeviceType extends ReactContextBaseJavaModule {
    private static Boolean isEmulator = Build.FINGERPRINT.startsWith("generic")
            || Build.FINGERPRINT.startsWith("unknown")
            || Build.MODEL.contains("google_sdk")
            || Build.MODEL.contains("Emulator")
            || Build.MODEL.contains("Android SDK built for x86")
            || Build.MANUFACTURER.contains("Genymotion")
            || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
            || "google_sdk".equals(Build.PRODUCT);

    public RNDeviceType(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    public static Boolean emulatorCheck() {
        return isEmulator;
    }

    @Override
    public String getName() {
        return "RNDeviceType";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("isEmulator", emulatorCheck());
        return constants;
    }
}
