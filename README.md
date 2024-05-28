# MassDM
node.js 16.6.0 or more recent is needed.


# Usage:
- Run "Install-Libs.bat" to install the required libraries.
- Put your token, prefix, and message of choice in the "config.json" file.
- Run "Run.bat".
- Send a message in the format of "<prefix>mdm" in the server you'd like to mass dm.
- Sending the command in a direct message will not work.

# Getting your token:

Run this in the developer console on the discord page to obtain your token. (from https://github.com/aiko-chan-ai)

```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    if (!req.c) return;
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```
