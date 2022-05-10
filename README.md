# 📁 Sample file support

Simple sample file support module for [Collboard.com](https://collboard.com/) created via [@collboard/modules-sdk](https://www.npmjs.com/package/@collboard/modules-sdk).

This module just ads support for txt files to showcase how to add file supports.

## How to create your first module from this template

1. **Clone** this repository
2. **Install** NPM dependencies
3. Change `@collboard-templates/sample-file-support` to your module name and scope _(In VSCode, use `Ctrl+Shift+H` to trigger search&replace)_
4. Start developing!

```bash
npm start
```

_Or you can use recommended VSCode extension [Terminals Manager](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-terminals) and trigger scripts by `Ctrl+Alt+T`_

5. _(optional)_ **Install** [recommended VSCode extensions](./.vscode/extensions.json)
6. _(optional)_ Add `collboard-module` and `collboard-file-support` topic tag to your module repository details
7. _(optional)_ Change module README. _Tip: You can keep the badges part of this template README just with 3. changed `@collboard/hello-world-module` + removed `Use this template` badge._

_Note: Look at all of our [templates](https://github.com/topics/collboard-module-template), [file support modules](https://github.com/topics/collboard-file-support) and [miscellaneous Collboard modules on GitHub](https://github.com/topics/collboard-module) to pick best fit for your project._

_Note: You can also [start from scratch](https://github.com/collboard/modules-sdk#how-to-develop-your-first-module) instead of using this template._

## Publishing the module

To compile, pack and send the module to Collboard module store server run:

```bash
colldev publish --token YOUR_TOKEN
```

_Tip: In this template, there is [automated GitHub workflow](./.github/workflows/publish.yml) to publish after a new version automatically._







