Blockly.Blocks['tween_tween'] = {
    init: function() {
        this.jsonInit({
            "message0": "Tween %1 with %2 from %3 to %4 in %5 second(s) %6 Every Step: %7 When Finished: %8",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "Type",
                    "options": [
                        ["Color", "Color"],
                        ["Number", "Number"],
                        ["Position", "Position"],
                        ["Rotation", "Rotation"],
                        ["Size", "Size"],
                        ["Vector2", "Vector2"],
                        ["Vector3", "Vector3"]
                    ]
                },
                {
                    "type": "field_dropdown",
                    "name": "Style",
                    "options": [
                        ["easeInBack", "easeInBack"],
                        ["easeInBounce", "easeInBounce"],
                        ["easeInCirc", "easeInCirc"],
                        ["easeInCubic", "easeInCubic"],
                        ["easeInElastic", "easeInElastic"],
                        ["easeInExpo", "easeInExpo"],
                        ["easeInOutBack", "easeInOutBack"],
                        ["easeInOutBounce", "easeInOutBounce"],
                        ["easeInOutCirc", "easeInOutCirc"],
                        ["easeInOutCubic", "easeInOutCubic"],
                        ["easeInOutElastic", "easeInOutElastic"],
                        ["easeInOutExpo", "easeInOutExpo"],
                        ["easeInOutQuad", "easeInOutQuad"],
                        ["easeInOutQuart", "easeInOutQuart"],
                        ["easeInOutQuint", "easeInOutQuint"],
                        ["easeInOutSine", "easeInOutSine"],
                        ["easeInQuad", "easeInQuad"],
                        ["easeInQuart", "easeInQuart"],
                        ["easeInQuint", "easeInQuint"],
                        ["easeInSine", "easeInSine"],
                        ["easeOutBack", "easeOutBack"],
                        ["easeOutBounce", "easeOutBounce"],
                        ["easeOutCirc", "easeOutCirc"],
                        ["easeOutCubic", "easeOutCubic"],
                        ["easeOutElastic", "easeOutElastic"],
                        ["easeOutExpo", "easeOutExpo"],
                        ["easeOutQuad", "easeOutQuad"],
                        ["easeOutQuart", "easeOutQuart"],
                        ["easeOutQuint", "easeOutQuint"],
                        ["easeOutSine", "easeOutSine"],
                        ["linear", "linear"],
                        ["punch", "punch"]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "StartValue",
                },
                {
                    "type": "input_value",
                    "name": "EndValue",
                },
                {
                    "type": "field_number",
                    "name": "Time",
                    "value": 1
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "EVERYSTEP",
                },
                {
                    "type": "input_statement",
                    "name": "FINISHED",
                },
            ],

            "colour": "#3a0ca3",
            "previousStatement": "Action",
              "nextStatement": "Action",

            }

            );
    }
};

Blockly.Lua['tween_tween'] = function(block) {
    let substring = Blockly.Lua.statementToCode(block, 'EVERYSTEP') || '';
    let substring2 = Blockly.Lua.statementToCode(block, 'FINISHED') || '';
    let type = block.getFieldValue('Type')
    let startvalue = Blockly.Lua.valueToCode(block, 'StartValue', Blockly.Lua.ORDER_NONE)
    let endvalue = Blockly.Lua.valueToCode(block, 'EndValue', Blockly.Lua.ORDER_NONE)
    let time = block.getFieldValue('Time')
    let style = block.getFieldValue('Style')
    let code = 'Tween:Tween' + type + '(' + startvalue + ', ' + endvalue + ', ' + time + ', function(val)\n' + substring + 'end, TweenType.' + style + ', function()\n' + substring2 + 'end)';

    return code;
};

Blockly.Blocks['tween_getCurrentValue'] = {
    init: function() {
        this.jsonInit({
            "message0": "Get Current Tween Value",

            "colour": "#3a0ca3",
            "output": "GameInstance"

            }

            );
    }
};

Blockly.Lua['tween_getCurrentValue'] = function(block) {
    let code = 'val';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};