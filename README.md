This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Zubale React Native test
The following is a coding exercise performed by Alejo Gadpen on Thu 31 Oct (yikes! what a date) from approximately 3pm to 6pm. 

## Visual representation
On android:
![Instagram clone example by Alejo Gadpen](./scrshot.png)


## Structure
The project was a simple one to recreate and it didn't need any input from the user, that's why some concepts as useCallBack and useMemo rendered unuseful to me at the time of writing. 
Most of the code is in App.tsx which has a FlatList that renders the collection as was specified in the call. The renderItem method, utilizes 3 custom components that I created to be as DRY as possible. 
API Call is in api.ts, forgive the mess of specifying the interfaces and types over there but it felt sufficient for this example. 
Tests haven't been added, but I can produce them tomorrow if needed, I skip those for the sake of getting the exercise in a timely manner. 

Well, that's it from my side, looking forward to hear your comments. 



## Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

