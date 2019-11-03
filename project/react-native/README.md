# Welcome to the Open Church App

## Installation

Make sure you have a current version of [Node.js](https://nodejs.org/en/) installed on your system. We highly recommend [Node Version Manager](https://github.com/creationix/nvm) (nvm) to install Node. Once nvm is installed, you can use the command `nvm install node` to install the latest version of node.

To run the Open Church App project, you'll need the Expo CLI. You can then install the Expo CLI using one of the following commands:

`npm install -g expo-cli` (or `yarn global add expo-cli` if you use [Yarn](https://yarnpkg.com/en/))`

After installing the Expo CLI, you'll need to install the local dependencies for the project using the command. From the top level directory of the project, run either `npm install` or `yarn install`.

## Running

To start your project, simply run: `npm start` or `yarn start`. This will open the Expo devtools in a browser tab. From there you can select to open your project in a device emulator.

**Running Your App in an Emulator**

You can run your app on your mobile device, on the iOS simulator, or an the Android emulator. To run your device in an emulator. Installation instructions for the emulators can be found below:

<u>Mac</u>

[iOS Simulator](https://docs.expo.io/versions/latest/workflow/ios-simulator/)

[Android Studio](https://docs.expo.io/versions/v34.0.0/workflow/android-studio-emulator/)



<u>Windows</u>

[AndroidStudio](https://developer.android.com/studio/install)



**Running Your App on a Device**

To run on your device, download the Expo Mobile Client for [iOS](https://itunes.com/apps/exponent) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent), and scan the QR code, which can be found in the bottom left corner of browser tab where the Expo devtools are running. Alternatively, you can select the option within the Expo devtools to send an email to yourself with a link that will open the project in the Expo Mobile Client.



## Debugging

Many errors that may occur in the process of developing or testing your app will show up as a "Redbox" error on the testing device. A red box will be show on the device with the error message and stack trace for the error. The Expo documentation has [more information about Redbox errors](https://docs.expo.io/versions/v34.0.0/workflow/debugging/#redbox-errors-and-the-stack-trace).

Compilation errors and errors occurring when the expo process tries to execute commands will also show up in the browser tab where the Expo devtools are running. For more robust debugging, you should refer to Expo documentation on [Debugging Javascript](https://docs.expo.io/versions/v34.0.0/workflow/debugging/#debugging-javascript).
