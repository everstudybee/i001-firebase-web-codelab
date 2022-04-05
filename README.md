<div align="center">
    <h1>Firebase web codelab</h1>
    <h3>
        <a href="https://everstudybee.github.io/i001-firebase-web-codelab/">
            Live
        </a>
        <span> | </span>
        <a href="https://github.com/everstudybee/i001-firebase-web-codelab">
            GitHub
        </a>
    </h3>
    <p>In this codelab, you'll learn how to use <b>Firebase</b> to easily create web applications by implementing and deploying a chat client using Firebase products and services.</p>
    <br>
    <h4>Technologies and tools:</h4>
    <p>
        <img src="docs/img/html5.svg" width="40" height="40" alt="html"/>
        <img src="docs/img/css3.svg" width="40" height="40" alt="css"/>
        <img src="docs/img/js.svg" width="40" height="40" alt="javascript"/>
        <img src="docs/img/phpstorm.svg" width="40" height="40" alt="phpstorm"/>
        <img src="docs/img/git.svg" width="40" height="40" alt="git"/>
        <img src="docs/img/github.svg" width="40" height="40" alt="github"/>
        <img src="docs/img/firebase.svg" width="40" height="40" alt="firebase"/>
        <img src="docs/img/md.svg" width="40" height="40" alt="mark down"/>
        <img src="docs/img/node.svg" width="40" height="40" alt="node"/>
        <img src="docs/img/webpack.svg" width="40" height="40" alt="webpack"/>
        <img src="docs/img/eslint.svg" width="40" height="40" alt="eslint"/>
    </p>
    <br>
</div>

## Firebase Codelab: FriendlyChat

This is the source code for the Firebase FriendlyChat codelab. It includes start and end versions of the
code for Web, Cloud Functions, Performance Monitoring. To get started, open the codelab instructions:

- [Firebase Web Codelab](https://codelabs.developers.google.com/codelabs/firebase-web/).
- [Firebase SDK for Cloud Functions Codelab](https://codelabs.developers.google.com/codelabs/firebase-cloud-functions/).
- [Firebase Performance Monitoring for Web Codelab](https://codelabs.developers.google.com/codelabs/firebase-perf-mon-web/).


### How to make contributions?
Please read and follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md)


### License
See [LICENSE](LICENSE)

## Introduction

### Webpack
[Webpack Home page](https://webpack.js.org/) | [Webpack Quick start](https://webpack.js.org/guides/getting-started/) | [Webpack GitHub](https://github.com/webpack/webpack)

A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff. Nearly **22 million** downloads every week. [Webpack openbase](https://openbase.com/js/webpack) | [What famous companies use Webpack](https://stackshare.io/webpack)

### Firebase
[Firebase Home page](https://firebase.google.com/) | [Firebase Quick start](https://firebase.google.com/docs/web/setup#add-sdk-and-initialize) | [Firebase GitHub](https://github.com/firebase/quickstart-js)

Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. Nie potrzeba dodatkowych serwerów baz danych. A great user registration module that works right out of the box. One of the most popular no-SQL databases. Almost 1.5 million downloads every week. [Firebase openbase](https://openbase.com/js/firebase) | [What famous companies use Firebase](https://stackshare.io/firebase)

## Prepare your computer

1. Install [node.js](https://nodejs.org/en/download/).
2. Install [Git](https://git-scm.com/downloads).
3. Install [Visual Studio Code](https://code.visualstudio.com/download).
4. Source code [Firebase web codelab]()

## Create project

1. Don't add logo during OAuth configuration. It will take 4-6 weeks for the project authorization.
2. `npm -g install firebase-tools`
3. `firebase --version`
4. `firebase login` - a browser window will open
5. `firebase use --add` - when prompted, select your Project ID, then give your Firebase project an alias `default`.
6. `npm install`

## Work with project

1. `npm run start` - to start up Webpack.
2. `firebase serve --only hosting` - run the following Firebase CLI command.
