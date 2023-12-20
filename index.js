const fileInput = document.getElementById("fileInput");
const saveFile = document.getElementById("saveFile");
const exportJSON = document.getElementById("exportJSON");
const editing = document.getElementById("editing");

let open_file = null;

let SCENE_LIST;
loadJSON("https://raw.githubusercontent.com/CharlesGameDev/RPGData/main/scenes.json", onLoadScenes)

let values = {
    // "_language_id": "Language > dropdown > English,IDK",
    "_is_button_simple": "Simple Controls > bool",
    "_is_skip_target_select": "Skip Target Select > bool",
    "_is_auto_dash": "Auto Dash > bool",
    "_respawn_floor_name": "Respawn Room > scenelist",
    "_is_sound_original": "Original Sound > bool",
    "_coin": "Coins > integer",
    "_frog_coin": "Frog Coins > integer",
    "_wine_coin": "Wine Coins > integer",
    "_current_flower_point": "Flower Points > integer",
    "_max_flower_point": "Max Flower Points > integer",
    "_star_pieces": "Star Pieces > integer",
    "_play_time": "Play Time (Seconds) > integer",
    "_party_number": "Party Size > integer",
    "_store_tmp_coin": "Store TMP Coins > integer",
    "_chapter_number": "Chapter Number > integer",
    "_save_date": "Save Date > string",
    "_save_date_second": "Save Date (Seconds) > float",
    "_just_combo_count": "Just Combo Count > integer",
    "_just_gauge": "Just Gauge > integer",
    "_thumbnail_id": "Thumbnail ID > integer",
    "_save_point_id": "Save Point ID > integer",
    "_is_respawn_xyz_coordinate": "Respawn XYZ > bool",
    "_exit_data": "Exit Data > integer",
    "_last_opend_books_monster_id": "Last Opened Journal ID > integer",
    "_": "Sound Player > header",
    "_sound_player_shuffle_kind_id": "Sound Player Shuffle Kind > integer",
    "_sound_player_repeat_kind_id": "Sound Player Repeat Kind > integer",
    "_is_sound_original_at_sound_player": "Sound Player Original Sound > bool",
    "_sound_player_last_played_id": "Sound Player Last Played > integer",
    "__": "High Scores > header",
    "_wine_record_coin": "Wine Record Coin > integer",
    "_beat_the_mole_high_score": "Beat the Mole High Score > float",
    "_kabuto_high_score": "Kabuto High Score > float",
    "_kabuto_catched_high_score": "Kabuto Caught High Score > float",
    "_climb_wall_high_score": "Climb Wall High Score > float",
    "_rollercoaster_high_score": "Rollercoaster High Score > float",
    "_crown_big_bro_game_score": "Crown Big Bro Score > float",
    "_crown_big_bro_game_score_max": "Crown Big Bro Max Score > float",
    "_crown_small_bro_game_score": "Crown Small Bro Score > float",
    "_remember_game_score": "Remember Game Score > float",
    "_jump_skill_counter": "Jump Skill Counter > float",
    "_super_jump_high_score": "Super Jump High Score > float",
    "___": "Unknown Data > header",
    "_map_name": "Map Name > string",
    "_is_saved_at_battle_end": "Saved at End of Battle > bool",
    "_max_damage": "Max Damage > integer",
    "_max_combo": "Max Combo > integer",
    "_action_cmd_success_num": "Action Command Success Number > integer",
    "_lucky_jewel_remain_num": "Lucky Jewel Remain Number > integer",
    "_ducati_item_point": "Ducati Item Point > integer",
    "_yoshi_cookie_stock": "Yoshi Cookie Stock > integer",
    "_yoshi_cookie_given_counter": "Yoshi Cookie Given Counter > integer",
    "_suite_room_stay_num": "Suite Room Stay Number > integer",
    "_suite_room_step_on_day": "Suite Room Step on Day > integer",
    "_sheep_counter": "Sheep Counter > integer",
    "_suite_room_step_on_day": "Suite Room Step on Day > integer",
    "_kuribo_tataki_rewards_state": "Kuribo Tataki Rewards Stage > integer",
    "_booster_slope_flower": "Booster Slope Flower > integer",
    "_kabuto_catched_golden": "Kabuto Caught Golden > integer",
    "_kabuto_catched_male": "Kabuto Caught Male > integer",
    "_kabuto_catched_female": "Kabuto Caught Female > integer",
    "_hidden_treasure_counter": "Hidden Treasure Count > integer",
    "_add_boss_mininum_defeated_turn": "Add Boss Minimum Defeated Turn > integer",
}

function onLoadScenes(scenes) {
    SCENE_LIST = scenes;

    Object.keys(values).forEach(key => {
        const element = document.createElement("div");
    
        const vals = values[key].split(" > ");
        const val_name = vals[0];
        const val_type = vals[1];
    
        if (val_type == "header") {
            element.appendChild(document.createElement("br"));
            header = document.createElement("label");
            header.innerText = `\n${val_name}\n\n`;
            header.style.fontSize = "xx-large";
            header.style.fontWeight = "bold";
    
            element.appendChild(header);
            editing.appendChild(element);
            return;
        }
    
        const label = document.createElement("label");
        label.innerText = `${val_name}: `;
        label.setAttribute("for", key);
        let input = null;
    
        if (val_type == "dropdown") {
            input = document.createElement("select");
            const values = vals[2].split(",");
            values.forEach(value => {
                const option = document.createElement("option");
                option.innerText = value;
    
                input.appendChild(option);
            });
    
            input.onchange = () => {
                set_value(input, input.selectedIndex);
            };
        } else if (val_type == "scenelist") {
            input = document.createElement("select");
            const values = Object.values(SCENE_LIST);
            values.forEach(value => {
                const option = document.createElement("option");
                option.innerText = value;
    
                input.appendChild(option);
            });
    
            input.onchange = () => {
                set_value(input);
            };
        } else {
            input = document.createElement("input");
            switch (val_type) {
                case "integer":
                    input.type = "number";
                    input.pattern = "integer";
                    break;
                case "float":
                    input.type = "number";
                    break;
                case "bool":
                    input.type = "checkbox";
                    break;
                case "string":
                    input.type = "text";
                    break;
            }
        
            input.addEventListener("input", () => {
                set_value(input);
            });
        }
    
        input.id = key;
        element.appendChild(label);
        element.appendChild(input);
    
        editing.appendChild(element);
    })
}

function submit_file() {
    if (fileInput.files.length == 0) return;

    let fr = new FileReader();
    fr.onload = function () {
        res = fr.result.replaceAll("\0", "");
        json = JSON.parse(res);
        handle_file_json(json);
    }

    filename = fileInput.files[0].name;
    text = fr.readAsText(fileInput.files[0]);
}

function save_file() {
    if (open_file == null) return;

    str = JSON.stringify(open_file).replace(/(.{1})/g, "$1\0");
    download(str, filename, "text/text");

    return;
}

function save_file_json() {
    if (open_file == null) return;

    str = JSON.stringify(open_file, null, 2);
    download(str, filename, "application/json");

    return;
}

function handle_file_json(json) {
    open_file = json;
    editing.style.visibility = "visible";
    saveFile.style.visibility = "visible";
    exportJSON.style.visibility = "visible";

    Object.keys(open_file).forEach(key => {
        element = document.getElementById(key);
        if (element == null) return;

        let value = open_file[key];
        if (element.id == "_respawn_floor_name") {
            const keys = Object.keys(SCENE_LIST);
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] == value) {
                    element.selectedIndex = i;
                    break;
                }
            }
            return;
        }
        element.checked = value;
        element.value = value;
        element.selectedIndex = value;
    })
}

function set_value(element, custom_set_value = null) {
    if (open_file == null) return;

    if (custom_set_value != null) {
        open_file[element.id] = custom_set_value;
        return;
    }

    if (element.type == "number")
        if (element.pattern == "integer")
            open_file[element.id] = Number.parseInt(element.value);
        else
            open_file[element.id] = Number.parseFloat(element.value);
    else if (element.type == "checkbox")
        open_file[element.id] = element.checked
    else if (element.nodename = "select") {
        if (element.id == "_respawn_floor_name") {
            key = Object.keys(SCENE_LIST)[element.selectedIndex];
            open_file[element.id] = key;

            return;
        }
    }
    else
        open_file[element.id] = element.value;

    element.value = open_file[element.id];
}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function loadJSON(path, success) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            success(JSON.parse(xhr.responseText));
        }
        else {
            console.error(xhr);
        }
      }
    };
    xhr.open('GET', path, true);
    xhr.send();
}