"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = __importDefault(require("./sum"));
describe('Testando várias somas', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect((0, sum_1.default)(1, 2)).toBe(3);
    });
    test('adds 2 + 2 to equal 4', () => {
        expect((0, sum_1.default)(2, 2)).toBe(4);
    });
    test('adds 3 + 2 to equal 4', () => {
        expect((0, sum_1.default)(3, 2)).toBe(5);
    });
    test('soma de soma', () => {
        expect((0, sum_1.default)((0, sum_1.default)(3, 2), (0, sum_1.default)(3, 2))).toBe(10);
    });
});
