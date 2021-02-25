var flashGames = new Array(
    "Hot Air", 
    "Sandman",
    "Chick Flick",
    "Roly Poly",
    "Feed Me!",
    "Tanked Up",
    "Scribble!",
    "Frost Bite",
    "Skywire",
    "Space Hopper",
    "Dangle",
    "Hot Air: All Blown Up",
    "Square Meal",
    "Toxic",
    "Yin Yang",
    "Nanobots",
    "Off the Rails",
    "Headcase",
    "Pest Control",
    "Twang!",
    "Thin Ice",
    "Snow Drift",
    "Jack Frost",
    "Aquanaut",
    "Dirk Valentine",
    "Magneboy",
    "Cheese Dreams",
    "Knuckleheads",
    "Skywire 2",
    "Small Fry",
    "Mutiny",
    "Final Ninja",
    "Onekey",
    "Mallet Mania",
    "Dog House",
    "Numbskull",
    "Bomba",
    "Flipside",
    "Toxic II",
    "Fat Cat",
    "Frost Bite 2",
    "Icebreaker",
    "Pixel Pop",
    "Flash Cat",
    "Twin Shot",
    "Mirror Image",
    "The Glassworks",
    "Ice Breaker: The Red Clan",
    "Rustyard",
    "Final Ninja Zero",
    "Powerup",
    "Droplets",
    "Double Edged",
    "Castle Corp",
    "Parasite",
    "Rockitty",
    "Nebula",
    "Cave Chaos",
    "Graveyard Shift",
    "Cold Storage",
    "Ice Breaker: The Gathering",
    "Avalanche: A Penguin Adventure",
    "Rubble Trouble New York",
    "Skywire VIP",
    "Blast RPG",
    "Tiny Castle",
    "Chisel",
    "Bullethead",
    "Fault Line",
    "Ribbit",
    "Worm Food",
    "Temple Glider",
    "Sky Serpents",
    "Enemy 585: The Last Henchman",
    "Super Treadmill",
    "Bad Ice-Cream",
    "Rush",
    "The Bucket",
    "Canary",
    "Test Subject Blue",
    "Chisel 2",
    "Knight Trap",
    "Steamlands",
    "Test Subject Green",
    "Silly Sausage",
    "Office Trap",
    "Rubble Trouble Tokyo",
    "Canopy",
    "Mega Mash",
    "Steamlands: Player Pack",
    "Stumped",
    "Nitrome Must Die",
    "Lockehorn",
    "Rubble Trouble Moscow",
    "Rainbogeddon",
    "Swindler",
    "Skywire VIP Extended",
    "Gunbrick",
    "Cave Chaos 2",
    "Hot Air Jr.",
    "J-J-Jump",
    "Skywire VIP Shuffle",
    "Turnament",
    "Swindler 2",
    "Ice Beak",
    "Bad-Ice Cream 2",
    "Plunger",
    "Twin Shot 2: Good and Evil",
    "Super Stock Take",
    "BC: Bow Contest",
    "Test Subject Complete",
    "Colour Blind",
    "Oodlegobs",
    "Ditto",
    "Flue",
    "Bump Battle Royale",
    "Coil",
    "Turn-Undead",
    "Submolok",
    "Fluffball"
);

var gameList = new Array();
var gameNum = new Number(0);

var output = document.getElementById("out");
var clrBtn = document.getElementById("clrBtn");
var floatOpt = document.getElementById("floatOpt");
var gameOpt = document.getElementById("gameOpt");

clrBtn.style.display = "none";
gameOpt.style.display = "none";
gameLoad();

function getRandom(num)
{
    return Math.floor(Math.random()*num);
}

function isExist(num, arr)
{
    var len = arr.length;
    for(var i=0; i<len; i++)
    {
        if(arr[i]==num) return true;
    }
    return false;
}

function roll()
{
    if(gameNum >= flashGames.length-1)
    {
        window.alert("这么多游戏你玩得完吗?!");
        return;
    }
    var rand = new Number;
    do {
        rand = getRandom(flashGames.length);
    } while(isExist(rand, gameList));
    gameNum = gameList.push(rand) -1;

    var para = document.createElement("p");
    var node = document.createTextNode(flashGames[gameList[gameNum]]);
    para.appendChild(node);
    output.appendChild(para);

    clrBtn.style.display = "inherit";
    window.scrollBy(0,document.documentElement.clientHeight);
}

function clr()
{
    gameList = [];
    gameNum = 0;
    output.innerHTML = "";
    clrBtn.style.display="none";
}

function gameLoad()
{
    gameOpt.innerHTML = "";
    var paraList = new Array();
    var paraNode = new Array();
    for(var i=0; i<flashGames.length; i++)
    {
        paraList.push(document.createElement("span"));
        paraNode.push(document.createTextNode((i+1).toString() + ". " + flashGames[i]));
        paraList[i].appendChild(paraNode[i]);
        gameOpt.appendChild(paraList[i]);
    }
}

function gameShow(b)
{
    if(gameOpt.style.display=="none")
    {
        gameOpt.style.display = "inherit";
        return true;
    } else {
        gameOpt.style.display = "none";
        return false;
    }
}

function gameDel(index)
{
    if(!(index>0 && index<=flashGames.length)) return false;
    flashGames.splice(index-1, 1);
    gameLoad();
    return true;
}

window.onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if(scrollTop > 80)    floatOpt.style.display = "inherit";
  else floatOpt.style.display = "none";
}