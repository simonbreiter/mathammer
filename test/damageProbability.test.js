/* eslint-env jest */
import { damageProbability } from "../src/damageProbability";

test("function exists", () => {
  expect(damageProbability).toBeDefined();
});

test("Damage No AP Dmg 1,2", () => {
  const props = {
    model: {
      melee: {
        damage: 1
      },
      ballistic: {
        damage: 2
      }
    },
    enemy: {
      save: 3
    },
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.6666
    },
    woundProbability: {
      melee: 0.333,
      ballistic: 0.333
    }
  };
  const expected = {
    melee: 0.1111,
    ballistic: 0.2222
  };

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("Damage 1,2 AP Dmg 1, Save 3", () => {
  const props = {
    model: {
      melee: {
        damage: 1,
        attackPower: 1
      },
      ballistic: {
        damage: 1,
        attackPower: 2
      }
    },
    enemy: {
      save: 3
    },
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.6666
    },
    woundProbability: {
      melee: 0.333,
      ballistic: 0.333
    }
  };
  const expected = {
    melee: 0.1667,
    ballistic: 0.2222
  };

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("Damage -1,-2 AP Dmg 1, Save 3", () => {
  const props = {
    model: {
      melee: {
        damage: 1,
        attackPower: -1
      },
      ballistic: {
        damage: 1,
        attackPower: -2
      }
    },
    enemy: {
      save: 3
    },
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.6666
    },
    woundProbability: {
      melee: 0.333,
      ballistic: 0.333
    }
  };
  const expected = {
    melee: 0.1667,
    ballistic: 0.2222
  };

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("Damage 1,2 AP Dmg 1, Save 3 InvulnerarbleSafe 4", () => {
  const props = {
    model: {
      melee: {
        damage: 1,
        attackPower: 1
      },
      ballistic: {
        damage: 1,
        attackPower: 2
      }
    },
    enemy: {
      save: 3,
      invulnerableSave: 4
    },
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.6666
    },
    woundProbability: {
      melee: 0.333,
      ballistic: 0.333
    }
  };
  const expected = {
    melee: 0.1667,
    ballistic: 0.1667
  };

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("only melee", () => {
  const props = {
    model: {
      melee: {
        damage: 1
      },
      ballistic: {
        damage: 1
      }
    },
    enemy: {
      save: 3
    },
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.6666
    },
    woundProbability: {
      melee: 0.333,
      ballistic: 0.333
    }
  };
  const expected = {
    melee: 0.1111,
    ballistic: 0.1111
  };

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
});

test("only ballistic", () => {
  const props = {
    model: {
      ballistic: {
        skill: 3,
        strength: 4,
        damage: 1
      }
    },
    enemy: {
      toughness: 4,
      save: 3
    },
    hitReroll: {
      ballistic: "reroll-none"
    },
    woundReroll: {
      ballistic: "reroll-none"
    },
    hitProbability: {
      ballistic: 0.6666
    },
    woundProbability: {
      ballistic: 0.333
    }
  };
  const expected = {
    ballistic: 0.1111
  };

  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("#1Damage -1 AP Dmg 1, Save 6", () => {
  const props = {
    model: {
      ballistic: {
        damage: 1,
        attackPower: 0
      }
    },
    enemy: {
      save: 6,
      saveModifier: -1
    },
    hitProbability: {
      ballistic: 0.6666
    },
    woundProbability: {
      ballistic: 0.333
    }
  };

  const expected = {
    ballistic: 0.333
  };
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("#3Damage Save Modifier +1, Dmg 1,2", () => {
  const props = {
    model: {
      ballistic: {
        damage: 2
      }
    },
    enemy: {
      save: 3,
      saveModifier: 1
    },
    hitProbability: {
      ballistic: 0.6666
    },
    woundProbability: {
      ballistic: 0.333
    }
  };

  const expected = {
    ballistic: 0.1111
  };

  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

// test("attacks 2", () => {
//   const props = {
//     model: {
//       melee: {
//         damage: 1,
//         attacks: 2
//       },
//       ballistic: {
//         damage: 2,
//         attacks: 2
//       }
//     },
//     enemy: {
//       save: 3
//     },
//     hitProbability: {
//       melee: 0.6666,
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       melee: 0.333,
//       ballistic: 0.333
//     }
//   };
//   const expected = {
//     melee: 0.2222,
//     ballistic: 0.44444
//   };

//   expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
//   expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
// });

// test("attacks melee", () => {
//   const props = {
//     model: {
//       melee: {
//         damage: 1,
//         attacks: 2
//       }
//     },
//     enemy: {
//       save: 3
//     },
//     hitProbability: {
//       melee: 0.6666
//     },
//     woundProbability: {
//       melee: 0.333
//     }
//   };
//   const expected = {
//     melee: 0.2222
//   };

//   expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
// });

// test("attacks ballistic", () => {
//   const props = {
//     model: {
//       ballistic: {
//         damage: 2,
//         attacks: 2
//       }
//     },
//     enemy: {
//       save: 3
//     },
//     hitProbability: {
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       ballistic: 0.333
//     }
//   };
//   const expected = {
//     ballistic: 0.44444
//   };

//   expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
// });

// test("Dakka Dakka attacks 2", () => {
//   const props = {
//     model: {
//       melee: {
//         damage: 1,
//         attacks: 6
//       },
//       ballistic: {
//         damage: 2,
//         attacks: 6
//       }
//     },
//     enemy: {
//       save: 3
//     },
//     dakkaDakkaDakka: {
//       melee: "yes",
//       ballistic: "yes"
//     },
//     hitProbability: {
//       melee: 0.6666,
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       melee: 0.333,
//       ballistic: 0.333
//     }
//   };
//   const expected = {
//     melee: 0.77777,
//     ballistic: 1.5555
//   };

//   expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
//   expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
// });

// test("Dakka Dakka attacks melee", () => {
//   const props = {
//     model: {
//       melee: {
//         damage: 1,
//         attacks: 6
//       }
//     },
//     enemy: {
//       save: 3
//     },
//     dakkaDakkaDakka: {
//       melee: "yes"
//     },
//     hitProbability: {
//       melee: 0.6666
//     },
//     woundProbability: {
//       melee: 0.333
//     }
//   };
//   const expected = {
//     melee: 0.7777
//   };

//   expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
// });

// test("Dakka Dakka ballistic", () => {
//   const props = {
//     model: {
//       ballistic: {
//         damage: 2,
//         attacks: 6
//       }
//     },
//     enemy: {
//       save: 3
//     },
//     dakkaDakkaDakka: {
//       ballistic: "yes"
//     },
//     hitProbability: {
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       ballistic: 0.333
//     }
//   };
//   const expected = {
//     ballistic: 1.5555
//   };

//   expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
// });

test("Error Type Damage", () => {
  const props = {
    model: {
      ballistic: {
        damage: "Senf"
      }
    },
    enemy: {
      save: 3
    },
    hitProbability: {
      ballistic: 0.6666
    },
    woundProbability: {
      ballistic: 0.333
    }
  };

  expect(() => {
    damageProbability(props);
  }).toThrow(TypeError);
});

test("Error Type AP", () => {
  const props = {
    model: {
      ballistic: {
        damage: 2,
        attackPower: "Senf"
      }
    },
    enemy: {
      save: 3
    },
    hitProbability: {
      ballistic: 0.6666
    },
    woundProbability: {
      ballistic: 0.333
    }
  };

  expect(() => {
    damageProbability(props);
  }).toThrow(TypeError);
});

test("Error Type AP", () => {
  const props = {
    model: {
      ballistic: {
        damage: 2,
        attackPower: 7
      }
    },
    enemy: {
      save: 3
    },
    hitProbability: {
      ballistic: 0.6666
    },
    woundProbability: {
      ballistic: 0.333
    }
  };
  expect(() => {
    damageProbability(props);
  }).toThrow(RangeError);
});

test("Error Type Save", () => {
  const props = {
    model: {
      ballistic: {
        damage: 2,
        attackPower: 3
      }
    },
    enemy: {
      save: "Senf"
    },
    hitProbability: {
      ballistic: 0.6666
    },
    woundProbability: {
      ballistic: 0.333
    }
  };

  expect(() => {
    damageProbability(props);
  }).toThrow(TypeError);
});

test("Error Type invSave", () => {
  const props = {
    model: {
      ballistic: {
        damage: 2,
        attackPower: 3
      }
    },
    enemy: {
      save: 3,
      invulnerableSave: "Senf"
    },
    hitProbability: {
      ballistic: 0.6666
    },
    woundProbability: {
      ballistic: 0.333
    }
  };

  expect(() => {
    damageProbability(props);
  }).toThrow(TypeError);
});

// test("Error Type attacks", () => {
//   const props = {
//     model: {
//       ballistic: {
//         damage: 2,
//         attackPower: 3,
//         attacks: "Senf"
//       }
//     },
//     enemy: {
//       save: 3,
//       invulnerableSave: 4
//     },
//     hitProbability: {
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       ballistic: 0.333
//     }
//   };

//   expect(() => {
//     damageProbability(props);
//   }).toThrow(TypeError);
// });

test("Error - Damage", () => {
  const props = {
    model: {
      ballistic: {
        damage: -2,
        attackPower: 3
      }
    },
    enemy: {
      save: 3
    },
    hitProbability: {
      ballistic: 0.6666
    },
    woundProbability: {
      ballistic: 0.333
    }
  };

  expect(() => {
    damageProbability(props);
  }).toThrow(RangeError);
});

// test("Error FNP", () => {
//   const props = {
//     model: {
//       ballistic: {
//         damage: 2,
//         attackPower: 3
//       }
//     },
//     enemy: {
//       save: 3,
//       feelNoPain: 1
//     },
//     hitProbability: {
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       ballistic: 0.333
//     }
//   };

//   expect(() => {
//     damageProbability(props);
//   }).toThrow(RangeError);
// });

// test("Error - FNP", () => {
//   const props = {
//     model: {
//       ballistic: {
//         damage: 2,
//         attackPower: 3
//       }
//     },
//     enemy: {
//       save: 3,
//       feelNoPain: -1
//     },
//     hitProbability: {
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       ballistic: 0.333
//     }
//   };

//   expect(() => {
//     damageProbability(props);
//   }).toThrow(RangeError);
// });

// test("Error FNP", () => {
//   const props = {
//     model: {
//       ballistic: {
//         damage: 2,
//         attackPower: 3
//       }
//     },
//     enemy: {
//       save: 3,
//       feelNoPain: 7
//     },
//     hitProbability: {
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       ballistic: 0.333
//     }
//   };

//   expect(() => {
//     damageProbability(props);
//   }).toThrow(RangeError);
// });

test("Error Range Save", () => {
  const props = {
    model: {
      ballistic: {
        damage: 2,
        attackPower: 3
      }
    },
    enemy: {
      save: -3
    },
    hitProbability: {
      ballistic: 0.6666
    },
    woundProbability: {
      ballistic: 0.333
    }
  };

  expect(() => {
    damageProbability(props);
  }).toThrow(RangeError);
});

// test("Error Senf FNP", () => {
//   const props = {
//     model: {
//       ballistic: {
//         damage: 2,
//         attackPower: 3
//       }
//     },
//     enemy: {
//       save: 3,
//       feelNoPain: "Senf"
//     },
//     hitProbability: {
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       ballistic: 0.333
//     }
//   };

//   expect(() => {
//     damageProbability(props);
//   }).toThrow(TypeError);
// });

test("Error no value1", () => {
  const props = {};

  expect(() => {
    damageProbability(props);
  }).toThrowError(RangeError);
});

// test("attacks melee", () => {
//   const props = {
//     model: {
//       melee: {
//         damage: 1,
//         attacks: 3
//       }
//     },
//     enemy: {
//       save: 3,
//       feelNoPain: 5
//     },
//     hitProbability: {
//       melee: 0.6666
//     },
//     woundProbability: {
//       melee: 0.333
//     }
//   };
//   const expected = {
//     melee: 0.222
//   };

//   expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
// });

// test("attacks ballistic", () => {
//   const props = {
//     model: {
//       ballistic: {
//         damage: 3,
//         attacks: 1
//       }
//     },
//     enemy: {
//       save: 3,
//       feelNoPain: 5
//     },
//     hitProbability: {
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       ballistic: 0.333
//     }
//   };
//   const expected = {
//     ballistic: 0.2222
//   };

//   expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
// });

// test("Feel no Pain", () => {
//   const props = {
//     model: {
//       melee: {
//         damage: 1,
//         attacks: 6
//       },
//       ballistic: {
//         damage: 2,
//         attacks: 6
//       }
//     },
//     enemy: {
//       save: 3,
//       feelNoPain: 5
//     },
//     hitProbability: {
//       melee: 0.6666,
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       melee: 0.333,
//       ballistic: 0.333
//     }
//   };
//   const expected = {
//     melee: 0.4444,
//     ballistic: 0.8888
//   };

//   expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
//   expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
// });

// test("Feel no Pain", () => {
//   const props = {
//     model: {
//       melee: {
//         damage: "1",
//         attacks: "6"
//       },
//       ballistic: {
//         damage: "2",
//         attacks: "6"
//       }
//     },
//     enemy: {
//       save: 3,
//       feelNoPain: 5
//     },
//     hitProbability: {
//       melee: 0.6666,
//       ballistic: 0.6666
//     },
//     woundProbability: {
//       melee: 0.333,
//       ballistic: 0.333
//     }
//   };
//   const expected = {
//     melee: 0.4444,
//     ballistic: 0.8888
//   };

//   expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
//   expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
// });

test("String Enemy ball", () => {
  const props = {
    model: {
      ballistic: {
        damage: 2
      }
    },
    enemy: {
      save: "3",
      saveModifier: "1"
    },
    hitProbability: {
      ballistic: 0.6666
    },
    woundProbability: {
      ballistic: 0.333
    }
  };

  const expected = {
    ballistic: 0.1111
  };

  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic);
});

test("String Enemy melee", () => {
  const props = {
    model: {
      melee: {
        damage: 2
      }
    },
    enemy: {
      save: "3",
      invulnerableSave: "2",
      saveModifier: "1"
    },
    hitProbability: {
      melee: 0.6666
    },
    woundProbability: {
      melee: 0.333
    }
  };

  const expected = {
    melee: 0.1111
  };

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee);
});
