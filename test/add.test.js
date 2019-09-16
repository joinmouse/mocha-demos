const add = require('../src/add');
const assert = require('assert');

describe('01、加法函数的测试', () => {
    it('应该返回3', function() {
        let sum = add(1, 2)
        assert.equal(sum, 3)
    });
    it('应该返回 undefined', function() {
        let sum = add(1, '2')
        assert.equal(sum, undefined)
    });
    it('应该返回 undefined', function() {
        let sum = add(1)
        assert.equal(sum, undefined)
    });
});
