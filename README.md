#  Ionic 4 Full App 

### Check the full documentation on https://enappd-apps.gitbook.io/ionic4fullapp/

A generic app for Ionic 4 development.

A variety of layouts, functionalities are available in this app starter.

You need to have Cordova and Ionic 4.x installed on the 
system to run it successfully

## Using this project

You must have cordova installed prior to this.

```
    $ npm install -g cordova
```


```
    $ npm install -g ionic
```

NOTE: This app is built and tested on 4.11.0.


## Installation of this project

* Extract the zip file you received after purchase. The app is best used on Node 10.x+

* Install npm dependecies

```
    $ npm install
```
* Run the app on browser

```
    $ ionic serve
```

* Install Resources

```
    $ ionic cordova resources
```

* Add Platform (whichever required)

```
    $ ionic cordova platform add android
    $ ionic cordova platform add ios
```
in few cases, you might need to install the latest platform
```
    $ ionic cordova platform add android@latest
    $ ionic cordova platform add ios@latest
```

* Install Plugins (whichever required)

```
    $ ionic cordova plugin add YOUR_PLUGIN_NAME
```

* To create a GIT repository, initialize the new git
    ```git init```

* Setup the new git remotes accordingly
    ```git remote add origin <<new remote>>```



* Run app on device

For android

```
    $ ionic cordova prepare android
    $ ionic cordova run android --device
```

* Create signing key for android to release on Google Play

```
    $ keytool -genkey -v -keystore keystore folder address -alias app alias -keyalg RSA -keysize 2048 -validity 10000
```

* Create release build for Android Play Store

```
    $ ionic cordova build android --release
```

* Sign the ‘unsigned’ APK for upload on Play store

```
    $ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore .keystore file full path unsigned apk full path app alias
```


* Zipalign to optimize size for play store upload

```
    $ ./zipalign -v 4 signed apk full path path for final APK
``` 


For iOS

Prepare an iOS project
```
    $ ionic cordova prepare ios
```

Then open the .xcworkspace file in the project in XCode application. 

You will require an Apple developer account to build the app onto a device. 

You can test the app on simulator using XCode. 

Or run the app on simulator using Ionic CLI
```
    $ ionic cordova run ios --target="iPhone-6s"
```

