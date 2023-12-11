import { convertTime } from './convertTime.js'
describe('time', () => {
    it('converts midnight', () => {
        const result = convertTime('00:00')
        expect(result).toBe('midnight')
    })
})