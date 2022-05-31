Blockly.defineBlocksWithJsonArray(
[{
  "type": "servo",
  "message0": "Servo pin %1 set angle %2 °",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
          [
              "OUT1",
              "14"
          ],
          [
              "OUT2",
              "26"
          ],
          [
              "OUT3",
              "2"
          ],
          [
              "OUT4",
              "27"
          ],
          [
              "OUT5",
              "25"
          ],
          [
              "OUT6",
              "33"
          ],
          [
              "OUT7",
              "32"
          ],
          [
              "OUT9",
              "4"
          ],
          [
              "OUT10",
              "5"
          ]
    ]},
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0271D9",
  "tooltip": "",
  "helpUrl": "" 
},
{
    "type": "Bigservo",
    "message0": "Servo pin %1 set angle %2 °",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pin",
        "options": [
            [
                "OUT1",
                "14"
            ],
            [
                "OUT2",
                "26"
            ],
            [
                "OUT3",
                "2"
            ],
            [
                "OUT4",
                "27"
            ],
            [
                "OUT5",
                "25"
            ],
            [
                "OUT6",
                "33"
            ],
            [
                "OUT7",
                "32"
            ],
            [
                "OUT9",
                "4"
            ],
            [
                "OUT10",
                "5"
            ]
      ]},
      {
        "type": "input_value",
        "name": "angle",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#0271D9",
    "tooltip": "",
    "helpUrl": "" 
  }]
);
