class Thread {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, title, body, owner } = payload;

    this.id = id;
    this.title = title;
    this.body = body;
    this.owner = owner;
  }

  _verifyPayload({ title, body }) {
    if (!title || !body) {
      throw new Error('THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof title !== 'string' || typeof body !== 'string') {
      throw new Error('THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (title.length > 150) {
      throw new Error('THREAD.TITLE_LIMIT_CHAR');
    }
  }
}

module.exports = Thread;