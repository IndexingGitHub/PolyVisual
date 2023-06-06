Blockly.Blocks['datastore_getDatastore'] = {
    init: function() {
        this.jsonInit({
            "message0": "Get Datastore %1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "Name",
                    "check": "String"
                },
            ],

            "colour": "#5c5c5c",
            "output": "GameInstance"

            }

            );
    }
};

Blockly.Lua['datastore_getDatastore'] = function(block) {
    let code = 'Datastore:GetDatastore(' + Blockly.Lua.valueToCode(block, 'Name',Blockly.Lua.ORDER_NONE) + ')';
  
    return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['datastore_getKey'] = {
    init: function() {
        this.jsonInit({
            "message0": "Get Key %1 of Datastore %2 Success: %3 Failure: %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "Key",
                    "check": "String"
                },
                {
                    "type": "input_value",
                    "name": "Datastore",
                    "check": "GameInstance"
                },
                {
                    "type": "input_statement",
                    "name": "FUNCTION"
                },
                {
                    "type": "input_statement",
                    "name": "ERR"
                }
            ],
            "previousStatement": "Action",
              "nextStatement": "Action",
            "colour": "#5c5c5c",

            }

            );
    }
};

Blockly.Lua['datastore_getKey'] = function(block) {
    let subString = Blockly.Lua.statementToCode(block, 'FUNCTION') || '';
    let subString2 = Blockly.Lua.statementToCode(block, 'ERR') || '';
    let datastore = Blockly.Lua.valueToCode(block, 'Datastore', Blockly.Lua.ORDER_NONE)
    let key = Blockly.Lua.valueToCode(block, 'Key', Blockly.Lua.ORDER_NONE)
    let code = "if " + datastore + ".Loaded == false then repeat(wait) until " + datastore + ".Loaded == true\n" + datastore + ":Get('" + key + "', function(value, success, error)\nif success then\n" + subString +"else\n" + subString2 +"end)\n";
    return code;
};

Blockly.Blocks['datastore_setKey'] = {
    init: function() {
        this.jsonInit({
            "message0": "Set Key %1 of Datastore %2 to %3 Success: %4 Failure: %5",
            "args0": [
                {
                    "type": "input_value",
                    "name": "Key",
                    "check": "String"
                },
                {
                    "type": "input_value",
                    "name": "Datastore",
                    "check": "GameInstance"
                },
                {
                    "type": "input_value",
                    "name": "NewValue",
                },
                {
                    "type": "input_statement",
                    "name": "FUNCTION"
                },
                {
                    "type": "input_statement",
                    "name": "ERR"
                }
            ],
            "previousStatement": "Action",
              "nextStatement": "Action",
            "colour": "#5c5c5c",

            }

            );
    }
};

Blockly.Lua['datastore_setKey'] = function(block) {
    let subString = Blockly.Lua.statementToCode(block, 'FUNCTION') || '';
    let subString2 = Blockly.Lua.statementToCode(block, 'ERR') || '';
    let datastore = Blockly.Lua.valueToCode(block, 'Datastore', Blockly.Lua.ORDER_NONE)
    let key = Blockly.Lua.valueToCode(block, 'Key', Blockly.Lua.ORDER_NONE)
    let newvalue = Blockly.Lua.valueToCode(block, 'NewValue', Blockly.Lua.ORDER_NONE)
    let code = "if " + datastore + ".Loaded == false then repeat(wait) until " + datastore + ".Loaded == true\n" + datastore + ":Set(" + key + ", " + newvalue + ", function(success, error)\nif success then\n" + subString +"else\n" + subString2 +"end)\n";
    return code;
};

Blockly.Blocks['datastore_removeKey'] = {
    init: function() {
        this.jsonInit({
            "message0": "Remove Key %1 of Datastore %2 Success: %3 Failure: %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "Key",
                    "check": "String"
                },
                {
                    "type": "input_value",
                    "name": "Datastore",
                    "check": "GameInstance"
                },
                {
                    "type": "input_statement",
                    "name": "FUNCTION"
                },
                {
                    "type": "input_statement",
                    "name": "ERR"
                }
            ],
            "previousStatement": "Action",
              "nextStatement": "Action",
            "colour": "#5c5c5c",

            }

            );
    }
};

Blockly.Lua['datastore_removeKey'] = function(block) {
    let subString = Blockly.Lua.statementToCode(block, 'FUNCTION') || '';
    let subString2 = Blockly.Lua.statementToCode(block, 'ERR') || '';
    let datastore = Blockly.Lua.valueToCode(block, 'Datastore', Blockly.Lua.ORDER_NONE)
    let key = Blockly.Lua.valueToCode(block, 'Key', Blockly.Lua.ORDER_NONE)
    let code = "if " + datastore + ".Loaded == false then repeat(wait) until " + datastore + ".Loaded == true\n" + datastore + ":Remove('" + key + "', function(success, error)\nif success then\n" + subString +"else\n" + subString2 +"end)\n";
    return code;
};

Blockly.Blocks['datastore_getRetrievedValue'] = {
    init: function() {
        this.jsonInit({
            "message0": "Get Retrieved Value",

            "output": "any",
            "colour": "#5c5c5c",

            }

            );
    }
};

Blockly.Lua['datastore_getRetrievedValue'] = function(block) {
    let code = 'value';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};