import pkg from '../package.json';

export const CONSTANTS = {
  LOCAL_AUTH_DATA_KEY: 'local_auth_data_key',
  APPENDABLE_DATA_FILTER_TYPE: {
    WHITE_LIST: 'WHITE_LIST',
    BLACK_LIST: 'BLACK_LIST'
  },
  ENCRYPTION: {
    PLAIN: 'PLAIN',
    SYMMETRIC: 'SYMMETRIC',
    ASYMMETRIC: 'ASYMMETRIC'
  },
  TOTAL_INBOX_SIZE: 100,
  NEW_EMAIL_SIZE: 100,
  HOME_TABS: {
    INBOX: 'INBOX',
    OUTBOX: 'OUTBOX',
    SAVED: 'SAVED'
  },
  MAIL_CONTENT_LIMIT: 150,
  DATE_FORMAT: 'h:MM-mmm dd'
};

export const MESSAGES = {
  INITIALIZE: {
    AUTHORISE_APP: 'Authorising Application',
    CHECK_CONFIGURATION: 'Checking configuration',
    FETCH_CORE_STRUCTURE: 'Fetching Core Structure',
    CREATE_CORE_STRUCTURE: 'Creating Core Structure',
    WRITE_CONFIG_FILE: 'Creating new configuration',
  },
  EMAIL_ALREADY_TAKEN: 'Email already taken. Please try again',
  EMAIL_TOO_LONG: 'EMAIL is too long',
  AUTHORISATION_ERROR: 'Failed to authorise',
  CHECK_CONFIGURATION_ERROR: 'Failed to retrieve configuration'
};

export const AUTH_PAYLOAD = {
  id: pkg.identifier,
  name: pkg.productName,
  vendor: pkg.vendor
};
