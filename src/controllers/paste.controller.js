import { PasteService } from '../services/paste.service.js';
import { validatePaste } from '../utils/validation.js';

const pasteService = new PasteService();

export const createPaste = async (req, res, next) => {
  try {
    const { content } = req.body;
    const validContent = validatePaste(content);
    const paste = await pasteService.createPaste(validContent);
    res.status(201).json(paste);
  } catch (error) {
    next(error);
  }
};

export const getPaste = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paste = await pasteService.getPaste(id);
    
    if (!paste) {
      return res.status(404).json({ error: 'Paste not found' });
    }

    res.json(paste);
  } catch (error) {
    next(error);
  }
};

export const getAllPastes = async (req, res, next) => {
  try {
    const pastes = await pasteService.getAllPastes();
    res.json(pastes);
  } catch (error) {
    next(error);
  }
};