const { Encript } = require('../models');

module.exports = {
    async index(req, res) {
        const { id } = req.params;

        const encript = await Encript.findByPk(id);

        if (!encript) {
            return res.status(401).json({ message: "Encript não encontrado" });
        } else {
            const raw_name = await encript.decrypt(encript.encripted_name);

            return res.json({ "id": encript.id, "raw_name": raw_name });
        }
    },

    async store(req, res) {
        const { name } = req.body;

        const raw_name = name;

        if (!raw_name) {
            return res.status(400).json({ code: "E_VALIDATION_FAILURE", message: "O campo \"name\" é obrigatório" });
        } else {
            const encript = await Encript.create({ raw_name });

            return res.json({ "id": encript.id, "encripted_name": encript.encripted_name });
        }
    }
}