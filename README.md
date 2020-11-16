# Electron NVC template

A simple, native-looking template for building your Electron apps, based on the view controller design pattern (hence, 'NVC' = 'native view controller').

## Installation

First, install [Node.js](https://nodejs.org/). Then, open your terminal in the project folder and write the following to install Electron:
```bash
npm i
```
After installing Electron, you should edit package.json, inserting your name in the quotation marks next to "author". Do the same for "name", "description" and "license", if you wish.


## How the template is structured

* All your images, sounds, icons etc. go into the '**assets**' folder, in the main directory. 
* Inside the '**src**' directory, '**view**' is where you keep your HTML and CSS. '**controller**' is where the Javascript files linked to the HTML go.
* '**src/main.js**' is the entry point of your app. Here, you can use Electron to create windows, menus etc.
* The file '**src/view/css/styles.css**' is a CSS stylesheet that applies to all your HTML pages. 
