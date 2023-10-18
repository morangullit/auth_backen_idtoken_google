
const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '310030061246-4v93i5s04ak0q4o5ifcpr3gjkbfpvq7r.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token) => {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '310030061246-tpr97q829bpnur497650no9b1c3reuqu.apps.googleusercontent.com',
            ],  
    
        });
        const payload = ticket.getPayload();

        console.log('============= PAYLOAD =================');
        console.log(payload);
        return {
    
            name: payload['name'],
            email: payload['email'],
            picture: payload['picture'],
    
        }
    } catch (error) {
        return null;
    }

    
}

module.exports = {
    validarGoogleIdToken,
}
