# ShashankWebToken (SWT) Library

This library provides simple functions to create, validate, and decode tokens similar to JWT (JSON Web Token). The tokens are signed using the HMAC-SHA256 algorithm, with payload encryption using the `chacha20-poly1305` cipher.

## Features

- **Create Token**: Generates a token based on the payload and a secret.
- **Validate Token**: Validates the token signature.
- **Decode Token**: Decodes the payload from a valid token.
- **Sign**: Creates a HMAC-SHA256 signature for any given payload.

## Installation

Install using npm

```bash
npm i @shashankagarwalme/swt
```

## Usage

- Create Token
```javascript
const swt = require('./swt');
const data = {
    blockNo: 312,
    txn: '0x1234'
};

const token = swt.createToken(data,'1234');
console.log(token);

```

- Decode Token

``` javascript
const swt = require('./swt');

const token = 'JKCBSdW6wu8zF31AB6F_KfY27qvFKmcCqt34_rvANqA.h1BARahn7AHa-4KF0yqQWCjmLZQkFFJlzGnSzLst.3XYQzmk6qXvuUcI3GfKLvOYtm4Hfv8yn9d1DGyg0IDI';

const decodeData = swt.decodeToken(token, '1234');
console.log(decodeData);

```
- Validate Token

``` javascript
const swt = require('./swt');

const token = 'JKCBSdW6wu8zF31AB6F_KfY27qvFKmcCqt34_rvANqA.h1BARahn7AHa-4KF0yqQWCjmLZQkFFJlzGnSzLst.3XYQzmk6qXvuUcI3GfKLvOYtm4Hfv8yn9d1DGyg0IDI';

const validToken = swt.validateToken(token, '1234');
console.log(validToken); //it would result true if secret is right

```
## Author

| Developed by <a href="https://github.com/shashankagarwalgit"> Shashank Agarwal</a>

©2024 Shashank Agarwal

