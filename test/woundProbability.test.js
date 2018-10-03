/* eslint-env jest */
import { woundProbability } from "../src/woundProbability";

test("function exists", () => {
  expect(woundProbability).toBeDefined();
});

test("wound probability double toughness", () => {
  const props = {
    model: {
      melee: {
        strength: 8
      },
      ballistic: {
        strength: 8
      }
    },
    enemy: {
      toughness: 4
    },
    woundReroll: {
      melee: "reroll-none",
      ballistic: "reroll-none"
    },
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.6666
    }
  };
  const expected = {
    melee: 0.555,
    ballistic: 0.555
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("wound probability higher than toughness", () => {
  const props = {
    model: {
      melee: {
        strength: 6
      },
      ballistic: {
        strength: 5
      }
    },
    enemy: {
      toughness: 4
    },
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.6666
    }
  };
  const expected = {
    melee: 0.444,
    ballistic: 0.444
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("wound probability with no reroll", () => {
  const props = {
    model: {
      melee: {
        strength: 4
      },
      ballistic: {
        strength: 4
      }
    },
    enemy: {
      toughness: 4
    },
    woundReroll: {
      melee: "reroll-none",
      ballistic: "reroll-none"
    },
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.3333
    }
  };
  const expected = {
    melee: 0.333,
    ballistic: 0.1666
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("wound probability smaller than toughness", () => {
  const props = {
    model: {
      melee: {
        strength: 2
      },
      ballistic: {
        strength: 3
      }
    },
    enemy: {
      toughness: 4
    },
    woundReroll: {
      melee: "reroll-none",
      ballistic: "reroll-none"
    },
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.6666
    }
  };
  const expected = {
    melee: 0.111,
    ballistic: 0.2222
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("wound probability with reroll-1", () => {
  const props = {
    model: {
      melee: {
        strength: 4
      },
      ballistic: {
        strength: 4
      }
    },
    enemy: {
      toughness: 4
    },
    woundReroll: {
      melee: "reroll-1",
      ballistic: "reroll-all"
    },
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.6666
    }
  };
  const expected = {
    melee: 0.3888,
    ballistic: 0.4995
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("wound probability with reroll-1 and reroll-all and hit reroll-1 ", () => {
  const props = {
    model: {
      melee: {
        strength: 4
      },
      ballistic: {
        strength: 4
      }
    },
    enemy: {
      toughness: 4
    },
    woundReroll: {
      melee: "reroll-1",
      ballistic: "reroll-all"
    },
    hitProbability: {
      melee: 0.7777,
      ballistic: 0.7777
    }
  };
  const expected = {
    melee: 0.4537,
    ballistic: 0.5833
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("wound probability mod 1, -1 ", () => {
  const props = {
    model: {
      melee: {
        strength: 4
      },
      ballistic: {
        strength: 4
      }
    },
    enemy: {
      toughness: 4
    },
    woundModifier: {
      melee: -1,
      ballistic: 1
    },
    woundReroll: {
      melee: "reroll-none",
      ballistic: "reroll-none"
    },
    hitProbability: {
      melee: 0.666,
      ballistic: 0.666
    }
  };
  const expected = {
    melee: 0.222,
    ballistic: 0.444
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("wound modifier <2, >6 ", () => {
  const props = {
    model: {
      melee: {
        strength: 2
      },
      ballistic: {
        strength: 8
      }
    },
    enemy: {
      toughness: 4
    },
    woundModifier: {
      melee: -1,
      ballistic: 1
    },
    hitProbability: {
      melee: 0.666,
      ballistic: 0.666
    }
  };
  const expected = {
    melee: 0,
    ballistic: 0.555
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("wound modifier +1,-1 equal toughness reroll-1 ", () => {
  const props = {
    model: {
      melee: {
        strength: 4
      },
      ballistic: {
        strength: 4
      }
    },
    enemy: {
      toughness: 4
    },
    woundModifier: {
      melee: -1,
      ballistic: 1
    },
    woundReroll: {
      melee: "reroll-1",
      ballistic: "reroll-1"
    },
    hitProbability: {
      melee: 0.666,
      ballistic: 0.666
    }
  };
  const expected = {
    melee: 0.2592,
    ballistic: 0.4074
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("wound modifier +1,-1 equal toughness reroll-all ", () => {
  const props = {
    model: {
      melee: {
        strength: 4
      },
      ballistic: {
        strength: 4
      }
    },
    enemy: {
      toughness: 4
    },
    woundModifier: {
      melee: -1,
      ballistic: 1
    },
    woundReroll: {
      melee: "reroll-all",
      ballistic: "reroll-all"
    },
    hitProbability: {
      melee: 0.666,
      ballistic: 0.666
    }
  };
  const expected = {
    melee: 0.333,
    ballistic: 0.555
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("wound modifier +4,-4 equal toughness reroll-all ", () => {
  const props = {
    model: {
      melee: {
        strength: 4
      },
      ballistic: {
        strength: 4
      }
    },
    enemy: {
      toughness: 4
    },
    woundModifier: {
      melee: -4,
      ballistic: 4
    },
    woundReroll: {
      melee: "reroll-all",
      ballistic: "reroll-all"
    },
    hitProbability: {
      melee: 0.666,
      ballistic: 0.666
    }
  };
  const expected = {
    melee: 0,
    ballistic: 0.6111
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("wound modifier <2 >6 ", () => {
  const props = {
    model: {
      melee: {
        strength: 2
      },
      ballistic: {
        strength: 8
      }
    },
    enemy: {
      toughness: 4
    },
    woundModifier: {
      melee: -1,
      ballistic: 1
    },
    woundReroll: {
      melee: "reroll-all",
      ballistic: "reroll-all"
    },
    hitProbability: {
      melee: 0.666,
      ballistic: 0.666
    }
  };
  const expected = {
    melee: 0,
    ballistic: 0.64814
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("only melee", () => {
  const props = {
    model: {
      melee: {
        skill: 3,
        strength: 4
      }
    },
    enemy: {
      toughness: 4
    },
    hitReroll: {
      melee: "reroll-none"
    },
    woundReroll: {
      melee: "reroll-none"
    },
    hitProbability: {
      melee: 0.6666
    }
  };
  const expected = {
    melee: 0.333
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
});

test("only ballistic", () => {
  const props = {
    model: {
      ballistic: {
        skill: 3,
        strength: 4
      }
    },
    enemy: {
      toughness: 4
    },
    hitReroll: {
      ballistic: "reroll-none"
    },
    woundReroll: {
      ballistic: "reroll-none"
    },
    hitProbability: {
      ballistic: 0.6666
    }
  };
  const expected = {
    ballistic: 0.333
  };

  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("Error Strength < 0", () => {
  const props = {
    model: {
      melee: {
        strength: "Senf"
      },
      ballistic: {
        strength: 8
      }
    },
    enemy: {
      toughness: 4
    }
  };

  expect(() => {
    woundProbability(props);
  }).toThrow(TypeError);
});

test("Error Strength < 0", () => {
  const props = {
    model: {
      ballistic: {
        strength: -4
      }
    },
    enemy: {
      toughness: 4
    },
    hitProbability: {
      ballistic: 0.6666
    }
  };
  expect(() => {
    woundProbability(props);
  }).toThrow(RangeError);
});

test("Error no value1", () => {
  const props = {};

  expect(() => {
    woundProbability(props);
  }).toThrowError(RangeError);
});

test("wound probability smaller than toughness", () => {
  const props = {
    model: {
      melee: {
        strength: "2"
      },
      ballistic: {
        strength: "3"
      }
    },
    enemy: {
      toughness: "4"
    },
    woundReroll: {
      melee: "reroll-none",
      ballistic: "reroll-none"
    },
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.6666
    }
  };
  const expected = {
    melee: 0.111,
    ballistic: 0.2222
  };

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee);
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});
