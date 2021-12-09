const aes = require('aes-js');

const secret = '12345123451234512345123451234512';
const key = aes.utils.utf8.toBytes(secret);

module.exports = (sequelize, DataTypes) => {
    const Encript = sequelize.define("Encript", {
        raw_name: DataTypes.VIRTUAL,
        encripted_name: DataTypes.STRING
    }, {
        hooks: {
            beforeSave: encript => {
                const bytesInfo = aes.utils.utf8.toBytes(encript.raw_name);
                const aesCTR = new aes.ModeOfOperation.ctr(key);
                const encryptedBytes = aesCTR.encrypt(bytesInfo);
                encript.encripted_name = aes.utils.hex.fromBytes(encryptedBytes);
            }
        }
    });

    Encript.prototype.decrypt = function (encripted_name) {
        const encryptedBytes = aes.utils.hex.toBytes(encripted_name);
        const aesCTR = new aes.ModeOfOperation.ctr(key);
        const decryptedBytes = aesCTR.decrypt(encryptedBytes);
        const raw_name = aes.utils.utf8.fromBytes(decryptedBytes);
        return raw_name;
    }

    return Encript;
}