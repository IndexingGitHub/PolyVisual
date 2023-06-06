Blockly.Blocks['player_playerCount'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Players count",

        "colour": "#ffa136",
        "output": "Number"

        }

        );
  }
};

Blockly.Lua['player_playerCount'] = function(block) {
  let code = '#game["Players"]:GetPlayers()';
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['player_getAllPlayers'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Players",

        "colour": "#ffa136",
        "output": "Array"

        }

        );
  }
};

Blockly.Lua['player_getAllPlayers'] = function(block) {
  let code = 'game["Players"]:GetPlayers()';
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['player_playerJoined'] = {
  init: function() {
    this.jsonInit({
        "message0": "On player joined %1",
        "args0": [
          {
              "type": "input_statement",
              "name": "FUNCTION",
            },
        ],

        "colour": "#ffa136",
        "previousStatement": "Action",
          "nextStatement": "Action",

        }

        );
  }
};

Blockly.Lua['player_playerJoined'] = function(block) {
  let subString = Blockly.Lua.statementToCode(block, 'FUNCTION') || '';
  let code = "game[\"Players\"].PlayerAdded:Connect(function(plr)\n" + subString +"end)\n";
  return code;
};

Blockly.Blocks['player_getJoinedPlr'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Joined Player",

        "colour": "#ffa136",
        "output": "GameInstance"

        }

        );
  }
};

Blockly.Lua['player_getJoinedPlr'] = function(block) {
  let code = 'plr';
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['player_getLocalPlr'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Local Player",

        "colour": "#ffa136",
        "output": "GameInstance"

        }

        );
  }
};

Blockly.Lua['player_getLocalPlr'] = function(block) {
  let code = 'game["Players"].LocalPlayer';
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['player_getPlayer'] = {
  init: function() {
    this.jsonInit({
      "message0": "Get Player %1",
      "args0": [
        {
          "type": "input_value",
          "name": "Name",
          "check": "String",
        },
      ],
      "colour": "#ffa136",
      "output": "GameInstance"
    })
  }
};

Blockly.Lua['player_getPlayer'] = function(block) {
  let code = 'game["Players"]:GetPlayer(' + Blockly.Lua.valueToCode(block, 'Name',Blockly.Lua.ORDER_NONE) + ')';
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['player_kickPlayer'] = {
  init: function() {
    this.jsonInit({
      "message0": "Kick Player %1 because %2",
      "args0": [
        {
          "type": "input_value",
          "name": "Player",
          "check": "GameInstance",
        },
        {
          "type": "input_value",
          "name": "Reason",
          "check": "String",
        },
      ],
      "colour": "#ffa136",
      "previousStatement": "Action",
      "nextStatement": "Action",
    })
  }
};

Blockly.Lua['player_kickPlayer'] = function(block) {
  let player = Blockly.Lua.valueToCode(block, 'Player', Blockly.Lua.ORDER_NONE) || '\'\'';
  let reason = Blockly.Lua.valueToCode(block, 'Reason', Blockly.Lua.ORDER_ATOMIC) || '\'\'';
  console.log(typeof(player));
  console.log(typeof(reason));
  let code = player + ':Kick(' + reason + ')\n';
  console.log(code, typeof(code), Blockly.Lua.ORDER_NONE);

  return code;
};