Blockly.Blocks['game_broadcastMessage'] = {
  init: function() {
    this.jsonInit({
        "message0": "Send message %1",
        "args0": [
          {
              "type": "input_value",
              "name": "MESSAGE",
            },
        ],

        "previousStatement": "Action",
          "nextStatement": "Action",
        "colour": "#bf2f24",

        }

        );
  }
};

Blockly.Blocks['game_unicastMessage'] = {
  init: function() {
    this.jsonInit({
        "message0": "Send message %1 to %2",
        "args0": [
          {
            "type": "input_value",
            "name": "MESSAGE",
          },

          {
            "type": "input_value",
            "name": "PLAYER",
          },
        ],

        "previousStatement": "Action",
          "nextStatement": "Action",
        "colour": "#bf2f24",

        }

        );
  }
};

Blockly.Blocks['wait_func'] = {
  init: function() {
    this.jsonInit({
        "message0": "Wait %1 Seconds",
        "args0": [
          {
              "type": "input_value",
              "name": "WAIT_NUM",
              "check": "Number"
            },
        ],

        "previousStatement": "Action",
          "nextStatement": "Action",
        "colour": "#bf2f24",

        }

        );
  }
};

Blockly.Blocks['game_rendered'] = {
  init: function() {
    this.jsonInit({
        "message0": "On game rendered %1",
        "args0": [
          {
              "type": "input_statement",
              "name": "FUNCTION",
            },
        ],

        "colour": "#bf2f24",
        "previousStatement": "Action",
          "nextStatement": "Action",

        }

        );
  }
};

Blockly.Blocks['game_defineObject'] = {
  init: function() {
    this.jsonInit({
        "message0": "Define Object from string %1",
        "args0": [
          {
              "type": "input_value",
              "name": "OBJECT_STRING",
            },
        ],

        "colour": "#bf2f24",
        "output": "GameInstance",

        }

        );
  }
};

Blockly.Blocks['game_getDeltaTime'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get DeltaTime",
        "output": "Number",
        "colour": "#bf2f24",

        }

        );
  }
};

Blockly.Blocks['game_createExplosion'] = {
  init: function() {
      this.jsonInit({
          "message0": "Create Explosion at %1 with a radius of %2 with a force of %3 that %4 affects anchored parts %5 Each Affected Part: %6",
          "args0": [
            {
              "type": "input_value",
              "name": "Position",
              "check": "Vector3"
            },
            {
              "type": "input_value",
              "name": "Radius",
              "check": "Number"
            },
            {
              "type": "input_value",
              "name": "Force",
              "check": "Number"
            },
            {
              "type": "field_dropdown",
              "name": "AffectsAnchored",
              "options": [
                ["does", "true"],
                ["doesn't", "false"]
              ]
            },
            {
              "type": "input_dummy"
            },
            {
              "type": "input_statement",
              "name": "EachAffectedPart"
            }
          ],

          "colour": "#ffa136",
          "previousStatement": "Action",
            "nextStatement": "Action"

          }

          );
  }
};

Blockly.Lua['game_broadcastMessage'] = function(block) {
  let subString = Blockly.Lua.valueToCode(block, 'MESSAGE',Blockly.Lua.ORDER_NONE) || '\'\'';
  let code = "Chat:BroadcastMessage" + '(' + subString + ')\n';
  
  return code;
};

Blockly.Lua['game_getDeltaTime'] = function(block) {
  let code = "deltaTime";
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Lua['game_defineObject'] = function(block) {
  let subString = Blockly.Lua.valueToCode(block, 'OBJECT_STRING',Blockly.Lua.ORDER_NONE) || 'null';
  let code = subString.replace(/'/g,"");
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Lua['game_unicastMessage'] = function(block) {
  let subString = Blockly.Lua.valueToCode(block, 'MESSAGE',Blockly.Lua.ORDER_NONE) || '\'\'';
  let subString2 = Blockly.Lua.valueToCode(block, 'PLAYER',Blockly.Lua.ORDER_NONE) || '\'\'';
  let code = "Chat:UnicastMessage" + '(' + subString + ',' + subString2 + ')\n';
  
  return code;
};


Blockly.Lua['game_rendered'] = function(block) {
  let subString = Blockly.Lua.statementToCode(block, 'FUNCTION') || '';
  let code = "game.Rendered:Connect(function(deltaTime)\n" + subString +"\nend)\n";
  return code;
};


Blockly.Lua['wait_func'] = function(block) {
  let subString = Blockly.Lua.valueToCode(block, 'WAIT_NUM',Blockly.Lua.ORDER_NONE) || '0';
  let code = "wait(" + subString + ")\n";
  

  return code;
};

Blockly.Lua['game_createExplosion'] = function(block) {
  let substring = Blockly.Lua.statementToCode(block, 'EachAffectedPart') || ''
  let position = Blockly.Lua.valueToCode(block, 'Position', Blockly.Lua.ORDER_NONE)
  let radius = Blockly.Lua.valueToCode(block, 'Radius', Blockly.Lua.ORDER_NONE)
  let force = Blockly.Lua.valueToCode(block, 'Force', Blockly.Lua.ORDER_NONE)
  let affectsanchored = block.getFieldValue('AffectsAnchored')

  let code = 'game["Environment"]:CreateExplosion(' + position + ', ' + radius + ', ' + force + ', ' + affectsanchored + ', function()\n' + substring + 'end)\n';

  return code;
};
