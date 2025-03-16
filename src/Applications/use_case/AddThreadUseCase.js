class AddThreadUseCase {
  constructor({
    threadRepository,
  }) {
    this._threadRepository = threadRepository;
  }

  async execute(useCasePayload, userId) {
    const { title, body } = useCasePayload;
    return this._threadRepository.addThread({ title, body, owner: userId });
  }
}

module.exports = AddThreadUseCase;