Blockly.Blocks['global_game'] = {
    init: function() {
        this.jsonInit({
            "message0": "game",

            "colour": "#000",
            "output": "GameInstance"

            }

            );
    }
};

Blockly.Lua['global_game'] = function(block) {
    let code = 'game';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['global_Environment'] = {
    init: function() {
        this.jsonInit({
            "message0": "Environment",

            "colour": "#000",
            "output": "GameInstance"

            }

            );
    }
};

Blockly.Lua['global_Environment'] = function(block) {
    let code = 'game["Environment"]';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['global_Hidden'] = {
    init: function() {
        this.jsonInit({
            "message0": "Hidden",

            "colour": "#000",
            "output": "GameInstance"

            }

            );
    }
};

Blockly.Lua['global_Hidden'] = function(block) {
    let code = 'game["Hidden"]';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['global_Lighting'] = {
    init: function() {
        this.jsonInit({
            "message0": "Lighting",

            "colour": "#000",
            "output": "GameInstance"

            }

            );
    }
};

Blockly.Lua['global_Lighting'] = function(block) {
    let code = 'game["Lighting"]';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['global_ScriptService'] = {
    init: function() {
        this.jsonInit({
            "message0": "ScriptService",

            "colour": "#000",
            "output": "GameInstance"

            }

            );
    }
};

Blockly.Lua['global_ScriptService'] = function(block) {
    let code = 'game["ScriptService"]';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['global_PlayerDefaults'] = {
    init: function() {
        this.jsonInit({
            "message0": "PlayerDefaults",

            "colour": "#000",
            "output": "GameInstance"

            }

            );
    }
};

Blockly.Lua['global_PlayerDefaults'] = function(block) {
    let code = 'game["PlayerDefaults"]';

    return [code, Blockly.Lua.ORDER_ADDITIVE];
};