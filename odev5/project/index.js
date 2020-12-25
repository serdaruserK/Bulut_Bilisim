/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import '@app/init';
import Home from '@components/Home';

AppRegistry.registerComponent(appName, () => Home);