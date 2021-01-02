# easy-http-code

## Sumary
Builded to make easier HTTP codes use.

### Javascript
```javascript
const { HttpStatus, HttpMessage } = require('easy-http-code');
```

### Typescript
```javascript
import { HttpStatus, HttpMessage } from 'easy-http-code';
```

## Example

```javascript
import express from 'express';
import { HttpStatus } from 'easy-http-code';

const server = express();

server.get('/endpointOK', (req, res) => {
    res.send(HttpStatus.OK);
});

server.listen(3333);
```

```javascript
import { HttpMessage } from 'easy-http-code';

console.log(HttpMessage(200));
```
