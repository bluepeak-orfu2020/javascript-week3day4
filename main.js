// const module1 = require('./module1')
import module1, { x } from './module1.js'

// Import with no default import
// import { x } from './module1.js'

// Import with only default import
// import module1 from './module1.js'

console.log('module1 default import', module1);
console.log('module1 x variable export', x);