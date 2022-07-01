"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../src/middleware/errors");
describe('/middleware', () => {
    describe('/errors.ts', () => {
        describe('code method', () => {
            it('[400] should return HttpException for 400 when passed number of 400', () => {
                const expected = new errors_1.HttpException(400, "The request syntax is malformed or invalid", "BadRequest");
                expect((0, errors_1.code)(400)).toEqual(expected);
            });
            it('[401] should return HttpException for 401 when passed number of 401', () => {
                const expected = new errors_1.HttpException(401, "You are not authorized, the client must authenticate itself to get the requested response.", "Unauthorized");
                expect((0, errors_1.code)(401)).toEqual(expected);
            });
            it('[402] should return HttpException for 402 when passed number of 402', () => {
                const expected = new errors_1.HttpException(402, "Payme", "PaymentRequired");
                expect((0, errors_1.code)(402)).toEqual(expected);
            });
            it('[403] should return HttpException for 403 when passed number of 403', () => {
                const expected = new errors_1.HttpException(403, "You are not authorized, we know which user you are, but the item you requested is not allowed to be given to you", "Forbidden");
                expect((0, errors_1.code)(403)).toEqual(expected);
            });
            it('[404] should return HttpException for 404 when passed number of 404', () => {
                const expected = new errors_1.HttpException(404, "The item you are looking for is not found", "NotFound");
                expect((0, errors_1.code)(404)).toEqual(expected);
            });
            it('[405] should return HttpException for 405 when passed number of 405', () => {
                const expected = new errors_1.HttpException(405, "The method you are using is not allowed", "MethodNotAllowed");
                expect((0, errors_1.code)(405)).toEqual(expected);
            });
            it('[406] should return HttpException for 406 when passed number of 406', () => {
                const expected = new errors_1.HttpException(406, "The requested resource is not available in the format you requested", "NotAcceptable");
                expect((0, errors_1.code)(406)).toEqual(expected);
            });
            it('[407] should return HttpException for 407 when passed number of 407', () => {
                const expected = new errors_1.HttpException(407, "Proxy Authentication Required", "ProxyAuthenticationRequired");
                expect((0, errors_1.code)(407)).toEqual(expected);
            });
            it('[408] should return HttpException for 408 when passed number of 408', () => {
                const expected = new errors_1.HttpException(408, "The server timed out waiting for the request", "RequestTimeout");
                expect((0, errors_1.code)(408)).toEqual(expected);
            });
            it('[409] should return HttpException for 409 when passed number of 409', () => {
                const expected = new errors_1.HttpException(409, "The request could not be processed because of conflict in the request", "Conflict");
                expect((0, errors_1.code)(409)).toEqual(expected);
            });
            it('[410] should return HttpException for 410 when passed number of 410', () => {
                const expected = new errors_1.HttpException(410, "The requested resource is no longer available", "Gone");
                expect((0, errors_1.code)(410)).toEqual(expected);
            });
            it('[411] should return HttpException for 411 when passed number of 411', () => {
                const expected = new errors_1.HttpException(411, "The request did not specify the length of its content, which is required by the requested resource", "LengthRequired");
                expect((0, errors_1.code)(411)).toEqual(expected);
            });
            it('[412] should return HttpException for 412 when passed number of 412', () => {
                const expected = new errors_1.HttpException(412, "The server does not meet one of the preconditions that the requester put on the request", "PreconditionFailed");
                expect((0, errors_1.code)(412)).toEqual(expected);
            });
            it('[413] should return HttpException for 413 when passed number of 413', () => {
                const expected = new errors_1.HttpException(413, "The request is larger than the server is willing or able to process", "RequestEntityTooLarge");
                expect((0, errors_1.code)(413)).toEqual(expected);
            });
            it('[414] should return HttpException for 414 when passed number of 414', () => {
                const expected = new errors_1.HttpException(414, "The URI provided was too long for the server to process", "RequestUriTooLong");
                expect((0, errors_1.code)(414)).toEqual(expected);
            });
            it('[415] should return HttpException for 415 when passed number of 415', () => {
                const expected = new errors_1.HttpException(415, "The request entity has a media type which the server or resource does not support", "UnsupportedMediaType");
                expect((0, errors_1.code)(415)).toEqual(expected);
            });
            it('[416] should return HttpException for 416 when passed number of 416', () => {
                const expected = new errors_1.HttpException(416, "The client has asked for a portion of the file, but the server cannot supply that portion", "RequestedRangeNotSatisfiable");
                expect((0, errors_1.code)(416)).toEqual(expected);
            });
            it('[417] should return HttpException for 417 when passed number of 417', () => {
                const expected = new errors_1.HttpException(417, "The server cannot meet the requirements of the Expect request-header field", "ExpectationFailed");
                expect((0, errors_1.code)(417)).toEqual(expected);
            });
            it('[418] should return HttpException for 418 when passed number of 418', () => {
                const expected = new errors_1.HttpException(418, "The request was directed at a server that is not able to produce a response", "I'm a teapot");
                expect((0, errors_1.code)(418)).toEqual(expected);
            });
            it('[422] should return HttpException for 422 when passed number of 422', () => {
                const expected = new errors_1.HttpException(422, "The request was well-formed but was unable to be followed due to semantic errors", "UnprocessableEntity");
                expect((0, errors_1.code)(422)).toEqual(expected);
            });
            it('[423] should return HttpException for 423 when passed number of 423', () => {
                const expected = new errors_1.HttpException(423, "The resource that is being accessed is locked", "Locked");
                expect((0, errors_1.code)(423)).toEqual(expected);
            });
            it('[424] should return HttpException for 424 when passed number of 424', () => {
                const expected = new errors_1.HttpException(424, "The request failed due to failure of a previous request", "FailedDependency");
                expect((0, errors_1.code)(424)).toEqual(expected);
            });
        });
        describe('errorMiddleware method', () => {
            let mockRequest;
            let mockResponse;
            let nextFunction = jest.fn();
            beforeEach(() => {
                mockRequest = jest.fn();
                mockResponse = {
                    send: jest.fn(),
                    status: jest.fn(() => mockResponse),
                };
            });
            it('should handle a 404 error correctly', () => {
                const mockError = new errors_1.HttpException(404, 'Not Found', 'Not Found');
                (0, errors_1.errorMiddleware)(mockError, mockRequest, mockResponse, nextFunction);
                expect(mockResponse.status).toHaveBeenCalledWith(404);
                expect(mockResponse.send).toHaveBeenCalled();
            });
        });
    });
});
//# sourceMappingURL=errors.test.js.map