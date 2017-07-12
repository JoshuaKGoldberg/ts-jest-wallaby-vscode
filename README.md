# ts-jest-wallaby-vscode
Template project with: Typescript, Jest unit tests, Wallaby config and VSCode settings.

### Typescript setup in VSCode
The compiler is already set up to watch for any changes in .vscode/tasks.json  
**Ctrl+Shift+B** will activate the compiler task  
```console
npm start
npm run dev
```
After compilation these commands should work. The latter will start with nodemon.

### Jest setup in VSCode
```console
npm install
npm test
```
First command will install jest package, second -- will run the tests. But you probably won't need it much with the wallaby.

### Wallaby setup with Jest in VSCode
**Ctrl+Shift+=**  
-> Select Configuration File  
-> wallaby.js  
*(once for a new project)*

**Ctrl+Shift+=**  
-> Start  
*(or **Ctrl+Shift+R R**)*
