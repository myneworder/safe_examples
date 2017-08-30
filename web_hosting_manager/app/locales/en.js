const en = {
  label: {
    waitingForAuth: {
      title: 'Waiting For Authorisation',
      line1: 'Authorisation request sent.',
      'line2-1': 'Application needs manage access, to',
      'line2-2': 'containers. Approve the request from authenticator to continue.',
      'line3-1': 'The Public ID and Services must be added to the',
      'line3-2': 'container for allowing other applications to collaborate.',
      line4: 'Authorisation information will be stored on local keychain. The local data can be manually cleared from the menu option.',
      'line5-1': 'File',
      'line5-2': 'Clear Access Data'
    },
    initialising: {
      title: 'Initialising Application',
      connecting: 'Connecting to SAFE Network',
      accessContainer: 'Fetching Access Container',
      publicNamesContainer: 'Fetching Public Names Container',
      publicContainers: 'Fetching _public Container',
      preparingApp: 'Preparing Application',
      connectionErrorTitle: 'Failed To Connect',
      authErrorTitle: 'Application Initialisation Failed',
      revoked: 'Application Revoked'
    },
    networkStatus: {
      connecting: 'Connecting',
      disconnected: 'Disconnected',
      connected: 'Connected',
      unknown: 'Unknown'
    },
    createPublicId: 'Create Public ID',
    noPublicIdText: 'No Public ID found. Create one to begin.',
    createService: 'Create Service',
    createNewContainer: 'Create a new public container',
    or: 'Or',
    selectContainer: 'Select a container to be mapped',
    creating: 'Creating',
    create: 'Create',
    manageFiles: 'Manage Files',
    remap: 'Remap',
    delete: 'Delete',
    home: 'Home',
    remapTitle: 'Remap %{service}.%{publicId}',
    ok: 'Ok',
    close: 'Close',
    cancel: 'Cancel',
    selectFile: 'Select File',
    selectDirectory: 'Select Directory',
    uploadDirectory: 'Upload Directory',
    uploadFile: 'Upload File',
    uploadingMessage: 'Uploading files',
    downloadingMessage: 'Downloading',
    loading: 'Loading...',
    empty: 'Empty',
    uploadSomeFiles: 'No files found. Please upload web files'
  },
  messages: {
    emptyServiceName: 'Service name must be filled',
    emptyContainerName: 'Container name must be filled',
    serviceNameInvalid: 'Service name must contain only lowercase alphanumeric characters or - and should contain a min of 3 characters and a max of 62 characters',
    publicNameInvalid: 'Public name must contain only lowercase alphanumeric characters or - and should contain a min of 3 characters and a max of 62 characters',
    serviceNamePlaceholder: 'Enter Service Name',
    containerNamePlaceholder: 'Container Name. Eg, <service-name>-root',
    noContainerPlaceHolder: 'No Public Container Available',
    publicIdPlaceHolder: 'Enter Public ID',
    notImplemented: 'Not implemented',
    cannotBeEmpty: '%{name} can not be empty',
    restrictedFileSize: 'File larger than %{size} Mb can not be uploaded',
    authReqError: 'Failed to send authorisation request',
    authorisationFailed: 'Authorisation failed!',
    fetchingAccessFailed: 'Fetching Access Info Failed: %{error}',
    fetchingPublicContainerFailed: 'Fetching Public Containers Failed: %{error}',
    fetchingContainerFailed: 'Fetching Container Failed: %{error}',
    fetchingPublicNamesFailed: 'Fetching Public Names Failed: %{error}',
    fetchingServicesFailed: 'Fetching Services Failed: %{error}',
    safeNetworkDisconnected: 'Could not connect to SAFE Network',
    downloadCancelled: 'Download cancelled',
    uploadCancelled: 'Upload cancelled',
    accountAlreadyExists: 'Account already exists',
    entryAlreadyExists: 'Entry already exists',
    publicIdAlreadyExists: 'Public ID already exists',
    serviceAlreadyExists: 'Service already exists',
    fileAlreadyExists: 'File already exists',
    insufficientAccBalance: 'Network operation is not possible as there is insufficient account balance',
    keyNotFound: 'Key not found',
    fileNotFound: 'No such file available for this service',
    serviceNotFound: 'No such service available for this public Name',
    tooManyEntries: 'Mutable data has reached its maximum entries',
    noMoreService: 'No more services allowed for current public ID',
    noMoreFiles: 'No more files can be added to current service',
    mdAuthReqTitle: 'Mutable Data Authorisation',
    mdAuthReqDesc: '%{name} cannot be modified and will require you to authorise altering the contents of the container. Send authorisation request now?',
    mdAuthorisedTitle: 'Mutable Data Authorisation',
    mdAuthorisedDesc: '%{name} has been granted permission!'
  }
};

export default en;
