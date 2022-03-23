/**
 * @format
 */
import "react-native-gesture-handler";
import { LogBox } from "react-native"


LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs(true)

import { AppRegistry } from 'react-native';
import App from './App';

import { name as appName } from './app.json';
// import { LoginForm as appName1 } from './src/components/LoginForm';

AppRegistry.registerComponent(appName, () => App);
