<p align="center">
    <a href="https://expo.io/@nathanabela/donewithit">
        <img src="app/app/assets/logo.png" width="100" alt="Done With It Logo"/>
    </a>
    <h1 align="center"> Done With It </h1>
</p>

<p align="center">
    An application for selling stuff you do not need anymore.
</p>

<p align="center">
    <a href="https://github.com/nathan-abela/Done-With-It/commits/master">
        <img src="https://img.shields.io/github/last-commit/nathan-abela/Done-With-It" alt="Last Commit Shield Badge"/>
    </a>
    <a href="https://github.com/nathan-abela/Done-With-It/archive/master.zip">
        <img src="https://img.shields.io/github/repo-size/nathan-abela/Done-With-It" alt="Repository Size Shield Badge"/>
    </a>
    <a href="https://www.npmjs.com/package/npm">
        <img src="https://img.shields.io/npm/v/npm" alt="NPM Shield Badge"/>
    </a>
    <a href="https://github.com/nathan-abela/Done-With-It/stargazers">
        <img src="https://img.shields.io/github/stars/nathan-abela/Done-With-It?style=social" alt="Done With It Stars" >
    </a>
</p>

<p align="center">
    This repository consists of a <strong>React Native Marketplace Application</strong> built with <strong>Expo CLI</strong>.
</p>

<p align="center">
    Done With It offers free user to user classifieds listings. <strong>Buy</strong> and <strong>Sell</strong>!
</p>

## Running the Application

### View the application

Scan [QR Code](https://expo.io/@nathanabela/donewithit) via the [Expo mobile app](https://play.google.com/store/apps/details?id=host.exp.exponent), or by using [Appetize Emulator](https://expo.io/appetize-simulator?url=https://expo.io/@nathanabela/donewithit) (`Scroll down` &#8594; `Open project using Expo`).

### App Showcase

<p align="center">
    <img src="https://user-images.githubusercontent.com/50643013/86519436-07b6f480-be3b-11ea-9be2-19e5010dd1c8.jpg" width="1280" alt="Done With It Screens Mockup"/>
</p>

### Running the application on your machine

To run the application on your machine, follow the steps below:

### Setting up the Backend Server

  1. Download/ Clone the repository on your machine.
  2. Open the `backend` folder via VS Code.
  3. Open the `development.json` file (`config` &#8594; `development.json`) and change the asterisks in `assetsBaseUrl` to your machine IPv4 Address.
  4. Open the terminal at the root of the `backend` folder (<kbd>Ctrl</kbd> + <kbd>'</kbd>) and run `npm install` to install the project dependencies.
  5. Still in the terminal, run the command `node index.js` to start the backend server.
  6. The backend server is live and ready to be accessed - To confirm that it is live, access `http://localhost:9000/api/listings`.

### Setting up the Application

  1. Download/ Clone the repository on your machine.
  2. Open the `app` folder via VS Code.
  3. Open the `settings.js` file (`app` &#8594; `config` &#8594; `settings.js`) and change the asterisks in `apiUrl` to your machine IPv4 Address.
  4. Make sure you have Expo CLI installed globally - if not, install it via `npm install -g expo-cli`.
  5. Open the terminal at the root of the `app` folder (<kbd>Ctrl</kbd> + <kbd>'</kbd>) and run `npm install` to install the project dependencies.
  6. Still in the terminal, run the command `expo start` to start the app (make sure an AVD is running).
  7. The application should open automatically on the AVD.

## Application features

* `10 Screens` - Welcome, Register, Login, Account, Upload, View Image, Messages, Listings, Listing Edit, and Listing Details Screens.

* `Animation` - Using Lottie (Activity Indicator, done animation and more).

* `Authentication` - User authentication (Register, Login/out).

* `Cache Layer` - Caching Images.

* `Custom and Reusable Hooks` - Api, Location, and Notifications.

* `Form Validation` - Using Formik.

* `Gesture Handler` - Swipe to delete, and pull to refresh.

* `Navigation` - Using React Navigation and Stack Navigator.

* `Push Notifications` - When messages are received.

* `Reusable Components` - Button, Icon, Forms, Screen, Text, Text Input and more.

* `Splash Screen` - Logo Screen Design while the app is launching.

<p align="center">
    <a href="https://expo.io/@nathanabela/donewithit">
        <img src="app/app/assets/logo.png" width="50" alt="Done With It Logo"/>
    </a>
</p>
