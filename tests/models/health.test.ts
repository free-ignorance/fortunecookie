import {
  ResponseData, ResponseMeta, HealthCheckResponse, getHealthCheck
} from '../../src/models/health';
import * as pkjson from "../../package.json";


describe('/models', () => {
  describe('/health.ts', () => {
    describe('getHealthCheck', () => {
      let healthCheck = getHealthCheck();
      beforeEach(() => {
        let healthCheck = getHealthCheck();
      });
      it('should return a health check with a message', () => {
        expect(healthCheck.data.message).toEqual("ok");
      });
      it('should return a health check with a date', () => {
        expect(healthCheck.meta.date).toBeDefined();
        expect(healthCheck.meta.date).toEqual(expect.stringContaining("T"));
      });
      it('should return a health check with an uptime', () => {
        expect(healthCheck.meta.uptime).toBeDefined();
        expect(healthCheck.meta.uptime.substring(0,10)).toEqual("00:00:00:0");
      });
      it('should return a health check with a version', () => {
        const version = pkjson.version;
        expect(healthCheck.meta.version).toEqual(version);
      });
    });
  });
});
