const crypto = require('crypto');

function createToken(payload, secret) {
    const header = {
        "algo": 'HS256',
        "type": 'ShashankWebToken(SWT)'
    };
    const head = crypto.createHmac('sha256', 'shasha12').update(JSON.stringify(header)).digest('base64url');
    // console.log("Header:", head);

    const pay = crypto.createCipheriv('chacha20-poly1305', 'da4ca8f066d109a1f54ffaeba2588407', 'aab5e812beaf').update(JSON.stringify(payload), 'utf-8', 'base64url');
    // console.log("Payload:", pay);

    const signature = crypto.createHmac('sha256', secret || '488b20cab3ce67e20be9e3f73995bfb4').update(`${head}.${pay}`).digest('base64url');
    // console.log("Signature:", signature);

    const token = `${head}.${pay}.${signature}`;
    // console.log("Token:", token);
    return token;
}

function validateToken(token, secret) {
    const [h, p, s] = token.split('.');
    const valid = crypto.createHmac('sha256', secret || '488b20cab3ce67e20be9e3f73995bfb4').update(`${h}.${p}`).digest('base64url');
    // console.log(valid);
    if (valid === s) {
        return true;
    } else {
        return false;
    }
}

function decodeToken(token, secret) {
  
    const [h, p, s] = token.split('.');
    const valid = crypto.createHmac('sha256' , secret || '488b20cab3ce67e20be9e3f73995bfb4').update(`${h}.${p}`).digest('base64url');
    if (valid !== s) {
        return 'Wrong Password';
    }
    const payload = crypto.createDecipheriv('chacha20-poly1305', 'da4ca8f066d109a1f54ffaeba2588407', 'aab5e812beaf').update(p, 'base64url', 'utf-8');
    return JSON.parse(payload);

}

function sign(payload, secret) {
    return crypto.createHmac('sha256', secret || '488b20cab3ce67e20be9e3f73995bfb4').update(payload).digest('base64url');
}

module.exports = {
    createToken,
    validateToken,
    decodeToken,
    sign
};