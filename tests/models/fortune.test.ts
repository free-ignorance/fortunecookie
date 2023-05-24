import {
  getFortune, slackFortune
} from '../../src/models/fortune';

describe('/models', () => {
  describe('/fortune.ts', () => {
    describe('getFortune', () => {
      it('should return a fortune', () => {
        const fortune = getFortune();
        expect(fortune).toBeDefined();
      });
    });
    describe('slackFortune', () => {
      it('should return a slack fortune', () => {
        const fortune = slackFortune();
        expect(fortune).toBeDefined();
      });
      it('should return a slack fortune with a response type', () => {
        const fortune = slackFortune();
        expect(fortune.response_type).toEqual("in_channel");
      });
    });
  });
});