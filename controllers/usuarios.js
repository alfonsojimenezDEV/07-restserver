const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = '', apikey, page = 1 } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
    });
};

const usuariosPut = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'put API - controlador',
        id,
    });
};

const usuariosPost = (req = request, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API - controlador',
        nombre,
        edad,
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador',
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
};
