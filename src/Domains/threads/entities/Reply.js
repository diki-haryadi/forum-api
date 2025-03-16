class Reply {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, content, commentId, owner, date, isDelete } = payload;

    this.id = id;
    this.content = content;
    this.commentId = commentId;
    this.owner = owner;
    this.date = date;
    this.isDelete = isDelete;
  }

  _verifyPayload({ content, commentId }) {
    if (!content || !commentId) {
      throw new Error('REPLY.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof content !== 'string' || typeof commentId !== 'string') {
      throw new Error('REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }

  getContent() {
    if (this.isDelete) {
      return '**balasan telah dihapus**';
    }
    return this.content;
  }
}

module.exports = Reply;