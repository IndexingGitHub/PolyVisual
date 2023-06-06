Blockly.Blocks['JSON_parse'] = {
    init: function() {
        this.jsonInit({
            "message0": "Parse JSON %1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "JSON",
                },
            ],

            "colour": "#ffa136",
            "output": "GameInstance"

            }

            );
    }
};
  
    Blockly.Lua['JSON_parse'] = function(block) {
    let code = 'json.parse(' + Blockly.Lua.valueToCode(block, 'JSON', Blockly.Lua.ORDER_NONE) + ')';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['JSON_serialize'] = {
    init: function() {
        this.jsonInit({
            "message0": "Seralize JSON %1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "JSON"
                },
            ],

            "colour": "#ffa136",
            "output": "GameInstance"

            }

            );
    }
};
  
Blockly.Lua['JSON_serialize'] = function(block) {
    let code = 'json.serialize(' + Blockly.Lua.valueToCode(block, 'JSON', Blockly.Lua.ORDER_NONE) + ')';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['JSON_isNull'] = {
    init: function() {
        this.jsonInit({
            "message0": "Is JSON %1 Null",
            "args0": [
                {
                    "type": "input_value",
                    "name": "JSON",
                },
            ],

            "colour": "#ffa136",
            "output": "bool"

            }

            );
    }
};
  
    Blockly.Lua['JSON_isNull'] = function(block) {
    let code = 'json.isNull(' + Blockly.Lua.valueToCode(block, 'JSON', Blockly.Lua.ORDER_NONE) + ')';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};