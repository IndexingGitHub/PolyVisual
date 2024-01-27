Blockly.Blocks['advanced_nativeLua'] = {
  init: function() {
    this.jsonInit({
        "message0": "Native Lua %1",

        "args0": [
          {
              "type": "input_value",
              "name": "NATIVE_CODE",
              "check": "String"
            },
        ],

        "previousStatement": "Action",
              "nextStatement": "Action",
        "colour": "#4f4f4f",

        }

        );
  }
};

Blockly.Lua['advanced_nativeLua'] = function(block) {
  let subString = Blockly.Lua.valueToCode(block, 'NATIVE_CODE',Blockly.Lua.ORDER_NONE) || '\'\'';

  let code = subString.replace(/'/g,"") + "\n";
  
  return code;
};

Blockly.Blocks['advanced_nativeLuaAddon'] = {
  init: function() {
    this.jsonInit({
        "message0": "Native Lua Addon %1",

        "args0": [
          {
              "type": "input_value",
              "name": "NATIVE_CODE",
              "check": "String"
            },
        ],

        "output": "string",
        "colour": "#4f4f4f",

        }

        );
  }
};

Blockly.Lua['advanced_nativeLuaAddon'] = function(block) {
  let subString = Blockly.Lua.valueToCode(block, 'NATIVE_CODE',Blockly.Lua.ORDER_NONE) || '\'\'';

  let code = subString.replace(/'/g,"") + "\n";
  
  return code;
};

Blockly.Blocks['advanced_comment'] = {
  init: function() {
    this.jsonInit({
      "message0": "# %1",
      "args0": [
        {
          "type": "input_value",
          "name": "Text"
        }
      ],

      "colour": "#4f4f4f",
      "previousStatement": "Action",
        "nextStatement": "Action",

      }

      );
  }
};

Blockly.Lua['advanced_comment'] = function(block) {
  let code = '-- ' + Blockly.Lua.valueToCode(block, 'Text', Blockly.Lua.ORDER_NONE).replace(/'/g, "") + '\n';

  return code;
};
