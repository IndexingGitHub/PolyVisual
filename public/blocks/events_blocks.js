Blockly.Blocks['event_ontouched'] = {
  init: function() {
    this.jsonInit({
        "message0": "On %2 has been Touched %1",
        "args0": [
          {
              "type": "input_statement",
              "name": "FUNCTION",
            },

            {
              "type": "input_value",
              "name": "OBJECT",
            },
        ],

        "colour": "#19e642",
        "previousStatement": "Action",
        "nextStatement": "Action",

        }

        );
  }
};

Blockly.Lua['event_ontouched'] = function(block) {
  let subString = Blockly.Lua.statementToCode(block, 'FUNCTION') || '';
  let subString2 = Blockly.Lua.valueToCode(block, 'OBJECT',Blockly.Lua.ORDER_NONE) || 'null';
  let code = subString2 + ".Touched:Connect(function(hit)\n" + subString +"\nend)\n";
  return code;
};

Blockly.Blocks['event_getHit'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Hit",
        "output": "GameInstance",
        "colour": "#19c23b",

        }

        );
  }
};

Blockly.Lua['event_getHit'] = function(block) {
  let code = "hit";
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['event_onChatMsg'] = {
  init: function() {
    this.jsonInit({
      "message0": "When %1 Sends a Chat Message %2",
      "args0": [
        {
          "type": "input_value",
          "name": "Player",
        },
        {
          "type": "input_statement",
          "name": "FUNCTION"
        },
      ],

      "colour": "#19e642",
      "previousStatement": "Action",
        "nextStatement": "Action",

      }

      );
  }
};

Blockly.Lua['event_onChatMsg'] = function(block) {
  let substring = Blockly.Lua.statementToCode(block, 'FUNCTION') || '';
  let player = Blockly.Lua.valueToCode(block, 'Player', Blockly.Lua.ORDER_NONE)
  let code = player + '.Chatted:Connect(function (msg)\n' + substring + 'end)\n';

  return code;
};

Blockly.Blocks['event_getMsg'] = {
  init: function() {
    this.jsonInit({
      "message0": "Get Sent Message",

      "colour": "#19e642",
      "output": "string"

      }

      );
  }
};

Blockly.Lua['event_getMsg'] = function(block) {
  let code = 'msg';

  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['event_onInputDown'] = {
  init: function() {
    this.jsonInit({
        "message0": "On key down %1",
        "args0": [
          {
              "type": "input_statement",
              "name": "FUNCTION",
            },
        ],

        "colour": "#19e642",
        "previousStatement": "Action",
        "nextStatement": "Action",

        }

        );
  }
};

Blockly.Lua['event_onInputDown'] = function(block) {
  let subString = Blockly.Lua.statementToCode(block, 'FUNCTION') || '';
  let code = "Input.KeyDown:Connect(function(key)\n" + subString +"\nend)\n";
  return code;
};

Blockly.Blocks['event_onInputUp'] = {
  init: function() {
    this.jsonInit({
        "message0": "On key up %1",
        "args0": [
          {
              "type": "input_statement",
              "name": "FUNCTION",
            },
        ],

        "colour": "#19e642",
        "previousStatement": "Action",
        "nextStatement": "Action",

        }

        );
  }
};

Blockly.Lua['event_onInputUp'] = function(block) {
  let subString = Blockly.Lua.statementToCode(block, 'FUNCTION') || '';
  let code = "InputService.KeyUp:Connect(function(key)\n" + subString +"\nend)\n";
  return code;
};


Blockly.Blocks['event_getKey'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Key",
        "output": "String",
        "colour": "#19c23b",

        }

        );
  }
};

Blockly.Lua['event_getKey'] = function(block) {
  let code = "key";
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};
