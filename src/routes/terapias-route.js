
// import express from "express"
// import { TerapiaDTO } from "../interface/terapia";

const express = require('express')
const router = express.Router()
const lista = require('../data/terapias.json')

router.get('/lista', (req, res) => {
    return res.json(lista);
})

router.get('/:terapia', (req, res) => {
    return res.json('TERAPIA');
})

router.get('/lista/:numero-reembolso', (req, res) => {
    return res.json('POR NUMERO');
})

router.post('/terapia', (req, res) => {
    return res.json('NOVO');
})

module.exports = router;