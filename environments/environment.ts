// The file contents for the current environment will overwrite these during
// build. The build system defaults to the dev environment which uses
// `environment.ts`, but if you do `ng build --env=prod` then
// `environment.prod.ts` will be used instead. The list of which env maps to
// which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCng7CmqCNjshIHit4kNAsfcpX3mOR65Sg",
    authDomain: "angularblogapp.firebaseapp.com",
    databaseURL: "https://angularblogapp.firebaseio.com",
    projectId: "angularblogapp",
    storageBucket: "angularblogapp.appspot.com",
    messagingSenderId: "258484885247"
  }
};
