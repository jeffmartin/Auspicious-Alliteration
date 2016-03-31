var alliterative = true;
var generatedNames = [];
var dropCorpType = true;
var seedNoun = null;
var numberToGenerate = 20;
var adjectives = [
'Amber', 
'Blue', 
'Bronze', 
'Green', 
'Grey', 
'Indigo', 
'Lime', 
'Platinum', 
'Purple', 
'Red', 
'Silver', 
'Violet', 
'Wild', 
'Yellow', 
'Orange', 
'Big', 
'Small', 
'Black', 
'White', 
'Gold', 
'Pewter', 
'Ebony', 
'Grand', 
'Little', 
'Diamond', 
'Deep', 
'Scarlet', 
'Crimson', 
'Copper', 
'Chrome', 
'Cobalt', 
'Cerulean', 
'Bright',
'Aback','Abaft','Abandoned','Abashed','Aberrant','Abhorrent','Abiding','Abject','Ablaze','Able','Abnormal','Aboard','Aboriginal','Abortive','Abounding','Abrasive','Abrupt','Absent','Absorbed','Absorbing','Abstracted','Absurd','Abundant','Abusive','Acceptable','Accessible','Accidental','Accurate','Acid','Acidic','Acoustic','Acrid','Actually','Ad','Hoc','Adamant','Adaptable','Addicted','Adhesive','Adjoining','Adorable','Adventurous','Afraid','Aggressive','Agonizing','Agreeable','Ahead','Ajar','Alcoholic','Alert','Alike','Alive','Alleged','Alluring','Aloof','Amazing','Ambiguous','Ambitious','Amuck','Amused','Amusing','Ancient','Angry','Animated','Annoyed','Annoying','Anxious','Apathetic','Aquatic','Aromatic','Arrogant','Ashamed','Aspiring','Assorted','Astonishing','Attractive','Auspicious','Automatic','Available','Average','Awake','Aware','Awesome','Awful','Axiomatic','Bad','Barbarous','Bashful','Bawdy','Beautiful','Befitting','Belligerent','Beneficial','Bent','Berserk','Best','Better','Bewildered','Big','Billowy','Bite-sized','Bitter','Bizarre','Black','Black-and-white','Bloody','Blue','Blue-eyed','Blushing','Boiling','Boorish','Bored','Boring','Bouncy','Boundless','Brainy','Brash','Brave','Brawny','Breakable','Breezy','Brief','Bright','Bright','Broad','Broken','Brown','Bumpy','Burly','Bustling','Busy','Cagey','Calculating','Callous','Calm','Capable','Capricious','Careful','Careless','Caring','Cautious','Ceaseless','Certain','Changeable','Charming','Cheap','Cheerful','Chemical','Chief','Childlike','Chilly','Chivalrous','Chubby','Chunky','Clammy','Classy','Clean','Clear','Clever','Cloistered','Cloudy','Closed','Clumsy','Cluttered','Coherent','Cold','Colorful','Colossal','Combative','Comfortable','Common','Complete','Complex','Concerned','Condemned','Confused','Conscious','Cooing','Cool','Cooperative','Coordinated','Courageous','Cowardly','Crabby','Craven','Crazy','Creepy','Crooked','Crowded','Cruel','Cuddly','Cultured','Cumbersome','Curious','Curly','Curved','Curvy','Cut','Cute','Cute','Cynical','Daffy','Daily','Damaged','Damaging','Damp','Dangerous','Dapper','Dark','Dashing','Dazzling','Dead','Deadpan','Deafening','Dear','Debonair','Decisive','Decorous','Deep','Deeply','Defeated','Defective','Defiant','Delicate','Delicious','Delightful','Demonic','Delirious','Dependent','Depressed','Deranged','Descriptive','Deserted','Detailed','Determined','Devilish','Didactic','Different','Difficult','Diligent','Direful','Dirty','Disagreeable','Disastrous','Discreet','Disgusted','Disgusting','Disillusioned','Dispensable','Distinct','Disturbed','Divergent','Dizzy','Domineering','Doubtful','Drab','Draconian','Dramatic','Dreary','Drunk','Dry','Dull','Dusty','Dusty','Dynamic','Dysfunctional','Eager','Early','Earsplitting','Earthy','Easy','Eatable','Economic','Educated','Efficacious','Efficient','Eight','Elastic','Elated','Elderly','Electric','Elegant','Elfin','Elite','Embarrassed','Eminent','Empty','Enchanted','Enchanting','Encouraging','Endurable','Energetic','Enormous','Entertaining','Enthusiastic','Envious','Equable','Equal','Erect','Erratic','Ethereal','Evanescent','Evasive','Even','Excellent','Excited','Exciting','Exclusive','Exotic','Expensive','Extra-large','Extra-small','Exuberant','Exultant','Fabulous','Faded','Faint','Fair','Faithful','Fallacious','False','Familiar','Famous','Fanatical','Fancy','Fantastic','Far','Far-flung','Fascinated','Fast','Fat','Faulty','Fearful','Fearless','Feeble','Feigned','Female','Fertile','Festive','Few','Fierce','Filthy','Fine','Finicky','First','Five','Fixed','Flagrant','Flaky','Flashy','Flat','Flawless','Flimsy','Flippant','Flowery','Fluffy','Fluttering','Foamy','Foolish','Foregoing','Forgetful','Fortunate','Four','Frail','Fragile','Frantic','Free','Freezing','Frequent','Fresh','Fretful','Friendly','Frightened','Frightening','Full','Fumbling','Functional','Funny','Furry','Furtive','Future','Futuristic','Fuzzy','Gabby','Gainful','Gamy','Gaping','Garrulous','Gaudy','General','Gentle','Giant','Giddy','Gifted','Gigantic','Glamorous','Gleaming','Glib','Glistening','Glorious','Glossy','Godly','Good','Goofy','Gorgeous','Graceful','Grandiose','Grateful','Gratis','Gray','Greasy','Great','Greedy','Green','Grey','Grieving','Groovy','Grotesque','Grouchy','Grubby','Gruesome','Grumpy','Guarded','Guiltless','Gullible','Gusty','Guttural','Habitual','Half','Hallowed','Halting','Handsome','Handsomely','Handy','Hanging','Hapless','Happy','Hard','Hard-to-find','Harmonious','Harsh','Hateful','Heady','Healthy','Heartbreaking','Heavenly','Heavy','Hellish','Helpful','Helpless','Hesitant','Hideous','High','Highfalutin','High-pitched','Hilarious','Hissing','Historical','Holistic','Hollow','Homeless','Homely','Honorable','Horrible','Hospitable','Hot','Huge','Hulking','Humdrum','Humorous','Hungry','Hurried','Hurt','Hushed','Husky','Hypnotic','Hysterical','Icky','Icy','Idiotic','Ignorant','Ill','Illegal','Ill-fated','Ill-informed','Illustrious','Imaginary','Immense','Imminent','Impartial','Imperfect','Impolite','Important','Imported','Impossible','Incandescent','Incompetent','Inconclusive','Industrious','Incredible','Inexpensive','Infamous','Innate','Innocent','Inquisitive','Insidious','Instinctive','Intelligent','Interesting','Internal','Invincible','Irate','Irritating','Itchy','Jaded','Jagged','Jazzy','Jealous','Jittery','Jobless','Jolly','Joyous','Judicious','Juicy','Jumbled','Jumpy','Juvenile','Kaput','Keen','Kind','Kindhearted','Kindly','Knotty','Knowing','Knowledgeable','Known','Labored','Lackadaisical','Lacking','Lame','Lamentable','Languid','Large','Last','Late','Laughable','Lavish','Lazy','Lean','Learned','Left','Legal','Lethal','Level','Lewd','Light','Like','Likeable','Limping','Literate','Little','Lively','Lively','Living','Lonely','Long','Longing','Long-term','Loose','Lopsided','Loud','Loutish','Lovely','Loving','Low','Lowly','Lucky','Ludicrous','Lumpy','Lush','Luxuriant','Lying','Lyrical','Macabre','Macho','Maddening','Madly','Magenta','Magical','Magnificent','Majestic','Makeshift','Male','Malicious','Mammoth','Maniacal','Many','Marked','Massive','Married','Marvelous','Material','Materialistic','Mature','Mean','Measly','Meaty','Medical','Meek','Mellow','Melodic','Melted','Merciful','Mere','Messy','Mighty','Military','Milky','Mindless','Miniature','Minor','Miscreant','Misty','Mixed','Moaning','Modern','Moldy','Momentous','Motionless','Mountainous','Muddled','Mundane','Murky','Mushy','Mute','Mysterious','Naive','Nappy','Narrow','Nasty','Natural','Naughty','Nauseating','Near','Neat','Nebulous','Necessary','Needless','Needy','Neighborly','Nervous','New','Next','Nice','Nifty','Nimble','Nine','Nippy','Noiseless','Noisy','Nonchalant','Nondescript','Nonstop','Normal','Nostalgic','Nosy','Noxious','Null','Numberless','Numerous','Nutritious','Nutty','Oafish','Obedient','Obeisant','Obese','Obnoxious','Obscene','Obsequious','Observant','Obsolete','Obtainable','Oceanic','Odd','Offbeat','Old','Old-fashioned','Omniscient','One','Onerous','Open','Opposite','Optimal','Orange','Ordinary','Organic','Ossified','Outgoing','Outrageous','Outstanding','Oval','Overconfident','Overjoyed','Overrated','Overt','Overwrought','Painful','Painstaking','Pale','Paltry','Panicky','Panoramic','Parallel','Parched','Parsimonious','Past','Pastoral','Pathetic','Peaceful','Penitent','Perfect','Periodic','Permissible','Perpetual','Petite','Petite','Phobic','Physical','Picayune','Pink','Piquant','Placid','Plain','Plant','Plastic','Plausible','Pleasant','Plucky','Pointless','Poised','Polite','Political','Poor','Possessive','Possible','Powerful','Precious','Premium','Present','Pretty','Previous','Pricey','Prickly','Private','Probable','Productive','Profuse','Protective','Proud','Psychedelic','Psychotic','Public','Puffy','Pumped','Puny','Purple','Purring','Pushy','Puzzled','Puzzling','Quack','Quaint','Quarrelsome','Questionable','Quick','Quickest','Quiet','Quirky','Quixotic','Quizzical','Rabid','Racial','Ragged','Rainy','Rambunctious','Rampant','Rapid','Rare','Raspy','Ratty','Ready','Real','Rebel','Receptive','Recondite','Red','Redundant','Reflective','Regular','Relieved','Remarkable','Reminiscent','Repulsive','Resolute','Resonant','Responsible','Rhetorical','Rich','Right','Righteous','Rightful','Rigid','Ripe','Ritzy','Roasted','Robust','Romantic','Roomy','Rotten','Rough','Round','Royal','Ruddy','Rude','Rural','Rustic','Ruthless','Sable','Sad','Safe','Salty','Same','Sassy','Satisfying','Savory','Scandalous','Scarce','Scared','Scary','Scattered','Scientific','Scintillating','Scrawny','Screeching','Second','Second-hand','Secret','Secretive','Sedate','Seemly','Selective','Selfish','Separate','Serious','Shaggy','Shaky','Shallow','Sharp','Shiny','Shivering','Shocking','Short','Shrill','Shut','Shy','Sick','Silent','Silent','Silky','Silly','Simple','Simplistic','Sincere','Six','Skillful','Skinny','Sleepy','Slim','Slimy','Slippery','Sloppy','Slow','Small','Smart','Smelly','Smiling','Smoggy','Smooth','Sneaky','Snobbish','Snotty','Soft','Soggy','Solid','Somber','Sophisticated','Sordid','Sore','Sore','Sour','Sparkling','Special','Spectacular','Spicy','Spiffy','Spiky','Spiritual','Spiteful','Splendid','Spooky','Spotless','Spotted','Spotty','Spurious','Squalid','Square','Squealing','Squeamish','Staking','Stale','Standing','Statuesque','Steadfast','Steady','Steep','Stereotyped','Sticky','Stiff','Stimulating','Stingy','Stormy','Straight','Strange','Striped','Strong','Stupendous','Stupid','Sturdy','Subdued','Subsequent','Substantial','Successful','Succinct','Sudden','Sulky','Super','Superb','Superficial','Supreme','Swanky','Sweet','Sweltering','Swift','Symptomatic','Synonymous','Taboo','Tacit','Tacky','Talented','Tall','Tame','Tan','Tangible','Tangy','Tart','Tasteful','Tasteless','Tasty','Tawdry','Tearful','Tedious','Teeny','Teeny-tiny','Telling','Temporary','Ten','Tender','Tense','Tense','Tenuous','Terrible','Terrific','Tested','Testy','Thankful','Therapeutic','Thick','Thin','Thinkable','Third','Thirsty','Thirsty','Thoughtful','Thoughtless','Threatening','Three','Thundering','Tidy','Tight','Tightfisted','Tiny','Tired','Tiresome','Toothsome','Torpid','Tough','Towering','Tranquil','Trashy','Tremendous','Tricky','Trite','Troubled','Truculent','True','Truthful','Two','Typical','Ubiquitous','Ugliest','Ugly','Ultra','Unable','Unaccountable','Unadvised','Unarmed','Unbecoming','Unbiased','Uncovered','Understood','Undesirable','Unequal','Unequaled','Uneven','Unhealthy','Uninterested','Unique','Unkempt','Unknown','Unnatural','Unruly','Unsightly','Unsuitable','Untidy','Unused','Unusual','Unwieldy','Unwritten','Upbeat','Uppity','Upset','Uptight','Used','Useful','Useless','Utopian','Utter','Uttermost','Vacuous','Vagabond','Vague','Valuable','Various','Vast','Vengeful','Venomous','Verdant','Versed','Victorious','Vigorous','Violent','Violet','Vivacious','Voiceless','Volatile','Voracious','Vulgar','Wacky','Waggish','Waiting','Wakeful','Wandering','Wanting','Warlike','Warm','Wary','Wasteful','Watery','Weak','Wealthy','Weary','Well-groomed','Well-made','Well-off','Well-to-do','Wet','Whimsical','Whispering','White','Whole','Wholesale','Wicked','Wide','Wide-eyed','Wiggly','Wild','Willing','Windy','Wiry','Wise','Wistful','Witty','Woebegone','Womanly','Wonderful','Wooden','Woozy','Workable','Worried','Worthless','Wrathful','Wretched','Wrong','Wry'
];
var nouns = [
'Dog', 
'Cat', 
'Fox', 
'Cow', 
'Hen', 
'Horse', 
'Stag', 
'Lion',
'Elephant',
'Swan',
'Chicken',
'Eagle', 
'Falcon', 
'Duck', 
'Goose', 
'Gander', 
'Iguana', 
'Donkey', 
'Mare', 
'Hawk', 
'Frog', 
'Toad', 
'Snake', 
'Wolf', 
'Bear', 
'Spider', 
'Mantis',
'Brook', 
'Glen', 
'Mountain',
 'Stone',
 'Rock',
 'Valley', 
 'Storm', 
 'Stream', 
 'River', 
 'Sound', 
 'Mesa', 
 'Granite', 
 'Cliff', 
 'Sea', 
 'Coast', 
 'Fen', 
 'Bog', 
 'Peak', 
 'Mount', 
 'Forest', 
 'Desert',
'Crater', 
'Chasm', 
'Cove', 
'Dune', 
'Atoll', 
'Arch', 
'Bay', 
'Cape', 
'Channel', 
'Gulf', 
'Lagoon',
 'Shore', 
 'Wave', 
 'Canyon', 
 'Shoal', 
 'Marsh', 
 'Pool', 
 'Butte', 
 'Gully', 
 'Cave', 
 'Plain', 
 'Ridge', 
 'Bank', 
 'Vale', 
 'Spring', 
 'Gorge', 
 'Point', 
 'Rapid', 
 'Bayou', 
 'Lake', 
 'Creek', 
 'Pond', 
 'Glacier', 
 'Summit', 
 'Hill',
 'Crevasse', 
 'Dell', 
 'Ravine', 
 'Terrace', 
 'Dome', 
 'Plateau', 
 'Knoll', 
 'Flow', 
 'Geyser', 
 'Caldera', 
 'Reef', 
 'Bridge', 
 'Canal', 
 'Quarry', 
 'Road', 
 'Tunnel', 
 'Strait', 
 'Oasis', 
 'Steppe', 
 'Tundra', 
 'Flat',
"Aardvark",
"Albatross",
"Alligator",
"Alpaca",
"Ant",
"Anteater",
"Antelope",
"Ape",
"Armadillo",
"Baboon",
"Badger",
"Barracuda",
"Bat",
"Beaver",
"Bee",
"Beetle",
"Bird",
"Aves",
"Bison",
"Boar",
"Buffalo",
"Butterfly",
"Camel",
"Caribou",
"Cassowary",
"Caterpillar",
"Chamois",
"Cheetah",
"Chimpanzee",
"Chinchilla",
"Chough",
"Coati",
"Cobra",
"Cockroach",
"Cod",
"Cormorant",
"Coyote",
"Crab",
"Crane",
"Crocodile",
"Crow",
"Curlew",
"Deer",
"Dinosaur",
"Dogfish",
"Dolphin",
"Donkey",
"Dotterel",
"Dove",
"Dragonfly",
"Duck",
"Dugong",
"Dunlin",
"Eagle",
"Echidna",
"Eel",
"Eland",
"Elephant",
"Elk",
"Emu",
"Ferret",
"Finch",
"Fish",
"Flamingo",
"Fly",
"Gaur",
"Gazelle",
"Gerbil",
"Giraffe",
"Gnat",
"Gnu",
"Goat",
"Goldfinch",
"Goosander",
"Gorilla",
"Goshawk",
"Grasshopper",
"Grouse",
"Guanaco",
"Fowl",
"Gull",
"Hamster",
"Hare",
"Hedgehog",
"Heron",
"Herring",
"Hippopotamus",
"Hornet",
"Hummingbird",
"Hyena",
"Ibex",
"Ibis",
"Jackal",
"Jaguar",
"Jay",
"Jellyfish",
"Kangaroo",
"Kinkajou",
"Koala",
"Komodo",
"Kouprey",
"Kudu",
"Lapwing",
"Lark",
"Lemur",
"Leopard",
"Llama",
"Lobster",
"Locust",
"Loris",
"Louse",
"Lyrebird",
"Magpie",
"Mallard",
"Mammoth",
"Manatee",
"Mandrill",
"Mink",
"Mole",
"Mongoose",
"Monkey",
"Moose",
"Mouse",
"Mosquito",
"Narwhal",
"Newt",
"Nightingale",
"Octopus",
"Okapi",
"Opossum",
"Ostrich",
"Otter",
"Owl",
"Oyster",
"Panther",
"Parrot",
"Panda",
"Partridge",
"Peafowl",
"Pelican",
"Penguin",
"Pheasant",
"Pig",
"Pigeon",
"Pony",
"Porcupine",
"Porpoise",
"Quail",
"Quelea",
"Quetzal",
"Rabbit",
"Raccoon",
"Ram",
"Rat",
"Raven",
"Reindeer",
"Rhinoceros",
"Rook",
"Salamander",
"Salmon",
"Sandpiper",
"Sardine",
"Seahorse",
"Seal",
"Shark",
"Sheep",
"Shrew",
"Skunk",
"Sloth",
"Snail",
"Squirrel",
"Starling",
"Tapir",
"Tarsier",
"Termite",
"Tiger",
"Toad",
"Turkey",
"Turtle",
"Vicuña",
"Wallaby",
"Walrus",
"Wasp",
"Weasel",
"Whale",
"Wolf",
"Wolverine",
"Wombat",
"Wren",
"Yak",
"Zebra",
"Goblin",
"Elf",
"Orc",
"Dungeon",
"Keep",
"Circle",
"Square",
"Spot",
"Spire",
"Tower",
"Quarter",
"Devil",
"Demon",
"Angel",
"Adventurer",
"Rogue",
"Monk",
"Fighter",
"Wizard",
"Sorceror",
"Druid",
"Barbarian",
"Apprentice",
"King",
"Queen",
"Lord",
"Baron",
"Duke"
];
var corpTypes = ['Corp.', 'Ltd.', 'Corporation', 'Sarl', 'PLC', 'Limited', 'Incorporated', 'Inc.', 'LLP', 'LLC', 'Partners']

var alliterativeAdjective = true;
for(var i = 0; i<=numberToGenerate; i++){
    alliterativeAdjective = (Math.random() >= 0.5);
    var adjective = adjectives[Math.floor(Math.random() * (adjectives.length-1))];
    var noun = '';
	var leadingAdjective = '';
	if(seedNoun){
		noun = seedNoun;
		if(alliterative){
				var firstLetter = noun[0];
				var alliterativeAdjectives = [];
				for(var j = 0; j < adjectives.length-1; j++){
				if(adjectives[j][0] === firstLetter){
					alliterativeAdjectives.push(adjectives[j]);
				}
		}
		if(alliterativeAdjectives.length === 0){
			continue;
		}
			adjective = alliterativeAdjectives[Math.floor(Math.random() * (alliterativeAdjectives.length-1))];
		}
		else{
			adjective = adjectives[Math.floor(Math.random() * (adjectives.length-1))]; 
		}
	}
	else{
		if(alliterative){
				var firstLetter = adjective[0];
				var alliterativeNouns = [];
				for(var j = 0; j < nouns.length-1; j++){
				if(nouns[j][0] === firstLetter){
					alliterativeNouns.push(nouns[j]);
				}
		}
		if(alliterativeNouns.length === 0){
			continue;
		}
			noun = alliterativeNouns[Math.floor(Math.random() * (alliterativeNouns.length-1))];
		}
		else{
			noun = nouns[Math.floor(Math.random() * (nouns.length-1))]; 
		}
	}
	
	if(alliterativeAdjective){
			var firstLetter = adjective[0];
			var alliterativeAdjectives = [];
			for(var j = 0; j < adjectives.length-1; j++){
				if(adjectives[j][0] === firstLetter && adjectives[j] !== adjective){
					alliterativeAdjectives.push(adjectives[j]);
				}
			}
			if(alliterativeAdjectives.length === 0){
				continue;
			}
			leadingAdjective = alliterativeAdjectives[Math.floor(Math.random() * (alliterativeAdjectives.length-1))] + " ";
	}

	
	
	 
    var corpType = corpTypes[Math.floor(Math.random() * (corpTypes.length-1))];
    var generatedName ="";
    if(dropCorpType){
		generatedName = leadingAdjective +  adjective + ' ' + noun;
    }else{
    	generatedName = leadingAdjective +  adjective + ' ' + noun + ' ' + corpType;	
    }
     
    if(generatedNames.indexOf(generatedName) > -1){
        continue;
    }
    else{
        generatedNames.push(generatedName);
    }
}

console.log('"' + generatedNames.join('",\n"') + '"');
