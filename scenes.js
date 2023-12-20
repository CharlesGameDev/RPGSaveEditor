const SCENE_LIST = {
    "d01b1a": "Bowser's Keep - Save Room",
    "d01b1b": "Bowser's Keep - Outside Save Room",
    "d01b1c": "Bowser's Keep - Outside Save Room #2",
    "d01b1d": "Bowser's Keep - Outside Save Room Hallway",
    "d01b1e": "Bowser's Keep - Outside Save Room Hallway #2",
    "d01f1a": "Bowser's Keep - Entrance",
    "d01f1a2": "Bowser's Keep - Entrance (Return)",
    "d01f1b": "Bowser's Keep - Hallway",
    "d01f1b2": "Bowser's Keep - Hallway (Return)",
    "d01f1c": "Bowser's Keep - Hallway #2",
    "d01f1c2": "Bowser's Keep - Hallway #2 (Return)",
    "d01f1d": "Bowser's Keep - Final Hallway",
    "d01f1d2": "Bowser's Keep - Final Hallway (Return)",
    "d01f1e": "Bowser's Keep - End Hallway #1",
    "d01f1f": "d01f1f",
    "d01f1g": "d01f1g",
    "d01f1h": "d01f1h",
    "d01f1i": "d01f1i",
    "d01f1j": "d01f1j",
    "d01out": "d01out",
    "d01outb": "d01outb",
    "d01r1a": "Bowser's Keep - End Lava Room (idk)",
    "d01r1b": "d01r1b",
    "d01r1c": "d01r1c",
    "d01r2a": "d01r2a",
    "d01r2b": "d01r2b",
    "d01r2c": "d01r2c",
    "d01r3a": "d01r3a",
    "d01r3b": "d01r3b",
    "d01r3c": "d01r3c",
    "d01r4a": "d01r4a",
    "d01r4b": "d01r4b",
    "d01r4c": "d01r4c",
    "d01r5a": "d01r5a",
    "d01r5b": "d01r5b",
    "d01r5c": "d01r5c",
    "d01r6a": "d01r6a",
    "d01r6b": "d01r6b",
    "d01r6c": "Bowser's Keep - Unused Room?",
    "d02out": "Mushroom Way - Room #1",
    "d02out2": "Mushroom Way - Room #2",
    "d02out3": "Mushroom Way - Room #3",
    "d03out": "Bandit's Way - Room #1",
    "d03out2": "Bandit's Way - Room #2",
    "d03out3": "Bandit's Way - Room #3",
    "d03out4": "Bandit's Way - Room #4",
    "d03out5": "Bandit's Way - Room #5",
    "d04b1": "Kero Sewers - Entrance",
    "d04b2a": "Rose Way - Room #1",
    "d04b2b": "Rose Way - Room #2",
    "d04b2c": "Rose Way - Room #3",
    "d04b3a": "d04b3a",
    "d04b3b": "d04b3b",
    "d04b3c": "d04b3c",
    "d04b3d": "d04b3d",
    "d04out": "d04out",
    "d05out": "d05out",
    "d05out2": "d05out2",
    "d05out3": "d05out3",
    "d05out4": "d05out4",
    "d05out5": "d05out5",
    "d06b1a": "Forest Maze - Tree Log Room #1",
    "d06b1b": "d06b1b",
    "d06b1c": "d06b1c",
    "d06b1d": "d06b1d",
    "d06b1e": "d06b1e",
    "d06b1f": "d06b1f",
    "d06b1g": "d06b1g",
    "d06b1h": "d06b1h",
    "d06b1i": "d06b1i",
    "d06b1j": "d06b1j",
    "d06b1k": "d06b1k",
    "d06out": "d06out",
    "d06out2": "d06out2",
    "d06out3": "d06out3",
    "d06out4": "d06out4",
    "d06out5": "d06out5",
    "d06out6": "d06out6",
    "d06out7": "d06out7",
    "d06out8": "d06out8",
    "d06out9": "d06out9",
    "d07b1a": "Pipe Vault - Entrance",
    "d07b1b": "d07b1b",
    "d07b2": "d07b2",
    "d07b3a": "d07b3a",
    "d07b3b": "d07b3b",
    "d07b3c": "d07b3c",
    "d07b4": "d07b4",
    "d07b5": "d07b5",
    "d07out": "d07out",
    "d08b1a": "d08b1a",
    "d08b1b": "d08b1b",
    "d08b1c": "d08b1c",
    "d08b1d": "d08b1d",
    "d08b1e": "d08b1e",
    "d08b1f": "d08b1f",
    "d08b1g": "d08b1g",
    "d08b1h": "d08b1h",
    "d08b1i": "d08b1i",
    "d08b1j": "d08b1j",
    "d08b1k": "d08b1k",
    "d08b1l": "d08b1l",
    "d08b1m": "d08b1m",
    "d08b1n": "d08b1n",
    "d08b1o": "d08b1o",
    "d08f1a": "d08f1a",
    "d08f1b": "d08f1b",
    "d08f1c": "d08f1c",
    "d08f1d": "d08f1d",
    "d09out": "d09out",
    "d09out2": "d09out2",
    "d09out3": "d09out3",
    "d09outb": "d09outb",
    "d10f1a": "Lobby Booster Tower",
    "d10f1b": "d10f1b",
    "d10f1c": "d10f1c",
    "d10f2a": "d10f2a",
    "d10f2b": "d10f2b",
    "d10f3a": "d10f3a",
    "d10f3b": "d10f3b",
    "d10f4a": "d10f4a",
    "d10f4b": "d10f4b",
    "d10f5a": "d10f5a",
    "d10f5b": "d10f5b",
    "d10f5c": "d10f5c",
    "d10f5d": "d10f5d",
    "d10f6": "d10f6",
    "d10f7a": "d10f7a",
    "d10f7b": "d10f7b",
    "d10f7c": "d10f7c",
    "d10f8a": "d10f8a",
    "d10f8b": "d10f8b",
    "d10f9a": "d10f9a",
    "d10f9b": "d10f9b",
    "d10out": "d10out",
    "d10out2": "d10out2",
    "d11out": "d11out",
    "d11out2": "d11out2",
    "d11out3": "d11out3",
    "d11out4": "d11out4",
    "d12b1a": "d12b1a",
    "d12b1b": "d12b1b",
    "d12b1c": "d12b1c",
    "d12b1d": "d12b1d",
    "d12b1e": "d12b1e",
    "d12b1f": "d12b1f",
    "d12b2": "d12b2",
    "d12out": "d12out",
    "d13b1a": "d13b1a",
    "d13b1b": "d13b1b",
    "d13b1b2": "d13b1b2",
    "d13b1c": "d13b1c",
    "d13b1d": "d13b1d",
    "d13b2a": "d13b2a",
    "d13b2b": "d13b2b",
    "d13b2c": "d13b2c",
    "d13b2d": "d13b2d",
    "d13b2e": "d13b2e",
    "d13b3a": "d13b3a",
    "d13b3b": "d13b3b",
    "d13b3c": "d13b3c",
    "d13b3d": "d13b3d",
    "d13b4a": "d13b4a",
    "d13b4b": "d13b4b",
    "d13b4c": "d13b4c",
    "d13b4d": "d13b4d",
    "d13b5a": "d13b5a",
    "d13b5b": "d13b5b",
    "d13b5c": "d13b5c",
    "d13b5d": "d13b5d",
    "d13b5e": "d13b5e",
    "d13b5f": "d13b5f",
    "d13b5g": "d13b5g",
    "d13b6a": "d13b6a",
    "d13b6b": "d13b6b",
    "d13b6c": "d13b6c",
    "d13f1a": "d13f1a",
    "d13f1b": "d13f1b",
    "d13f1c": "d13f1c",
    "d13f1d": "d13f1d",
    "d13f1e": "d13f1e",
    "d14b1a": "d14b1a",
    "d14b1b": "d14b1b",
    "d14b1c": "d14b1c",
    "d14b1d": "d14b1d",
    "d14b1e": "d14b1e",
    "d14b2": "d14b2",
    "d14out": "d14out",
    "d14out10": "d14out10",
    "d14out11": "d14out11",
    "d14out12": "d14out12",
    "d14out2": "d14out2",
    "d14out3": "d14out3",
    "d14out4": "d14out4",
    "d14out5": "d14out5",
    "d14out6": "d14out6",
    "d14out7": "d14out7",
    "d14out8": "d14out8",
    "d14out9": "d14out9",
    "d15b1a": "d15b1a",
    "d15b1b": "d15b1b",
    "d15b1c": "d15b1c",
    "d15b2a": "d15b2a",
    "d15b2b": "d15b2b",
    "d15b3a": "d15b3a",
    "d15b3b": "d15b3b",
    "d15f1a": "d15f1a",
    "d15f1b": "d15f1b",
    "d15f1c": "d15f1c",
    "d16b1a": "d16b1a",
    "d16b1b": "d16b1b",
    "d16b1c": "d16b1c",
    "d16b1d": "d16b1d",
    "d16b1e": "d16b1e",
    "d16out": "d16out",
    "d16out2": "d16out2",
    "d16out3": "d16out3",
    "d16out4": "d16out4",
    "d17f1a": "d17f1a",
    "d17f1b": "d17f1b",
    "d17f1c": "d17f1c",
    "d17f1d": "d17f1d",
    "d17f2a": "d17f2a",
    "d17f2b": "d17f2b",
    "d17f2c": "d17f2c",
    "d17f2d": "d17f2d",
    "d17f3a": "d17f3a",
    "d17f3b": "d17f3b",
    "d17f3c": "d17f3c",
    "d17f3d": "d17f3d",
    "d17f3e": "d17f3e",
    "d17f3f": "d17f3f",
    "d17f4a": "d17f4a",
    "d17f4b": "d17f4b",
    "d17f4c": "Barrel Volcano - Rocky Stairs (With Coin Box)",
    "d17f4d": "d17f4d",
    "d17f4e": "d17f4e",
    "d17f4f": "d17f4f",
    "d17f4g": "d17f4g",
    "d17f4h": "d17f4h",
    "d17f4i": "d17f4i",
    "d17f5a": "d17f5a",
    "d17f5b": "d17f5b",
    "d17f6a": "d17f6a",
    "d17f6b": "d17f6b",
    "d17f7": "d17f7",
    "d17f8": "d17f8",
    "d17out": "Exor Explodes (Receive Red Star)",
    "d19b1a": "Weapon World - Room ???",
    "d19b1b": "Weapon World - Save Room",
    "d19b2a": "Weapon World - Room ???",
    "d19b2b": "d19b2b",
    "d19b2c": "d19b2c",
    "d19b2d": "d19b2d",
    "d19b2e": "d19b2e",
    "d19b2f": "d19b2f",
    "d19b2g": "d19b2g",
    "d19b2h": "d19b2h",
    "d19b3a": "d19b3a",
    "d19b3b": "d19b3b",
    "d19b3c": "d19b3c",
    "d19b3d": "d19b3d",
    "d19b3e": "d19b3e",
    "d19b3f": "d19b3f",
    "d19b3g": "d19b3g",
    "d19b3h": "d19b3h",
    "d19b4": "d19b4",
    "d19b5": "d19b5",
    "d19f1a": "d19f1a",
    "d19f1b": "d19f1b",
    "d19f1c": "d19f1c",
    "d19f1d": "d19f1d",
    "d19f1e": "d19f1e",
    "d19f1f": "d19f1f",
    "d19in": "d19in",
    "e04out": "e04out",
    "e04out_left": "e04out_left",
    "e04out_loop": "Unknown Dark Room (e04out_loop)",
    "e04out_right": "e04out_right",
    "e04_test1": "Test Room #1",
    "e05out": "e05out",
    "e05outb": "e05outb",
    "e05outc": "e05outc",
    "e05_test1": "Barrel Scene Test #1",
    "e05_test2": "Barrel Scene Test #2",
    "e05_test3": "Barrel Scene Test #3",
    "e08in1": "Nimbus Land - Dream Cushion Room #1",
    "e08in2": "e08in2",
    "e08in3": "Nimbus Land - Dream Cushion Room #3",
    "e08in4": "e08in4",
    "e08in5": "e08in5",
    "e08in6": "e08in6",
    "e08in7": "e08in7",
    "e08in8": "e08in8",
    "e19in2": "e19in2",
    "e19in3": "e19in3",
    "e19in4": "e19in4",
    "e19out2": "e19out2",
    "e19out3": "e19out3",
    "e19out4": "e19out4",
    "e19out5": "e19out5",
    "e19out6": "e19out6",
    "e31in1": "e31in1",
    "e31in2": "e31in2",
    "e31in3": "e31in3",
    "e31in4": "e31in4",
    "e31out": "e31out",
    "e31out2": "e31out2",
    "e31out2_left": "e31out2_left",
    "e31out2_loop": "e31out2_loop",
    "e31out2_right": "e31out2_right",
    "e36in1": "e36in1",
    "e36in2": "e36in2",
    "e36in3": "e36in3",
    "e36out": "e36out",
    "e42out": "e42out",
    "e42out2": "e42out2",
    "e47in": "Level Up",
    "e47_test1": "Level Up Test #1",
    "e47_test2": "Level Up Test #2",
    "e47_test3": "Level Up Test #3",
    "f01m1f1": "Mario's Pad - Inside Mario's House",
    "f01out": "Mario's Pad - Outside Mario's House",
    "f02out": "Vista Hill",
    "f02outb": "Vista Hill (Walkable)",
    "f03out": "Midas River",
    "f04out": "Tadpole Pond",
    "f04out2": "f04out2",
    "f05out": "f05out",
    "f05out2": "f05out2",
    "f06m1f1a": "f06m1f1a",
    "f06m1f1b": "f06m1f1b",
    "f06out": "Casino Outside",
    "f07out": "Beanstalk",
    "f07out2": "f07out2",
    "f07out3": "f07out3",
    "f07out4": "f07out4",
    "f07out5": "f07out5",
    "f07out6": "f07out6",
    "f07out7": "f07out7",
    "m01c1b1": "Mushroom Kingdom - Vault Room",
    "m01c1b1_lm1": "m01c1b1_lm1",
    "m01c1f1a": "m01c1f1a",
    "m01c1f1a_lm1": "m01c1f1a_lm1",
    "m01c1f1b": "m01c1f1b",
    "m01c1f1b_lm1": "m01c1f1b_lm1",
    "m01c1f1c": "m01c1f1c",
    "m01c1f1c_lm1": "m01c1f1c_lm1",
    "m01c1f1d": "m01c1f1d",
    "m01c1f1d_lm1": "m01c1f1d_lm1",
    "m01c1f1e": "m01c1f1e",
    "m01c1f1e_lm1": "m01c1f1e_lm1",
    "m01c1f2a": "m01c1f2a",
    "m01c1f2a_lm1": "m01c1f2a_lm1",
    "m01c1f2b": "m01c1f2b",
    "m01c1f2b_lm1": "m01c1f2b_lm1",
    "m01c1f2c": "m01c1f2c",
    "m01c1f2c_lm1": "m01c1f2c_lm1",
    "m01i1b1": "m01i1b1",
    "m01i1b1_lm1": "m01i1b1_lm1",
    "m01i1f1": "Mushroom Kingdom - Shop",
    "m01i1f1_lm1": "Mushroom Kingdom - Shop (Debug)",
    "m01m1f1": "m01m1f1",
    "m01m1f1_lm1": "m01m1f1_lm1",
    "m01m1f2": "m01m1f2",
    "m01m1f2_lm1": "m01m1f2_lm1",
    "m01m2f1": "m01m2f1",
    "m01m2f1_lm1": "m01m2f1_lm1",
    "m01m3f1": "m01m3f1",
    "m01m3f1_lm1": "m01m3f1_lm1",
    "m01out": "m01out",
    "m01out_lm1": "m01out_lm1",
    "m01y1f1": "Mushroom Kingdom - Inn",
    "m01y1f1_lm1": "m01y1f1_lm1",
    "m01y1f2": "m01y1f2",
    "m01y1f2_lm1": "m01y1f2_lm1",
    "m02i1f1": "Rose Town - House 1",
    "m02i1f1_lm1": "m02i1f1_lm1",
    "m02m1f1": "m02m1f1",
    "m02m1f1_lm1": "m02m1f1_lm1",
    "m02m2f1": "m02m2f1",
    "m02m2f1_lm1": "m02m2f1_lm1",
    "m02m3f1": "m02m3f1",
    "m02m3f1_lm1": "m02m3f1_lm1",
    "m02m3f2": "m02m3f2",
    "m02m3f2_lm1": "m02m3f2_lm1",
    "m02m4f1": "m02m4f1",
    "m02out": "m02out",
    "m02out2": "m02out2",
    "m02out3": "m02out3",
    "m02out_lm1": "m02out_lm1",
    "m02y1f1": "m02y1f1",
    "m02y1f1_lm1": "m02y1f1_lm1",
    "m02y1f2": "m02y1f2",
    "m02y1f2_lm1": "m02y1f2_lm1",
    "m03i1f1": "Moleville - House 1",
    "m03m1f1": "m03m1f1",
    "m03m2f1": "m03m2f1",
    "m03m3f1": "m03m3f1",
    "m03out": "m03out",
    "m03outb": "m03outb",
    "m03y1f1": "m03y1f1",
    "m04k1b1": "Marrymore - Cake Room",
    "m04k1f1a": "m04k1f1a",
    "m04k1f1b": "m04k1f1b",
    "m04k1f1c": "m04k1f1c",
    "m04k1f1d": "m04k1f1d",
    "m04out": "m04out",
    "m04y1f1": "m04y1f1",
    "m04y1f2a": "m04y1f2a",
    "m04y1f2b": "m04y1f2b",
    "m04y1f3a": "m04y1f3a",
    "m04y1f3b": "m04y1f3b",
    "m04y1f3b_lm1": "m04y1f3b_lm1",
    "m05a1f1": "Seaside Town - Long Building (3rd Entrance)",
    "m05i1f1": "m05i1f1",
    "m05m1f1": "m05m1f1",
    "m05m2f1": "m05m2f1",
    "m05m2f2": "m05m2f2",
    "m05m3f1": "m05m3f1",
    "m05m4f1": "m05m4f1",
    "m05out": "Seaside Town - Main Area",
    "m05out2": "m05out2",
    "m05wa1f1": "m05wa1f1",
    "m05y1f1": "m05y1f1",
    "m05y1f2": "m05y1f2",
    "m06in1": "Monstro Town - Entrance",
    "m06m1f1": "m06m1f1",
    "m06m1f2": "m06m1f2",
    "m06m2f1": "m06m2f1",
    "m06m3f1": "m06m3f1",
    "m06m4f1": "m06m4f1",
    "m06m5f1": "m06m5f1",
    "m06out": "m06out",
    "m06outb": "m06outb",
    "m06wa1f1": "m06wa1f1",
    "m07i1f1": "Nimbus Land - House 1",
    "m07m1f1": "m07m1f1",
    "m07m2f1": "m07m2f1",
    "m07m3f1": "m07m3f1",
    "m07out": "m07out",
    "m07out2": "m07out2",
    "m07out3": "m07out3",
    "m07out4": "m07out4",
    "m07out5": "m07out5",
    "m07y1b1": "m07y1b1",
    "m07y1f1": "m07y1f1",
    "m08c1b1": "Nimbus Castle - Left End Save Room",
    "m08c1f1a": "Nimbus Castle - Entrance Hallway",
    "m08c1f1b": "Nimbus Castle - Left Hallway #1 L-Shaped",
    "m08c1f1c": "Nimbus Castle - Left Hallway #2",
    "m08c1f1d": "Nimbus Castle - Crossroad Hallway",
    "m08c1f1e": "Nimbus Castle - Statues Exhibition Hallway",
    "m08c1f1f": "Nimbus Castle - Statues Exhibition Room",
    "m08c1f1g": "Nimbus Castle - Birdo's Hallway",
    "m08c1f1h": "Nimbus Castle - Hallway Left of Birdo's Room",
    "m08c1f1i": "Nimbus Castle - Long Stair L-shaped Hallway",
    "m08c1f1j": "Nimbus Castle - Birdo's Room",
    "m08c1f1k": "Nimbus Castle - Birdo's Treasure Room",
    "m08c1f1l": "Nimbus Castle - T-shaped Hallway",
    "m08c1f1m": "Nimbus Castle - King's Prison",
    "m08c1f1n": "Nimbus Castle - King's Room Stairs Hallway",
    "m08c1f1o": "Nimbus Castle - King's Room",
    "m08c1f1p": "Nimbus Castle - Save Room - after King's Room",
    "m08c1f1q": "Nimbus Castle - Free Fall's Hallway #1",
    "m08c1f1r": "Nimbus Castle - Free Fall's Hallway #2",
    "m08c1f1s": "Nimbus Castle - Free Fall Room",
    "m08c1f1t": "Nimbus Castle - Hallway Right of Birdo's Room",
    "m08c1f1u": "Nimbus Castle - Reversed L-shaped Hallway",
    "m08c1f1v": "Nimbus Castle - Lone Statue & Chest Hallway",
    "wld00": "World Map",
    "wld09": "World Map (Walkable)",
    "z01in3": "Mario's House (Crash on exit)"
}