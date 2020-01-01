/* eslint-env jest */
import { hitProbability } from './hitProbability'

test('function exists', () => {
  expect(hitProbability).toBeDefined()
})

test('hit probability melee with no reroll', () => {
  const props = {
    model: {
      melee: {
        skill: 3
      }
    }
  }
  const expected = {
    melee: 0.667
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
})

test('only ballistic1', () => {
  const props = {
    model: {
      ballistic: {
        skill: 3
      }
    }
  }
  const expected = {
    ballistic: 0.667
  }

  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('hit probability with melee reroll-1', () => {
  const props = {
    model: {
      melee: {
        skill: 3
      },
      ballistic: {
        skill: 4
      }
    },
    hitReroll: {
      melee: 'reroll-1',
      ballistic: 'reroll-none'
    }
  }
  const expected = {
    melee: 0.777
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
})

test('hit probability with melee reroll-all + ball reroll-1', () => {
  const props = {
    model: {
      melee: {
        skill: 3
      },
      ballistic: {
        skill: 2
      }
    },
    hitModifier: {
      melee: 0,
      ballistic: 0
    },
    hitReroll: {
      melee: 'reroll-all',
      ballistic: 'reroll-1'
    }
  }
  const expected = {
    melee: 0.5,
    ballistic: 0.9722
  }

  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('-1 hit and +1 hit modifier(eg. heavy weapon moving) with no reroll', () => {
  const props = {
    model: {
      melee: {
        skill: 3
      },
      ballistic: {
        skill: 3
      }
    },
    hitModifier: {
      melee: -1,
      ballistic: 1
    }
  }
  const expected = {
    melee: 0.5,
    ballistic: 0.833
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
})

test('-1 hit modifier(eg. heavy weapon moving) reroll-all', () => {
  const props = {
    model: {
      melee: {
        skill: 3
      }
    },
    hitModifier: {
      melee: -1
    },
    hitReroll: {
      melee: 'reroll-all'
    }
  }
  const expected = {
    melee: 0.667
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
})

test('-1 hit modifier(eg. heavy weapon moving) reroll-1', () => {
  const props = {
    model: {
      melee: {
        skill: 3
      },
      ballistic: {
        skill: 4
      }
    },
    hitModifier: {
      melee: -1,
      ballistic: -1
    },
    hitReroll: {
      melee: 'reroll-1',
      ballistic: 'reroll-1'
    }
  }
  const expected = {
    melee: 0.583,
    ballistic: 0.388
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('-1 hit modifier(eg. heavy weapon moving) with no reroll and 6', () => {
  const props = {
    model: {
      melee: {
        skill: 6
      },
      ballistic: {
        skill: 6
      }
    },
    hitModifier: {
      melee: -1,
      ballistic: -1
    },
    hitReroll: {
      melee: 'reroll-none',
      ballistic: 'reroll-none'
    }
  }
  const expected = {
    melee: 0,
    ballistic: 0
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('-1 hit modifier reroll-1 and reroll-all', () => {
  const props = {
    model: {
      melee: {
        skill: 6
      },
      ballistic: {
        skill: 6
      }
    },
    hitModifier: {
      melee: -1,
      ballistic: -1
    },
    hitReroll: {
      melee: 'reroll-1',
      ballistic: 'reroll-all'
    }
  }
  const expected = {
    melee: 0,
    ballistic: 0
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('1 hit modifier reroll-1 and reroll-all', () => {
  const props = {
    model: {
      melee: {
        skill: 3
      },
      ballistic: {
        skill: 3
      }
    },
    hitModifier: {
      melee: 1,
      ballistic: 1
    },
    hitReroll: {
      melee: 'reroll-1',
      ballistic: 'reroll-all'
    }
  }
  const expected = {
    melee: 0.8055,
    ballistic: 0.944
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('skill 2 1 hit modifier reroll-1 and reroll-all', () => {
  const props = {
    model: {
      melee: {
        skill: 2
      },
      ballistic: {
        skill: 2
      }
    },
    hitModifier: {
      melee: 1,
      ballistic: 1
    },
    hitReroll: {
      melee: 'reroll-1',
      ballistic: 'reroll-all'
    }
  }
  const expected = {
    melee: 0.972,
    ballistic: 0.972
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('skill 2 1 hit modifier reroll-1 and reroll-all', () => {
  const props = {
    model: {
      melee: {
        skill: 3
      },
      ballistic: {
        skill: 3
      }
    },
    hitModifier: {
      melee: 2,
      ballistic: 2
    },
    hitReroll: {
      melee: 'reroll-1',
      ballistic: 'reroll-all'
    }
  }
  const expected = {
    melee: 0.8055,
    ballistic: 0.944
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('skill 5 2 hit modifier reroll-1 and reroll-all', () => {
  const props = {
    model: {
      melee: {
        skill: 5
      },
      ballistic: {
        skill: 5
      }
    },
    hitModifier: {
      melee: 2,
      ballistic: 2
    },
    hitReroll: {
      melee: 'reroll-1',
      ballistic: 'reroll-all'
    }
  }
  const expected = {
    melee: 0.444,
    ballistic: 0.777
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('skill 5 2 hit modifier reroll-1 and reroll-all', () => {
  const props = {
    model: {
      melee: {
        skill: 5
      },
      ballistic: {
        skill: 5
      }
    },
    hitModifier: {
      melee: 4,
      ballistic: 4
    },
    hitReroll: {
      melee: 'reroll-1',
      ballistic: 'reroll-all'
    }
  }
  const expected = {
    melee: 0.4722,
    ballistic: 0.888
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('only melee', () => {
  const props = {
    model: {
      melee: {
        skill: 3
      }
    },
    hitReroll: {
      melee: 'reroll-none'
    }
  }
  const expected = {
    melee: 0.667
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
})

test('only ballistic', () => {
  const props = {
    model: {
      ballistic: {
        skill: 3
      }
    },
    hitReroll: {
      ballistic: 'reroll-none'
    }
  }
  const expected = {
    ballistic: 0.667
  }

  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('only ballistic1', () => {
  const props = {
    model: {
      ballistic: {
        skill: 3
      }
    }
  }
  const expected = {
    ballistic: 0.667
  }

  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('cli test', () => {
  const props = {
    model: {
      melee: {
        skill: 4
      },
      ballistic: {
        skill: 4
      }
    },
    hitModifier: {
      melee: 0,
      ballistic: 0
    },
    hitReroll: {
      melee: 'reroll-none',
      ballistic: 'reroll-none'
    }
  }
  const expected = {
    melee: 0.5,
    ballistic: 0.5
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
})

test('Error < 2', () => {
  const props = {
    model: {
      melee: {
        skill: 1
      },
      ballistic: {
        skill: 4
      }
    }
  }

  expect(() => {
    hitProbability(props)
  }).toThrow(RangeError)
})

test('Error > 6', () => {
  const props = {
    model: {
      melee: {
        skill: 4
      },
      ballistic: {
        skill: 7
      }
    }
  }

  expect(() => {
    hitProbability(props)
  }).toThrowError(RangeError)
})

test('value Error', () => {
  const props = {
    model: {
      melee: {
        skill: 'Senf'
      },
      ballistic: {
        skill: 3
      }
    }
  }

  expect(() => {
    hitProbability(props)
  }).toThrowError(TypeError)
})

test('Error > 6 String', () => {
  const props = {
    model: {
      melee: {
        skill: 4
      },
      ballistic: {
        skill: '7'
      }
    }
  }

  expect(() => {
    hitProbability(props)
  }).toThrowError(RangeError)
})

test('Error no value1', () => {
  const props = {}

  expect(() => {
    hitProbability(props)
  }).toThrowError(RangeError)
})

test('only melee', () => {
  const props = {
    model: {
      melee: {
        skill: '4',
        strength: 1
      }
    },
    hitReroll: {
      melee: 'reroll-none'
    }
  }
  const expected = {
    melee: 0.5
  }

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
})
