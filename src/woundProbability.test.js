// /* eslint-env jest */
import { woundProbability } from './woundProbabilityNew'

test('function exists', () => {
  expect(woundProbability).toBeDefined()
})

test('strength == toughness', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-none'
    },
    modifier: {
      wound: 0
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 5
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

test('strength > toughness', () => {
  const props = {
    model: {
      strength: 5
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-none'
    },
    modifier: {
      wound: 0
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 6.666
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

test('strength >= 2 * toughness', () => {
  const props = {
    model: {
      strength: 8
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-none'
    },
    modifier: {
      wound: 0
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 8.333
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

test('strength < toughness', () => {
  const props = {
    model: {
      strength: 3
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-none'
    },
    modifier: {
      wound: 0
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 3.3333
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

test('strength * 2 <= toughness', () => {
  const props = {
    model: {
      strength: 2
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-none'
    },
    modifier: {
      wound: 0
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 1.666
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

// reroll

test('strength == toughness, reroll all', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-all'
    },
    modifier: {
      wound: 0
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 7.5
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

test('strength == toughness, reroll one', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-one'
    },
    modifier: {
      wound: 0
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 5.8333
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

// Modifier
test('strength == toughness, wound +1', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-none'
    },
    modifier: {
      wound: 1
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 6.666
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

test('strength == toughness, wound -1', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-none'
    },
    modifier: {
      wound: -1
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 3.333
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

test('strength == toughness, wound +3', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-none'
    },
    modifier: {
      wound: 3
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 8.3333
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

test('strength == toughness, wound -3', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-none'
    },
    modifier: {
      wound: -4
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 0
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

// reroll + wound modifier combined

test('strength == toughness, reroll all , wound modifier +1', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-all'
    },
    modifier: {
      wound: 1
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 8.333
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

test('strength == toughness, reroll all, wound modifier -1', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-all'
    },
    modifier: {
      wound: -1
    },
    abilities: {
      mortalWounds: 0
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 5
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.wounds).toBeCloseTo(expected.wounds)
})

// additional mortal wounds

test('strength == toughness, reroll all, mortal wounds 6+', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-none'
    },
    modifier: {
      wound: 0
    },
    abilities: {
      mortalWounds: 6
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 5,
    mortalWounds: 1.666
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.mortalWounds).toBeCloseTo(expected.mortalWounds)
})

test('strength == toughness, reroll all, mortal wounds 6+, reroll-all', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-all'
    },
    modifier: {
      wound: 0
    },
    abilities: {
      mortalWounds: 6
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 5,
    mortalWounds: 2.5
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.mortalWounds).toBeCloseTo(expected.mortalWounds)
})

test('strength == toughness, reroll all, mortal wounds 6+, reroll-one', () => {
  const props = {
    model: {
      strength: 4
    },
    weapon: {
      strength: 0
    },
    enemy: {
      toughness: 4
    },
    reroll: {
      wound: 'reroll-one'
    },
    modifier: {
      wound: 0
    },
    abilities: {
      mortalWounds: 6
    },
    hitProbability: {
      hits: 10
    }
  }

  const expected = {
    wounds: 5,
    mortalWounds: 1.9444
  }

  const returnedWounds = woundProbability(props)

  expect(returnedWounds.mortalWounds).toBeCloseTo(expected.mortalWounds)
})
