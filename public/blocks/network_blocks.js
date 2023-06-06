Blockly.Blocks['network_newNetMsg'] = {
    init: function() {
        this.jsonInit({
            "message0": "Create NetMessage",

            "colour": "#ef233c",
            "output": "GameInstance"

            }

            );
    }
};

Blockly.Lua['network_newNetMsg'] = function(block) {
    let code = 'NetMessage.New()';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['network_add'] = {
    init: function() {
        this.jsonInit({
            "message0": "Add key named %1 with a value of %2 with a type of %3 %4 to NetMessage %5",
            "args0": [
                {
                    "type": "input_value",
                    "name": "Key"
                },
                {
                    "type": "input_value",
                    "name": "Value",
                },
                {
                    "type": "field_dropdown",
                    "name": "Expected",
                    "options": [
                        ["String", "String"],
                        ["Int", "Int"],
                        ["Number", "Number"],
                        ["Bool", "Bool"],
                        ["Vector2", "Vector2"],
                        ["Vector3", "Vector3"],
                        ["Color", "Color"],
                        ["Instance", "Instance"]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_value",
                    "name": "Msg"
                },
            ],

            "inputsInline": false,
            "colour": "#ef233c",
            "previousStatement": "Action",
              "nextStatement": "Action",

            }

            );
    }
};

Blockly.Lua['network_add'] = function(block) {
    let key = Blockly.Lua.valueToCode(block, 'Key', Blockly.Lua.ORDER_NONE)
    let msg = Blockly.Lua.valueToCode(block, 'Msg', Blockly.Lua.ORDER_NONE)
    let expected = block.getFieldValue('Expected')
    let value = Blockly.Lua.valueToCode(block, 'Value', Blockly.Lua.ORDER_NONE)
    let code = msg + '.Add' + expected + '(' + key + ', ' + value + ')';

    return code;
};

Blockly.Blocks['network_get'] = {
    init: function() {
        this.jsonInit({
            "message0": "Get key named %1 with a type of %2 %3 of NetMessage %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "Key"
                },
                {
                    "type": "field_dropdown",
                    "name": "Expected",
                    "options": [
                        ["String", "String"],
                        ["Int", "Int"],
                        ["Number", "Number"],
                        ["Bool", "Bool"],
                        ["Vector2", "Vector2"],
                        ["Vector3", "Vector3"],
                        ["Color", "Color"],
                        ["Instance", "Instance"]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_value",
                    "name": "Msg"
                },
            ],

            "inputsInline": false,
            "colour": "#ef233c",
            "Output": "any"

            }

            );
    }
};

Blockly.Lua['network_get'] = function(block) {
    let key = Blockly.Lua.valueToCode(block, 'Key', Blockly.Lua.ORDER_NONE)
    let msg = Blockly.Lua.valueToCode(block, 'Msg', Blockly.Lua.ORDER_NONE)
    let expected = block.getFieldValue('Expected')
    let code = msg + '.Get' + expected + '(' + key + ')';

    return code;
};