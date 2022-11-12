import {
  getBuildNumber,
  getVersion,
  getUniqueId,
} from 'react-native-device-info';

export const appConfig = {
  deviceId: getUniqueId(),
  version: `${getVersion()} (${getBuildNumber()})`,
};
