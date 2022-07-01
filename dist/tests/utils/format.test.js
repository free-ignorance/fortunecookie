"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_1 = require("../../src/utils/format");
describe('Format', () => {
    describe('toDDHHMMSS - Phase Test 1', () => {
        it('should return the correct time for Test 00:00:00:01', () => {
            const expected = "00:00:00:01";
            const resp = (0, format_1.toDDHHMMSS)(1);
            expect(resp).toEqual(expected);
        });
        it('should return the correct time for Test 00:00:01:01', () => {
            const expected = "00:00:01:01";
            const resp = (0, format_1.toDDHHMMSS)(61);
            expect(resp).toEqual(expected);
        });
        it('should return the correct time for Test 00:01:01:01', () => {
            const expected = "00:01:01:01";
            const resp = (0, format_1.toDDHHMMSS)(3661);
            expect(resp).toEqual(expected);
        });
        it('should return the correct time for Test 01:01:01:01', () => {
            const expected = "01:00:00:00";
            const resp = (0, format_1.toDDHHMMSS)(86400);
            expect(resp).toEqual(expected);
        });
        it('should return the correct time for Test 01:01:01:01', () => {
            const expected = "01:01:01:06";
            const resp = (0, format_1.toDDHHMMSS)(90066);
            expect(resp).toEqual(expected);
        });
        it('should return the correct time for Test 00:00:00:00', () => {
            const expected = "00:00:00:00";
            const resp = (0, format_1.toDDHHMMSS)(0);
            expect(resp).toEqual(expected);
        });
    });
});
//# sourceMappingURL=format.test.js.map