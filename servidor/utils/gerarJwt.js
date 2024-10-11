import jwt from "jsonwebtoken"

function gerarJwt(payload) {
    const tokenjwt = jwt.sign(payload, process.env.SEGREDO_JWT, {
        expiresIn: "1h"
    });

    return tokenjwt
}

export default gerarJwt