# Transpiler Babel

> Transpile with Babel using Webpack 5

As a SPA Developer, I want use the latest EcmaScript features, so that I can have a productive coding experience

This code is based off this article [Why you don’t need Babel](https://blog.logrocket.com/why-you-dont-need-babel/)

## Before and After

Before and after for Transpile Babel using Webpack 5

<table>
<tr>
  <th>Before</th>
  <th>After</th>
</tr>
<tr>
  <td>
  
  ![Before](shot-before.png 'Before screenshot')
  
  </td>
  <td>
  
  ![After](shot-after.png 'After screenshot')
  
  </td>
</tr>
</table>

## Development

Run VSCode Live Server on index.html or open in your browser

```bash
# cd [YouCustomDevFolder]
git clone git@github.com:klueless-webpack5-samples/TranspilerBabel.git && cd TranspilerBabel

npm install

# Run the transpiler
npm run transpile
# or
npx babel src --out-dir dist --presets=@babel/env

# Run the code
npm run execute
# or
node dist/test.js

```

## Code Setup

```bash
# Setup Transpilers for EcmaScript support
npm install --save-dev @babel/core @babel/cli @babel/preset-env
# npm install --save @babel/polyfill
```

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Copyright

Copyright (c) David Cruwys. See [MIT License](LICENSE.txt) for further details.
