// In-memory storage for pastes
const pastes = new Map();

export class PasteRepository {
  async save(paste) {
    pastes.set(paste.id, paste);
    return paste;
  }

  async findById(id) {
    return pastes.get(id) || null;
  }

  async findAll() {
    // return Array.from(pastes.values());
    return
  }
}