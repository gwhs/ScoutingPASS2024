var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "30"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "100"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "m": "Mecanum<br>",
        "o": "Other"
      },
      "defaultValue": "s"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "SDS L1 (8.14:1)<br>",
        "2": "SDS L2 (6.75:1)<br>",
        "3": "SDS L3 (6.12:1)<br>",
        "4": "SDS L4 (5.14:1)<br>",
        "o": "Other ratio (put in comments)<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"3"
    },
    { "name": "Drive Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "k": "Kraken<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"k"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Number of notes in Auto?",
      "code": "aut",
      "type": "number",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Number of notes in Tele-op?",
      "code": "tel",
      "type": "number",
    },
    { "name": "Can your team climb?",
      "code": "clm",
      "type": "radio",
      "choices": {
        "t": "Yes with Trap<br>",
        "y": "Yes, climb only<br>",
        "n": "No<br>",
      },
      "defaultValue":"n"
    },
    { "name": "What is special/cool about your robot?",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
