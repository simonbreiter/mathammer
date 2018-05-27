/* eslint-env jest */
import { hitProbability } from '../src/hitProbability'

test('function exists', () => {
  expect(hitProbability).toBeDefined()
})

test('hit probability with no reroll', () => {
  const props = {
    model: {
      melee: {
        skill: 3
      },
      ballistic: {
        skill: 3
      }
    },
    reroll: {
      melee: 'reroll-none',
      ballistic: 'reroll-none'
    }
  }
  const expected = {
    melee: 0.667,
    ballistic: 0.667
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})
