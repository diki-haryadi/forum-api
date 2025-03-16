class Comment {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, content, threadId, owner, date, isDelete } = payload;

    this.id = id;
    this.content = content;
    this.threadId = threadId;
    this.owner = owner;
    this.date = date;
    this.isDelete = isDelete;
  }

  _verifyPayload({ content, threadId }) {
    if (!content || !threadId) {
      throw new Error('COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof content !== 'string' || typeof threadId !== 'string') {
      throw new Error('COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }

  getContent() {
    if (this.isDelete) {
      return '**komentar telah dihapus**';
    }
    return this.content;
  }
}

module.exports = Comment;