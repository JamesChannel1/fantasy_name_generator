// human
var human_male_first_name0 = Array("Aragorn", "Ramsay", "Orion", "Ronald", "Gregory", "Philipe", "Alfred", "Broderick", "Chadwick", "Oscar", "Willard", "Boromir", "Benedict", "Vance", "Theon", "Roy", "Leon", "Farald");
var human_male_last_name0 = Array("Lawless", "Morais", "Ogden", "Acker", "Bonneville", "Deluca", "Whitelock", "Popplewell", "Ives", "Dwyer", "Bolton", "Woodsman", "Forest", "Mountain", "Smith", "Black", "Fernsby", "Culpepper", "Fernard", "Nuttal");

var human_female_first_name0 = Array("Elena", "Catherine", "Selene", "Julianna", "Demelza", "Edith", "Elizabeth", "Eleanor", "Agnes", "Annabel", "Mabel", "Aurelia", "Bertha", "Cecelia", "Delia", "Drusilla", "Edna", "Ernestine");
var human_female_last_name0 = Array("Lawless", "Morais", "Ogden", "Acker", "Bonneville", "Deluca", "Whitelock", "Popplewell", "Ives", "Dwyer", "Bolton", "Woodsman", "Forest", "Mountain", "Smith", "Black", "Fernsby", "Culpepper", "Fernard", "Nuttal");



// elf
var elf_male_first_name0 = Array("Elron", "Senar", "Brychan", "Elisedd", "Grifud", "Iudris", "Bhalnar", "Harieth", "Malian", "Fylian", "Kedren", "Than'ra", "Nilanaes", "Andalas", "Nemron", "Faydron", "Sariel", "Indaar");
var elf_male_last_name0 = Array("Whisperwind", "Evenshade", "Shadowsong", "Wolfrunner", "Swiftarrow", "Feathermoon", "Bearmantle", "Wolfmantle", "Fallowmere", "Earthwalker", "Tarondis", "Staghelm", "Starseeker", "Felsong", "Moonwarden", "Sunseeker", "Summerstar", "Oakwalker", "Lightfoot", "Shadewatcher");

var elf_female_first_name0 = Array("Cordana", "Keina", "Raene", "Su'ura", "Nevarial", "Meridia", "Ayrae", "Marrii", "Astasina", "Uylora", "Lalara", "Saria", "Nilia", "Aseria", "Ryalynn", "Visnara", "Lylaeth", "Nytasia");
var elf_female_last_name0 = Array("Whisperwind", "Evenshade", "Shadowsong", "Wolfrunner", "Swiftarrow", "Feathermoon", "Bearmantle", "Wolfmantle", "Fallowmere", "Earthwalker", "Tarondis", "Staghelm", "Starseeker", "Felsong", "Moonwarden", "Sunseeker", "Summerstar", "Oakwalker", "Lightfoot", "Shadewatcher");



// orc
var orc_male_first_name0 = Array("Romekk", "Orzerg", "Samaz", "Grevuglo", "Ilo", "Trul", "Drak", "Brok", "Mugdul", "Morbash", "Makhel", "Bog", "Orok", "Bashag", "Aguk", "Urug", "Shomdud", "Atulg", "Zurgug", "Urghat", "Zalthu", "Burul");
var orc_male_last_name0 = Array("Boldkill", "Bronzefire", "Stormfeast", "Deepmight", "Hellforce", "Gorefall", "Stonesword", "Brightblood", "Bonewind", "Rockrush", "Goredrums", "Grimrunner", "Brokenbattle", "Saurhammer", "Madtale", "Wildmane", "Blindsteel", "Roughskin", "Stoneshift", "Rockmight");

var orc_female_first_name0 = Array("Matdi", "Ruhla", "Mehdum", "Grema", "Ori", "Zozlerne", "Bulfim", "Sharn", "Borba", "Batul", "Atub", "Rogbut", "Mogak", "Shadbak", "Morn", "Glasha", "Dura", "Ugak", "Lash", "Shel", "Bula");
var orc_female_last_name0 = Array("Boldkill", "Bronzefire", "Stormfeast", "Deepmight", "Hellforce", "Gorefall", "Stonesword", "Brightblood", "Bonewind", "Rockrush", "Goredrums", "Grimrunner", "Brokenbattle", "Saurhammer", "Madtale", "Wildmane", "Blindsteel", "Roughskin", "Stoneshift", "Rockmight");



// dwarf
var dwarf_male_first_name0 = Array("Krignal", "Bhandak", "Dramdugs", "Udin", "Moriag", "Molorn", "Grenmund", "Gimnur", "Hjoldir", "Bramrum", "Emrigg", "Ebris", "Armrim", "Modimus", "Aegrim", "Madoran", "Muradin");
var dwarf_male_last_name0 = Array("Marblepeak", "Snowward", "Longbraid", "Halfhelm", "Quicktale", "Broadheart", "Starkmight", "Higharm", "Barleyfist", "Evenkind", "Dimbottom", "Braveforge", "Halfbattle", "Redbeard", "Goldbeard", "Blackshield", "Evenaxe", "Longhonor", "Frozenmantle", "Bronzefist");

var dwarf_female_first_name0 = Array("Moga", "Byra", "Emlilu", "Demwess", "Regla", "Besua", "Durgna", "Girna", "Gloma", "Ana", "Dida", "Dova", "Meva", "Tholva", "Gadira", "Ginana", "Arthira", "Bala", "Raga", "Avna");
var dwarf_female_last_name0 = Array("Marblepeak", "Snowward", "Longbraid", "Halfhelm", "Quicktale", "Broadheart", "Starkmight", "Higharm", "Barleyfist", "Evenkind", "Dimbottom", "Braveforge", "Halfbattle", "Redbeard", "Goldbeard", "Blackshield", "Evenaxe", "Longhonor", "Frozenmantle", "Bronzefist");



// human
function btnfun0() {
  var joining_human_male00 = human_male_first_name0[Math.floor(Math.random() * human_male_first_name0.length)];
  var joining_human_male01 = human_male_last_name0[Math.floor(Math.random() * human_male_last_name0.length)];
  document.getElementById('output00').value = joining_human_male00 + joining_human_male01;
}

function btnfun1() {
  var joining_human_female00 = human_female_first_name0[Math.floor(Math.random() * human_female_first_name0.length)];
  var joining_human_female01 = human_female_last_name0[Math.floor(Math.random() * human_female_last_name0.length)];
  document.getElementById('output01').value = joining_human_female00 + joining_human_female01;
}



// elf
function btnfun2() {
  var joining_elf_male00 = elf_male_first_name0[Math.floor(Math.random() * elf_male_first_name0.length)];
  var joining_elf_male01 = elf_male_last_name0[Math.floor(Math.random() * elf_male_last_name0.length)];
  document.getElementById('output02').value = joining_elf_male00 + joining_elf_male01;
}

function btnfun3() {
  var joining_elf_female00 = elf_female_first_name0[Math.floor(Math.random() * elf_female_first_name0.length)];
  var joining_elf_female01 = elf_female_last_name0[Math.floor(Math.random() * elf_female_last_name0.length)];
  document.getElementById('output03').value = joining_elf_female00 + joining_elf_female01;
}



// orc
function btnfun4() {
  var joining_orc_male00 = orc_male_first_name0[Math.floor(Math.random() * orc_male_first_name0.length)];
  var joining_orc_male01 = orc_male_last_name0[Math.floor(Math.random() * orc_male_last_name0.length)];
  document.getElementById('output04').value = joining_orc_male00 + joining_orc_male01;
}

function btnfun5() {
  var joining_orc_female00 = orc_female_first_name0[Math.floor(Math.random() * orc_female_first_name0.length)];
  var joining_orc_female01 = orc_female_last_name0[Math.floor(Math.random() * orc_female_last_name0.length)];
  document.getElementById('output05').value = joining_orc_female00 + joining_orc_female01;
}



// dwarf
function btnfun6() {
  var joining_dwarf_male00 = dwarf_male_first_name0[Math.floor(Math.random() * dwarf_male_first_name0.length)];
  var joining_dwarf_male01 = dwarf_male_last_name0[Math.floor(Math.random() * dwarf_male_last_name0.length)];
  document.getElementById('output06').value = joining_dwarf_male00 + joining_dwarf_male01;
}

function btnfun7() {
  var joining_dwarf_female00 = dwarf_female_first_name0[Math.floor(Math.random() * dwarf_female_first_name0.length)];
  var joining_dwarf_female01 = dwarf_female_last_name0[Math.floor(Math.random() * dwarf_female_last_name0.length)];
  document.getElementById('output07').value = joining_dwarf_female00 + joining_dwarf_female01;
}
