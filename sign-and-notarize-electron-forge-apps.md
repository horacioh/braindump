# Sign and Notarize apps with Electron forge

- make sure you have the proper certificate to sign your app. In my case was the Developer Id Application Certicifate. export it from your Keychain as a `.p12` file format.
- create an app-specific password for your apple developer account
- get your Team ID from the Apple Developer Portal
- set all the Apple related Secrets into Github actions
    - CERTIFICATE
    - CERTIFICATE_PASSWORD
    - APPLE_ID
    - APPLE_ID_PASSWORD (app-specific password)
    - APPLE_TEAM_ID
- add a step to setup your certificate in the CI machine
- `make` the app (`electron-forge make`)
    - make will try to sign and notarize the app. please make sure you have the proper config in your `forge.config.js` file.
