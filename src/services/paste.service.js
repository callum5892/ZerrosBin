import { nanoid } from 'nanoid';
import { PasteRepository } from '../repositories/paste.repository.js';
import { getCurrentTimestamp } from '../utils/date.js';
import { config } from '../config/app.config.js';

export class PasteService {
  constructor() {
    this.pasteRepository = new PasteRepository();
  }

  async createPaste(content) {
    const id = nanoid(10);
    const paste = {
      id: id,
      url: `${config.url}/api/pastes/${id}`,
      createdAt: getCurrentTimestamp(),
      content
    };

    return this.pasteRepository.save(paste);
  }

  async getPaste(id) {
    return this.pasteRepository.findById(id);
  }

  async getAllPastes() {
    return this.pasteRepository.findAll();
  }
}