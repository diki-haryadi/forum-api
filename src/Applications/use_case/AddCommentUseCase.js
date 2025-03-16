class AddCommentUseCase {
  constructor({
    threadRepository,
    commentRepository,
  }) {
    this._threadRepository = threadRepository;
    this._commentRepository = commentRepository;
  }

  async execute(useCasePayload, threadId, userId) {
    await this._threadRepository.verifyThreadAvailability(threadId);
    const { content } = useCasePayload;
    return this._commentRepository.addComment({
      content,
      threadId,
      owner: userId,
    });
  }
}

module.exports = AddCommentUseCase;