Blockly.Blocks['HTTP_get'] = {
    init: function() {
        this.jsonInit({
            "message0": "HTTP GET %1 Success: %2 Failure: %3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "URL"
                },
                {
                    "type": "input_statement",
                    "name": "SUCCESS"
                },
                {
                    "type": "input_statement",
                    "name": "FAILURE"
                },
            ],

            "colour": "#5577ee",
            "previousStatement": "Action",
              "nextStatement": "Action",

            }

            );
    }
};

Blockly.Lua['HTTP_get'] = function(block) {
    let substring = Blockly.Lua.statementToCode(block, 'SUCCESS') || '';
    let substring2 = Blockly.Lua.statementToCode(block, 'FAILURE') || '';
    let URL = Blockly.Lua.valueToCode(block, 'URL', Blockly.Lua.ORDER_NONE)
    var code = 'HTTP:Get("' + URL + '", function(data, error, errmsg)\nif not error then\n' + substring + 'else\n' + substring2 + 'end\nend)\n';

    return code;
};

Blockly.Blocks['HTTP_post'] = {
    init: function() {
        this.jsonInit({
            "message0": "HTTP POST %1 with Parameters %2 Success: %3 Failure: %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "URL"
                },
                {
                    "type": "input_value",
                    "name": "PARAMS"
                },
                {
                    "type": "input_statement",
                    "name": "SUCCESS"
                },
                {
                    "type": "input_statement",
                    "name": "FAILURE"
                },
            ],

            "colour": "#5577ee",
            "previousStatement": "Action",
              "nextStatement": "Action",

            }

            );
    }
};

Blockly.Lua['HTTP_post'] = function(block) {
    let substring = Blockly.Lua.statementToCode(block, 'SUCCESS') || '';
    let substring2 = Blockly.Lua.statementToCode(block, 'FAILURE') || '';
    let URL = Blockly.Lua.valueToCode(block, 'URL', Blockly.Lua.ORDER_NONE)
    let PARAMS = Blockly.Lua.valueToCode(block, 'PARAMS', Blockly.Lua.ORDER_NONE)
    var code = 'HTTP:Post("' + URL + '", "' + PARAMS + '", function(data, error, errmsg)\nif not error then\n' + substring + 'else\n' + substring2 + 'end\nend)\n';

    return code;
};

Blockly.Blocks['HTTP_delete'] = {
    init: function() {
        this.jsonInit({
            "message0": "HTTP DELETE %1 with Parameters %2 Success: %3 Failure: %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "URL"
                },
                {
                    "type": "input_value",
                    "name": "PARAMS"
                },
                {
                    "type": "input_statement",
                    "name": "SUCCESS"
                },
                {
                    "type": "input_statement",
                    "name": "FAILURE"
                },
            ],

            "colour": "#5577ee",
            "previousStatement": "Action",
              "nextStatement": "Action",

            }

            );
    }
};

Blockly.Lua['HTTP_delete'] = function(block) {
    let substring = Blockly.Lua.statementToCode(block, 'SUCCESS') || '';
    let substring2 = Blockly.Lua.statementToCode(block, 'FAILURE') || '';
    let URL = Blockly.Lua.valueToCode(block, 'URL', Blockly.Lua.ORDER_NONE)
    let PARAMS = Blockly.Lua.valueToCode(block, 'PARAMS', Blockly.Lua.ORDER_NONE)
    var code = 'HTTP:Delete("' + URL + '", "' + PARAMS + '", function(data, error, errmsg)\nif not error then\n' + substring + 'else\n' + substring2 + 'end\nend)\n';

    return code;
};

Blockly.Blocks['HTTP_put'] = {
    init: function() {
        this.jsonInit({
            "message0": "HTTP PUT %1 with Parameters %2 Success: %3 Failure: %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "URL"
                },
                {
                    "type": "input_value",
                    "name": "PARAMS"
                },
                {
                    "type": "input_statement",
                    "name": "SUCCESS"
                },
                {
                    "type": "input_statement",
                    "name": "FAILURE"
                },
            ],

            "colour": "#5577ee",
            "previousStatement": "Action",
              "nextStatement": "Action",

            }

            );
    }
};

Blockly.Lua['HTTP_put'] = function(block) {
    let substring = Blockly.Lua.statementToCode(block, 'SUCCESS') || '';
    let substring2 = Blockly.Lua.statementToCode(block, 'FAILURE') || '';
    let URL = Blockly.Lua.valueToCode(block, 'URL', Blockly.Lua.ORDER_NONE)
    let PARAMS = Blockly.Lua.valueToCode(block, 'PARAMS', Blockly.Lua.ORDER_NONE)
    var code = 'HTTP:Put("' + URL + '", "' + PARAMS + '", function(data, error, errmsg)\nif not error then\n' + substring + 'else\n' + substring2 + 'end\nend)\n';

    return code;
};

Blockly.Blocks['HTTP_getData'] = {
    init: function() {
        this.jsonInit({
            "message0": "Get HTTP Result",

            "colour": "#5577ee",
            "output": "HTTP"

            }

            );
    }
};

Blockly.Lua['HTTP_getData'] = function(block) {
    let code = 'data';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};