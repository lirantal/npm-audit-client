'use strict'

const axios = require('axios')
const request = require('request')

const url = 'https://registry.npmjs.org/-/npm/v1/security/audits/quick'

const json = {
  "name": "demo-npm",
  "version": "1.0.0",
  // "requires": {
  //   "moment": "^2.10.5",
  //   "minimatch": "^1.0.0"
  // },
  // "dependencies": {
  //   "lru-cache": {
  //     "version": "2.7.3",
  //     "integrity": "sha1-bUUk6LlV+V1PW1iFHOId1y+06VI="
  //   },
  //   "minimatch": {
  //     "version": "1.0.0",
  //     "integrity": "sha1-4N0hILSeG3JM6NcUxSCCKpQ4V20=",
  //     "requires": {
  //       "lru-cache": "2",
  //       "sigmund": "~1.0.0"
  //     }
  //   },
  //   "moment": {
  //     "version": "2.22.1",
  //     "integrity": "sha512-shJkRTSebXvsVqk56I+lkb2latjBs8I+pc2TzWc545y2iFnSjm7Wg0QMh+ZWcdSLQyGEau5jI8ocnmkyTgr9YQ=="
  //   },
  //   "sigmund": {
  //     "version": "1.0.1",
  //     "integrity": "sha1-P\/IfGYytIXX587eBhT\/ZTQ0ZtZA="
  //   }
  // },
  "install": [
    "minimatch@1.0.0"
  ],
  "remove": [
    
  ],
  "metadata": {
    "npm_version": "6.0.1",
    "node_version": "v8.11.2",
    "platform": "win32"
  }
}

// const json = {
//   name: 'threaded-node',
//   version: '1.0.0',
//   dependencies: {},
//   install: ['jquey', 'express@3', 'express@3.21.2' ],
//   // install: ['debug@2.2.0', 'mime@1.3.4'],
//   // requires:
//   //  { 'exceljs': '^1.5.1',
//   //    'express-generator': '^4.16.0',
//   //    'express': '^3.21.2' },
//   remove: [],
//   metadata:
//   { npm_version: '6.2.0',
//     node_version: 'v8.11.3',
//     platform: 'darwin',
//     node_env: undefined }
// }

request(
  {
    url: 'https://registry.npmjs.org/-/npm/v1/security/audits',
    method: 'POST',
    headers: {
      'user-agent': 'npm/6.0.1 node/v8.11.2 win32 x64',
      'npm-in-ci': false,
      'npm-scope': '',
      'npm-session': '4e017f155c654f93'
    },
    // proxy: auth.config.https_proxy,
    // req,
    body: JSON.stringify(json),
    gzip: true,
    strictSSL: true
  },
  function(err, _res, body) {
    if (err) {
      console.error(err)
    }
    console.error(body)
  }
)

// axios.post(url, json).then(_ => {
//   // console.log(_)
//   console.error(_.data)
//   console.error(_.status)
//   console.error(_.headers)
// }).catch(_ => {
//   console.error(_.response.data)
//   console.error(_.response.status)
//   console.error(_.response.headers)
// })
