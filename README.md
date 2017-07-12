# Template: Typescript + Jest + Wallaby + VSCode
Template basic project with the Typescript, Jest framework for unit tests, Wallaby config for visualization of the Jest test results and VSCode settings for the Typescript compilation.

### ⚡ Typescript setup in VSCode
The compiler is already set up to watch for any changes in .vscode/tasks.json  
**Ctrl+Shift+B** will activate the compiler task  
```console
npm start
npm run dev
```
After compilation these commands should work. The latter will start with nodemon.

  
### ⚡ Jest setup
```console
npm install
npm test
```
First command will install jest package, second — will run the tests. But you probably won't need it much with the wallaby.

### ⚡ Wallaby setup with Jest in VSCode
**Ctrl+Shift+=**  
-> Select Configuration File  
-> wallaby.js  
*(once for a new project)*

**Ctrl+Shift+=**  
-> Start  
*(or **Ctrl+Shift+R R**)*  


At the end of the setup you should be looking at something like this:
![Screenshot](https://user-images.githubusercontent.com/5485663/28102005-3b610fa6-6681-11e7-8369-d423081621d4.PNG)
