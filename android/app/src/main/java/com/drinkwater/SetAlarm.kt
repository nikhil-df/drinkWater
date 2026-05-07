package com.drinkwater

import android.widget.Toast
import com.facebook.react.bridge.*

class SetAlarm(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "SetAlarm"
    }

    @ReactMethod
    fun showToast(message: String) {
        Toast.makeText(reactApplicationContext, message, Toast.LENGTH_SHORT).show()
    }

    @ReactMethod
    fun add(a: Int, b: Int, promise: Promise) {
        promise.resolve(a + b)
    }
}