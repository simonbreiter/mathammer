/* eslint-env jest */
import { damageProbability } from './damageProbabilityNew'

test('function exists', () => {
  expect(damageProbability).toBeDefined()
})

// test("damage 1, save 4", () => {
//   const props = {
//     model: {
//       damage: 1,
//       armourPenetration: 0
//     },
//     enemy: {
//       save: 4,
//       invulnerableSave: 0,
//       feelNoPain: 0
//     },
//     modifier: {
//       save: 0
//     },
//     woundProbability: {
//       wounds: 5,
//       mortalWounds: 0
//     }
//   };
//   const expected = {
//     damage: 2.5
//   };

//   const returnedDamage = damageProbability(props);

//   expect(returnedDamage.damage).toBeCloseTo(expected.damage);
// });

// test("damage 3, save 4", () => {
//   const props = {
//     model: {
//       damage: 3,
//       armourPenetration: 0
//     },
//     enemy: {
//       save: 4,
//       invulnerableSave: 0,
//       feelNoPain: 0
//     },
//     modifier: {
//       save: 0
//     },
//     woundProbability: {
//       wounds: 5,
//       mortalWounds: 0
//     }
//   };
//   const expected = {
//     damage: 7.5
//   };

//   const returnedDamage = damageProbability(props);

//   expect(returnedDamage.damage).toBeCloseTo(expected.damage);
// });

// test("damage 1, ap -2, save 4", () => {
//   const props = {
//     model: {
//       damage: 1,
//       armourPenetration: -2
//     },
//     enemy: {
//       save: 4,
//       invulnerableSave: 0,
//       feelNoPain: 0
//     },
//     modifier: {
//       save: 0
//     },
//     woundProbability: {
//       wounds: 5,
//       mortalWounds: 0
//     }
//   };
//   const expected = {
//     damage: 4.1666
//   };

//   const returnedDamage = damageProbability(props);

//   expect(returnedDamage.damage).toBeCloseTo(expected.damage);
// });

// test("damage 1, ap -2, save 5", () => {
//   const props = {
//     model: {
//       damage: 1,
//       armourPenetration: -2
//     },
//     enemy: {
//       save: 5,
//       invulnerableSave: 0,
//       feelNoPain: 0
//     },
//     modifier: {
//       save: 0
//     },
//     woundProbability: {
//       wounds: 5,
//       mortalWounds: 0
//     }
//   };
//   const expected = {
//     damage: 5
//   };

//   const returnedDamage = damageProbability(props);

//   expect(returnedDamage.damage).toBeCloseTo(expected.damage);
// });

// test("damage 3, ap -2, save 4, inv 5", () => {
//   const props = {
//     model: {
//       damage: 1,
//       armourPenetration: -2
//     },
//     enemy: {
//       save: 4,
//       invulnerableSave: 5,
//       feelNoPain: 0
//     },
//     modifier: {
//       save: 0
//     },
//     woundProbability: {
//       wounds: 6,
//       mortalWounds: 0
//     }
//   };
//   const expected = {
//     damage: 4
//   };

//   const returnedDamage = damageProbability(props);

//   expect(returnedDamage.damage).toBeCloseTo(expected.damage);
// });

// test("damage 1, ap -1, save 4, inv 6", () => {
//   const props = {
//     model: {
//       damage: 1,
//       armourPenetration: -1
//     },
//     enemy: {
//       save: 4,
//       invulnerableSave: 6,
//       feelNoPain: 0
//     },
//     modifier: {
//       save: 0
//     },
//     woundProbability: {
//       wounds: 6,
//       mortalWounds: 0
//     }
//   };
//   const expected = {
//     damage: 4
//   };

//   const returnedDamage = damageProbability(props);

//   expect(returnedDamage.damage).toBeCloseTo(expected.damage);
// });

test('damage 1, save 4, modifier 1', () => {
  const props = {
    model: {
      damage: 1,
      armourPenetration: 0
    },
    enemy: {
      save: 4,
      invulnerableSave: 0,
      feelNoPain: 0
    },
    modifier: {
      save: 1
    },
    woundProbability: {
      wounds: 6,
      mortalWounds: 0
    }
  }
  const expected = {
    damage: 2
  }

  const returnedDamage = damageProbability(props)

  expect(returnedDamage.damage).toBeCloseTo(expected.damage)
})

test('damage 1, save 4, modifier 1', () => {
  const props = {
    model: {
      damage: 1,
      armourPenetration: 1
    },
    enemy: {
      save: 4,
      invulnerableSave: 0,
      feelNoPain: 0
    },
    modifier: {
      save: 1
    },
    woundProbability: {
      wounds: 6,
      mortalWounds: 0
    }
  }
  const expected = {
    damage: 3
  }

  const returnedDamage = damageProbability(props)

  expect(returnedDamage.damage).toBeCloseTo(expected.damage)
})

test('damage 1, save 4, modifier 1', () => {
  const props = {
    model: {
      damage: 1,
      armourPenetration: 1
    },
    enemy: {
      save: 4,
      invulnerableSave: 0,
      feelNoPain: 0
    },
    modifier: {
      save: 1
    },
    woundProbability: {
      wounds: 6,
      mortalWounds: 2
    }
  }
  const expected = {
    damage: 5
  }

  const returnedDamage = damageProbability(props)

  expect(returnedDamage.damage).toBeCloseTo(expected.damage)
})

test('damage 1, save 4, modifier 1', () => {
  const props = {
    model: {
      damage: 1,
      armourPenetration: 1
    },
    enemy: {
      save: 4,
      invulnerableSave: 0,
      feelNoPain: 5
    },
    modifier: {
      save: 1
    },
    woundProbability: {
      wounds: 6,
      mortalWounds: 3
    }
  }
  const expected = {
    damage: 4
  }

  const returnedDamage = damageProbability(props)

  expect(returnedDamage.damage).toBeCloseTo(expected.damage)
})
