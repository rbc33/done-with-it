# done-with-it

this is the app from react-native course from code with mosh, but in typescript and tailwind with nativewind and updated to 2024
for push notifications to work its needed to add a firebase api key with eas login, eas build:configure and eas credentials that will ask for the google api key:

  https://docs.expo.dev/push-notifications/fcm-credentials/

that will provide proyectId

useNotification hook its commented in app/navigation/AppNavigator.tsx for avoiding error if not credentials are not set, 
Bugsgang methods are also commented, to enable bugsnag uncomment app/utility/logger.ts methods and remove the console.log(error) and the null sentences

   "extra": {
      "eas": {
        "projectId": "projectId
      },
      "bugsnag": {
        "apiKey": "bugsnagApiKey"
      }
    },


in order to make the app run you need to start the backend extracting it and changing in config/development.json "localhost" to your actual local ip, and executing npm i
in the app set the same ip to app/config/settings.ts and then execute npm i and npm start
