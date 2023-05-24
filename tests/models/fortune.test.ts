import {
  getFortune, defaultFortuneResponse, slackFortuneResponse
} from '../../src/models/fortune';

describe('/models', () => {
  describe('/fortune.ts', () => {
    describe('getFortune', () => {
      it('should return a fortune', () => {
        const fortune = getFortune();
        expect(fortune).toBeDefined();
      });
    });
    describe('slackFortuneResponse', () => {
      it('should return a slack fortune', () => {
        const fortune = slackFortuneResponse();
        expect(fortune).toBeDefined();
      });
      it('should return a slack fortune with a response type', () => {
        const fortune = slackFortuneResponse();
        expect(fortune.response_type).toEqual("in_channel");
      });
    });
    describe('defaultFortuneResponse', () => {
      it('should return a fortune response', () => {
        const fortune = defaultFortuneResponse();
        expect(fortune).toBeDefined();
      });
      it('should return a fortune response with a message', () => {
        const fortune = defaultFortuneResponse();
        expect(fortune.data.message).toBeDefined();
      });
    });
  });
});