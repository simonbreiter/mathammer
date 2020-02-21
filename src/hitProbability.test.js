/* eslint-env jest */
import { hitProbability } from './hitProbabilityNew'

test('function exists', () => {
  expect(hitProbability).toBeDefined()
})

test('20 models, skill 3, 2 attacks, 2 extra Attacks, extra hit roll 6+', () => {
  const props = {
    unitSize: 20,
    model: {
      skill: 3,
      attacks: 2,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-none'
    },
    modifier: {
      hit: 0
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 6,
      extraAttacks: 2
    }
  }

  const expected = {
    hits: 62.222222
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('20 models, skill 3, 2 attacks, 2 extra Attacks, extra hit roll 6+, reroll-one', () => {
  const props = {
    unitSize: 20,
    model: {
      skill: 3,
      attacks: 2,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-one'
    },
    modifier: {
      hit: 0
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 6,
      extraAttacks: 2
    }
  }

  const expected = {
    hits: 74.3209
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('20 models, skill 3, 2 attacks, 2 extra Attacks, extra hit roll 6+, reroll-all', () => {
  const props = {
    unitSize: 20,
    model: {
      skill: 3,
      attacks: 2,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-all'
    },
    modifier: {
      hit: 0
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 6,
      extraAttacks: 2
    }
  }

  const expected = {
    hits: 86.9135
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('20 models, skill 3, 2 attacks, 2 extra Attacks, extra hit roll 6+, +1 hit', () => {
  const props = {
    unitSize: 20,
    model: {
      skill: 3,
      attacks: 2,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-none'
    },
    modifier: {
      hit: 1
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 6,
      extraAttacks: 2
    }
  }

  const expected = {
    hits: 77.7777
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('20 models, skill 3, 2 attacks, 2 extra Attacks, extra hit roll 6+, -1 hit', () => {
  const props = {
    unitSize: 20,
    model: {
      skill: 3,
      attacks: 2,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-none'
    },
    modifier: {
      hit: -1
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 6,
      extraAttacks: 2
    }
  }

  const expected = {
    hits: 46.6666
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('guardsmen', () => {
  const props = {
    unitSize: 10,
    model: {
      skill: 4,
      attacks: 1,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-none'
    },
    modifier: {
      hit: -4
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 0,
      extraAttacks: 0
    }
  }

  const expected = {
    hits: 0
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBe(expected.hits)
})

test('20 models, skill 3, 2 attacks, 2 extra Attacks, extra hit roll 6+ +2 hit', () => {
  const props = {
    unitSize: 20,
    model: {
      skill: 3,
      attacks: 2,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-none'
    },
    modifier: {
      hit: 2
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 6,
      extraAttacks: 2
    }
  }

  const expected = {
    hits: 77.7777
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('10 models, skill 4+, attacks 1, -4 hit, always hit on 6', () => {
  const props = {
    unitSize: 10,
    model: {
      skill: 4,
      attacks: 1,
      alwaysHitOn: 6
    },
    reroll: {
      hit: 'reroll-none'
    },
    modifier: {
      hit: -4
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 0,
      extraAttacks: 0
    }
  }

  const expected = {
    hits: 1.66666
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('10 models, skill 4+, attacks 1, -1 hit, always hit on 6', () => {
  const props = {
    unitSize: 10,
    model: {
      skill: 4,
      attacks: 1,
      alwaysHitOn: 6
    },
    reroll: {
      hit: 'reroll-none'
    },
    modifier: {
      hit: -1
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 0,
      extraAttacks: 0
    }
  }

  const expected = {
    hits: 3.33333
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('guardsmen, +3 hit', () => {
  const props = {
    unitSize: 10,
    model: {
      skill: 4,
      attacks: 1,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-none'
    },
    modifier: {
      hit: 3
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 0,
      extraAttacks: 0
    }
  }

  const expected = {
    hits: 8.3333
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('10 models, skill 4+, attacks 1, extra hit on 6', () => {
  const props = {
    unitSize: 10,
    model: {
      skill: 4,
      attacks: 1,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-none'
    },
    modifier: {
      hit: 0
    },
    abilities: {
      extraHitOn: 6,
      extraHitRollOn: 0,
      extraAttacks: 0
    }
  }

  const expected = {
    hits: 6.66666
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('10 models, skill 4+, attacks 1, extra hit on 6, reroll-all', () => {
  const props = {
    unitSize: 10,
    model: {
      skill: 4,
      attacks: 1,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-all'
    },
    modifier: {
      hit: 0
    },
    abilities: {
      extraHitOn: 6,
      extraHitRollOn: 0,
      extraAttacks: 0
    }
  }

  const expected = {
    hits: 10
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('10 models, skill 4+, attacks 1, extra hit on 6, reroll-one', () => {
  const props = {
    unitSize: 10,
    model: {
      skill: 4,
      attacks: 1,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-one'
    },
    modifier: {
      hit: 0
    },
    abilities: {
      extraHitOn: 6,
      extraHitRollOn: 0,
      extraAttacks: 0
    }
  }

  const expected = {
    hits: 7.7777
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('10 models, skill 4+, attacks 1, +1 hit, reroll-all', () => {
  const props = {
    unitSize: 10,
    model: {
      skill: 4,
      attacks: 1,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-all'
    },
    modifier: {
      hit: 1
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 0,
      extraAttacks: 0
    }
  }

  const expected = {
    hits: 8.3333
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

test('10 models, skill 4+, attacks 1, extra hit on 6, reroll all', () => {
  const props = {
    unitSize: 10,
    model: {
      skill: 4,
      attacks: 1,
      alwaysHitOn: 0
    },
    reroll: {
      hit: 'reroll-all'
    },
    modifier: {
      hit: 1
    },
    abilities: {
      extraHitOn: 0,
      extraHitRollOn: 6,
      extraAttacks: 0
    }
  }

  const expected = {
    hits: 10.4166
  }

  const returnedHits = hitProbability(props)

  expect(returnedHits.hits).toBeCloseTo(expected.hits)
})

// alt

// test("Error < 2", () => {
//   const props = {
//     model: {
//       melee: {
//         skill: 1
//       },
//       ballistic: {
//         skill: 4
//       }
//     }
//   };

//   expect(() => {
//     hitProbability(props);
//   }).toThrow(RangeError);
// });

// test("Error > 6", () => {
//   const props = {
//     model: {
//       melee: {
//         skill: 4
//       },
//       ballistic: {
//         skill: 7
//       }
//     }
//   };

//   expect(() => {
//     hitProbability(props);
//   }).toThrowError(RangeError);
// });
