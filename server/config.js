//const env = process.env.NODE_ENV || 'development';

const options = {
    // development: {
        port: 3000,
        vapidKeys: {
            publicKey:"BEg8fDDy7YAz3PQoDCgQ84BAVNZl7AIPFwRCHaTGaOleKWA36WHpOkCiuRtU9tBePLwGIhj13jJEFpQLWIpltD8",
            privateKey:"PYCg903JVxtO_39qopcYLYStRz9rxhH0Junc3rMrW1s",
        }
    // },
    // production: {
    //     port: 5444,
    //     vapidKeys: {
    //         publicKey:"BEg8fDDy7YAz3PQoDCgQ84BAVNZl7AIPFwRCHaTGaOleKWA36WHpOkCiuRtU9tBePLwGIhj13jJEFpQLWIpltD8",
    //         privateKey:"PYCg903JVxtO_39qopcYLYStRz9rxhH0Junc3rMrW1s",
    //     }
    // }
};

module.exports = options;//[env];