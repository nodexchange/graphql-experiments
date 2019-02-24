# SpaceX Launch Stats

> React, GraphQL, Apollo app that uses the SpaceX API to display launches

"dependencies": {
    "axios": "^0.18.0",
    "concurrently": "^4.0.1",
    "cors": "^2.8.5",
    "express": "^4.16.4",
    "express-graphql": "^0.7.1",
    "graphql": "^14.0.2"
  },
  "devDependencies": {
    "nodemon": "^1.18.6"
  }
Prefix	Method
imp→	import moduleName from 'module'
imn→	import 'module'
imd→	import { destructuredModule } from 'module'
ime→	import * as alias from 'module'
ima→	import { originalName as aliasName} from 'module'
exp→	export default moduleName
exd→	export { destructuredModule } from 'module'
exa→	export { originalName as aliasName} from 'module'
enf→	export const functionName = (params) => { }
edf→	export default (params) => { }
met→	methodName = (params) => { }
fre→	arrayName.forEach(element => { }
fof→	for(let itemName of objectName { }
fin→	for(let itemName in objectName { }
anfn→	(params) => { }
nfn→	const functionName = (params) => { }
dob→	const {propName} = objectToDescruct
dar→	const [propName] = arrayToDescruct
sti→	setInterval(() => { }, intervalTime
sto→	setTimeout(() => { }, delayTime
prom→	return new Promise((resolve, reject) => { }
cmmb→	comment block
cp→	const { } = this.props
cs→	const { } = this.state
React
Prefix	Method
imr→	import React from 'react'
imrd→	import ReactDOM from 'react-dom'
imrc→	import React, { Component } from 'react'
imrcp→	import React, { Component } from 'react' & import PropTypes from 'prop-types'
imrpc→	import React, { PureComponent } from 'react'
imrpcp→	import React, { PureComponent } from 'react' & import PropTypes from 'prop-types'
imrm→	import React, { memo } from 'react'
imrmp→	import React, { memo } from 'react' & import PropTypes from 'prop-types'
impt→	import PropTypes from 'prop-types'
## Quick Start

```bash
# Install dependencies (server & client)
npm install
cd client && npm install

# Run server & client (:3000 & :5000)
npm run dev

# Server only (:5000)
npm run server

# Client only (:3000)
npm run client

# Build for production (Builds into server ./public)
cd client && npm run build

# Graphiql - http://localhost:5000/graphql
```

## App Info

### Author

Brad Traversy
[Traversy Media](http://www.traversymedia.com)

### Version

1.0.0

### License

This project is licensed under the MIT License
