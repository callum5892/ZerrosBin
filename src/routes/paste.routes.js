import express from 'express';
import { createPaste, getPaste, getAllPastes } from '../controllers/paste.controller.js';

export const router = express.Router();

router.post('/pastes', createPaste);
router.get('/pastes/:id', getPaste);
router.get('/pastes', getAllPastes);