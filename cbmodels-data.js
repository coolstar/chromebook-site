var topManufacturers = [
	"acer",
	"asus",
	"ctl",
	"dell",
	"framework",
	"google",
	"haier",
	"hp",
	"lenovo",
	"samsung",
	"toshiba"
];
var manufacturers = {};

var chipsets = {
	"sandybridge": {
		"supported": true,
		"cpus" : [
			"Intel Celeron 847"
		]
	},
	"ivybridge": {
		"supported": true,
		"cpus" : [
			"Intel Celeron 1007U",
			"Intel Core i5-3427U"
		]
	},
	"haswell" : {
		"supported": true,
		"cpus" : [
			"Intel Celeron 2955U/2957U",
			"Intel Core i3-4005U"
		]
	},
	"baytrail" : {
		"supported": true,
		"cpus" : [
			"Intel Celeron N2830/N2840",
			"Intel Celeron N2930/N2940"
		]
	},
	"broadwell" : {
		"supported": true,
		"cpus" : [
			"Intel Celeron 3205U/3215U",
			"Intel Core i3-5005U/i3-5015U",
			"Intel Core i5-5200U/i7-5500U",
		]
	},
	"braswell" : {
		"supported": true,
		"cpus" : [
			"Intel Celeron N3050/N3060",
			"Intel Celeron N3150/N3160"
		]
	},
	"skylake": {
		"supported": true,
		"cpus": [
			"Intel Pentium 4405Y",
			"Intel Core m3-6Y30/m5-6Y57/m7-6Y75",
			"Intel Celeron 3855U",
			"Intel Core i3-6100U/i5-6200U/i5-6300U",
		]
	},
	"apollolake": {
		"supported": true,
		"cpus": [
			"Intel Celeron N3350/N3450",
		]
	},
	"kabylake": {
		"supported": true,
		"cpus": [
			"Intel Celeron 3965Y",
			"Intel Core m3-7Y30/m3-8100Y/i5-8200Y",
			"Intel Core i7-7600U/i3-8130U",
			"Intel Pentium Gold 4417U",
			"Intel Core i5-8250U/i5-8350U/i7-8650U",
		]
	},
	"geminilake": {
		"supported": true,
		"cpus": [
			"Intel Celeron N4000/N4020/N4100/N4120",
			"Intel Pentium Silver N5000/N5030"
		]
	},
	"stoney": {
		"supported": true,
		"cpus": [
			"AMD A4-9120C / A6-9220C",
		]
	},
	"picasso-rwl": {
		"supported": false,
		"cpus": [
			"AMD 3015ce (Dual Boot)",
			"AMD Ryzen 3 3250C (Dual Boot)",
			"AMD Ryzen 5 3500C (Dual Boot)",
			"AMD Ryzen 7 3700C (Dual Boot)"
		]
	},
	"picasso": {
		"supported": true,
		"cpus": [
			"AMD 3015ce",
			"AMD Ryzen 3 3250C",
			"AMD Ryzen 5 3500C",
			"AMD Ryzen 7 3700C"
		]
	},
	"cometlake": {
		"supported": true,
		"cpus": [
			"Intel Pentium Gold 6405U",
			"Intel Core i3-10110U/i5-10210U/i5-10310U/i7-10510U/i7-10710U"
		]
	},
	"jasperlake": {
		"supported": true,
		"cpus": [
			"Intel Celeron N5100/N5105/N4500/N4505",
			"Intel Pentium Silver N6000/N6005"
		]
	},
	"tigerlake": {
		"supported": true,
		"cpus": [
			"Intel Pentium Gold 7505",
			"Intel Core i3-1115G4/i5-1135G7/i7-1165G7/i7-1185G7"
		]
	},
	"alderlake": {
		"supported": true,
		"cpus": [
			"Intel Core i3-1215U/i5-1235U/i5-1245U/i7-1255U/i7-1265U",
			"Intel Core i5-1240P/i7-1260P"
		]
	},
	"alderlake-n": {
		"supported": true,
		"cpus": [
			"Intel N100/N200",
			"Intel Core i3-N305"
		]
	},
	"cezanne": {
		"supported": true,
		"cpus": [
			"AMD Ryzen 3 5125C",
			"AMD Ryzen 3 5425C",
			"AMD Ryzen 5 5625C",
			"AMD Ryzen 7 5825C"
		]
	},
	"mendocino": {
		"supported": true,
		"cpus": [
			"AMD Athlon 7120C",
			"AMD Ryzen 3 7320C",
			"AMD Ryzen 5 7520C"
		]
	}
};

var baseboards = [
{
	"supported": true,
	"family": "sandybridge",
	"name": "Sandy Bridge Reference",
	"variants": [
		{
			"codename": "Parrot-snb",
			"info": [
				{ "manufacturer": "acer", "name": "C7 / C710" }
			]
		},{
			"codename": "Butterfly",
			"info": [
				{ "manufacturer": "hp", "name": "Pavilion Chromebook" }
			]
		},{
			"codename": "Lumpy",
			"info": [
				{ "manufacturer": "samsung", "name": "Series 5 550" }
			]
		}
	],
	"devices": [
		"cyapaSmbusTrackpad"
	]
},
{
	"supported": true,
	"family": "ivybridge",
	"name": "Ivy Bridge Reference",
	"variants": [
		{
			"codename": "Parrot-ivb",
			"info": [
				{ "manufacturer": "acer", "name": "C710" }
			],
			"devices": [
				"cyapaSmbusTrackpad"
			]
		},{
			"codename": "Link",
			"info": [
				{ "manufacturer": "google", "name": "Pixel 1" }
			],
			"devices": [
				"croskeyboard",
				"gmbusi2c",
				"chromeec",
				"atmelTrackpad",
				"atmelTouchScreen",
				"creativeCA0132"
			]
		},{
			"codename": "Stout",
			"info": [
				{ "manufacturer": "lenovo", "name": "Thinkpad X131e Chromebook" }
			]
		}
	],
	"devices": []
},
{
	"supported": true,
	"family": "haswell",
	"name": "Haswell Reference",
	"codename": "Slippy",
	"variants": [
		{
			"codename": "Peppy",
			"info": [
				{ "manufacturer": "acer", "name": "C720(P)" }
			],
			"devices": [
				"atmelTouchScreen"
			]
		},{
			"codename": "Wolf",
			"info": [
				{ "manufacturer": "dell", "name": "Chromebook 11" }
			]
		},{
			"codename": "Falco",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 14" }
			]
		},{
			"codename": "Leon",
			"info": [
				{ "manufacturer": "toshiba", "name": "Chromebook 1" }
			]
		}
	],
	"devices": [
		"hswrst",
		"croskeyboard",
		"chromeec",
		"cyapaTrackpad",
		"elanTrackpad",
		"realtekALC283"
	]
},
{
	"supported": true,
	"family": "broadwell",
	"name": "Broadwell Reference",
	"codename": "Auron",
	"variants": [
		{
			"codename": "Paine",
			"info": [
				{ "manufacturer": "acer", "name": "C740" }
			]
		},{
			"codename": "Yuna",
			"info": [
				{ "manufacturer": "acer", "name": "C910 / CB5-571" }
			]
		},{
			"codename": "Lulu",
			"info": [
				{ "manufacturer": "dell", "name": "Chromebook 13" }
			],
			"devices": [
				"elanTouchScreen"
			]
		},{
			"codename": "Gandof",
			"info": [
				{ "manufacturer": "toshiba", "name": "Chromebook 2" }
			]
		},{
			"codename": "Samus",
			"info": [
				{ "manufacturer": "google", "name": "Pixel 2" }
			],
			"devices": [
				"atmelTrackpad",
				"atmelTouchScreen",
				"realtekALC5677"
			],
			"removeDevices": [
				"realtekALC283"
			]
		}
	],
	"devices": [
		"bdwrst",
		"croskeyboard",
		"chromeec",
		"cyapaTrackpad",
		"elanTrackpad",
		"realtekALC283"
	]
},{
	"supported": true,
	"family": "baytrail",
	"name": "Baytrail Reference",
	"codename": "Rambi",
	"variants": [
		{
			"codename": "Gnawty",
			"info": [
				{ "manufacturer": "acer", "name": "C730/CB3-111" }
			]
		},{
			"codename": "Banjo",
			"info": [
				{ "manufacturer": "acer", "name": "CB3-531" }
			]
		},{
			"codename": "Squawks",
			"info": [
				{ "manufacturer": "asus", "name": "C200" }
			]
		},{
			"codename": "Quawks",
			"info": [
				{ "manufacturer": "asus", "name": "C300" }
			]
		},{
			"codename": "Candy",
			"info": [
				{ "manufacturer": "dell", "name": "Chromebook 11 3120" }
			],
			"devices": [
				"elanTouchScreen"
			]
		},{
			"codename": "Heli",
			"info": [
				{ "manufacturer": "haier", "name": "Chromebook G2" }
			]
		},{
			"codename": "kip",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 11 G3/G4" }
			]
		},{
			"codename": "clapper",
			"info": [
				{ "manufacturer": "lenovo", "name": "N20(P) Chromebook" }
			],
			"devices": [
				"elanTouchScreen"
			]
		},{
			"codename": "enguarde",
			"info": [
				{ "manufacturer": "lenovo", "name": "N21 Chromebook" }
			]
		},{
			"codename": "glimmer",
			"info": [
				{ "manufacturer": "lenovo", "name": "Thinkpad 11e/Yoga Chromebook" }
			],
			"devices": [
				"atmelTouchScreen"
			]
		},{
			"codename": "orco",
			"info": [
				{ "manufacturer": "lenovo", "name": "100S Chromebook" }
			]
		},{
			"codename": "winky",
			"info": [
				{ "manufacturer": "samsung", "name": "Chromebook 2" }
			]
		},{
			"codename": "swanky",
			"info": [
				{ "manufacturer": "toshiba", "name": "Chromebook 2" }
			]
		}
	],
	"devices": [
		"bytchip",
		"chromeec",
		"croskeyboard",
		"elanTrackpad",
		"atmelTrackpad",
		"max98090Audio",
		"tinySolderedStorage"
	]
},{
	"supported": true,
	"family": "braswell",
	"name": "Braswell Reference",
	"codename": "Cyan-ref",
	"variants": [
		{
			"codename": "Banon",
			"info": [
				{ "manufacturer": "acer", "name": "CB3-532" }
			]
		},{
			"codename": "Edgar",
			"info": [
				{ "manufacturer": "acer", "name": "CB3-431" }
			]
		},{
			"codename": "Cyan",
			"info": [
				{ "manufacturer": "acer", "name": "R11/CB5-132" }
			],
			"devices": [
				"elanTouchScreen",
				"max98090v2Audio"
			],
			"removeDevices": [
				"realtekALC5645"
			]
		},{
			"codename": "Terra",
			"info": [
				{ "manufacturer": "asus", "name": "C202/C300SA/C301SA" }
			]
		},{
			"codename": "Kefka",
			"info": [
				{ "manufacturer": "dell", "name": "Chromebook 11 3180" }
			],
			"devices": [
				"elanTouchScreen"
			]
		},{
			"codename": "Setzer",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 11 G5" }
			]
		},{
			"codename": "Setzer",
			"info": [
				{ "manufacturer": "lenovo", "name": "N22/N23/N42 Chromebook" }
			],
			"devices": [
				"melfasTouchScreen",
				"elanTouchScreen"
			]
		},{
			"codename": "Ultima",
			"info": [
				{ "manufacturer": "lenovo", "name": "Thinkpad 11e 3rd Gen" }
			],
			"devices": [
				"elanTouchScreen"
			]
		},{
			"codename": "Celes",
			"info": [
				{ "manufacturer": "samsung", "name": "Chromebook 3" }
			],
			"devices": [
				"celesWorkaround"
			],
			"warnings": [
				"Model has timing issues and needs a workaround"
			]
		},{
			"codename": "Relm",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 11 N7 (C731)" },
				{ "manufacturer": "ctl", "name": "NL61 Chromebook" },
				{ "manufacturer": "edxis", "name": "Education Chromebook (NL6D)" },
				{ "manufacturer": "hp", "name": "Chromebook 11 G5 EE" },
				{ "manufacturer": "mecer", "name": "V2 Chromebook" },
				{ "manufacturer": "positivo", "name": "Chromebook C216B" }
			],
			"devices": [
				"melfasTouchScreen",
				"elanTouchScreen"
			]
		},{
			"codename": "Wizpig",
			"info": [
				{ "manufacturer": "ctl", "name": "J5 Chromebook" },
				{ "manufacturer": "edugear", "name": "CMT Chromebook" },
				{ "manufacturer": "haier", "name": "Chromebook 11C" },
				{ "manufacturer": "multilaser", "name": "Chromebook M11C" },
				{ "manufacturer": "pcmerge", "name": "Chromebook PCM-116T-432B" },
				{ "manufacturer": "prowise", "name": "Chromebook Proline" },
				{ "manufacturer": "viglen", "name": "Chromebook 360" }
			]
		}
	],
	"devices": [
		"croskeyboard",
		"chromeec",
		"elanTrackpad",
		"atmelTrackpad",
		"realtekALC5645",
		"tinySolderedStorage"
	]
},{
	"supported": true,
	"family": "skylake",
	"name": "Skylake Reference",
	"codename": "Glados",
	"variants": [
		{
			"codename": "Lars",
			"info": [
				{ "manufacturer": "acer", "name": "C771/Chromebook 14 for Work" }
			]
		},{
			"codename": "Cave",
			"info": [
				{ "manufacturer": "asus", "name": "C302CA" }
			]
		},{
			"codename": "Asuka",
			"info": [
				{ "manufacturer": "dell", "name": "Chromebook 13 3380" }
			]
		},{
			"codename": "Chell",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 13 G1" }
			]
		},{
			"codename": "Sentry",
			"info": [
				{ "manufacturer": "lenovo", "name": "Thinkpad 13" }
			]
		},{
			"codename": "Caroline",
			"info": [
				{ "manufacturer": "samsung", "name": "Chromebook Pro" }
			]
		}
	],
	"devices": [
		"croskeyboard",
		"chromeec",
		"elanTrackpad",
		"elanTouchScreen",
		"avsAudio",
		"tinySolderedStorage"
	],
	"warnings": [
		"A discount is available for the Audio driver. Make sure to get it!"
	]
},{
	"supported": true,
	"family": "apollolake",
	"name": "Apollolake Reference",
	"codename": "Reef-ref",
	"variants": [
		{
			"codename": "Astronaut",
			"info": [
				{ "manufacturer": "acer", "name": "C732" }
			]
		},{
			"codename": "Babymega",
			"info": [
				{ "manufacturer": "asus", "name": "C223NA" }
			]
		},{
			"codename": "Babytiger",
			"info": [
				{ "manufacturer": "asus", "name": "C523NA" }
			]
		},{
			"codename": "Blacktip",
			"info": [
				{ "manufacturer": "ctl", "name": "Chromebook NL7/NL7T" },
				{ "manufacturer": "edxis", "name": "Chromebook 11/X11" },
				{ "manufacturer": "positivo", "name": "Chromebook N2110/N2112" },
				{ "manufacturer": "viglen", "name": "Chromebook 360C" }
			]
		},{
			"codename": "Blue",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 15 (CB315)" }
			]
		},{
			"codename": "Bruce",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook Spin 15 (CP315)" }
			]
		},{
			"codename": "Electro",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook Spin 11 (R751T)" }
			]
		},{
			"codename": "Epaulette",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 514" }
			]
		},{
			"codename": "Lava",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook Spin 11 CP311" }
			]
		},{
			"codename": "Nasher",
			"info": [
				{ "manufacturer": "dell", "name": "Chromebook 11 5190" }
			]
		},{
			"codename": "Nasher360",
			"info": [
				{ "manufacturer": "dell", "name": "Chromebook 11 5190 2-in-1" }
			]
		},{
			"codename": "Pyro",
			"info": [
				{ "manufacturer": "lenovo", "name": "Thinkpad 11e/Yoga 11e (G4)" }
			]
		},{
			"codename": "Rabbid",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebook C423" }
			]
		},{
			"codename": "Reef",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebook Flip C213SA" }
			]
		},{
			"codename": "Robo",
			"info": [
				{ "manufacturer": "lenovo", "name": "100e Chromebook" }
			]
		},{
			"codename": "Robo360",
			"info": [
				{ "manufacturer": "lenovo", "name": "500e Chromebook" }
			]
		},{
			"codename": "Sand",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 15 (CB515-1HT)" }
			]
		},{
			"codename": "Santa",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 11 (CB311-8H)" }
			]
		},{
			"codename": "Snappy",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook x360 11 G1 EE/11 G6/11 G5" }
			]
		},{
			"codename": "Whitetip",
			"info": [
				{ "manufacturer": "ctl", "name": "Chromebook J41/J41T" },
				{ "manufacturer": "pcmerge", "name": "Chromebook AL116" },
				{ "manufacturer": "prowise", "name": "Chromebook Eduline" },
				{ "manufacturer": "sector 5", "name": "E3 Chromebook" },
				{ "manufacturer": "viglen", "name": "Chromebook 11C" }
			]
		}
	],
	"devices": [
		"croskeyboard",
		"chromeec",
		"cr50",
		"elanTrackpad",
		"elanTouchScreen",
		"raydiumTouchScreen",
		"avsAudio",
		"tinySolderedStorage"
	],
	"warnings": [
		"SD Card hotplug does not work (disable + re-enable in device manager as a workaround).",
		"A discount is available for the Audio driver. Make sure to get it!"
	]
},{
	"supported": true,
	"family": "kabylake",
	"name": "Kaby Lake Reference",
	"codename": "Poppy",
	"variants": [
		{
			"codename": "Akali",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 13" }
			]
		},{
			"codename": "Akali360",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook Spin 13" }
			]
		},{
			"codename": "Atlas",
			"info": [
				{ "manufacturer": "google", "name": "Pixelbook Go" }
			],
			"warnings": [
				"The webcam does not work."
			],
			"removeDevices": [
				"elanTrackpad",
				"elanTouchScreen"
			]
		},{
			"codename": "Bard",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 715 (CB715)" }
			]
		},{
			"codename": "Eve",
			"info": [
				{ "manufacturer": "google", "name": "Pixelbook" }
			],
			"removeDevices": [
				"elanTouchScreen"
			]
		},{
			"codename": "Ekko",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 714 (CB714)" }
			]
		},{
			"codename": "Leona",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebook C425" }
			],
			"removeDevices": [
				"elanTouchScreen"
			]
		},{
			"codename": "Nautilus",
			"info": [
				{ "manufacturer": "samsung", "name": "Chromebook Plus V2" }
			],
			"warnings": [
				"The webcam on the keyboard does not work."
			]
		},{
			"codename": "Nocturne",
			"info": [
				{ "manufacturer": "google", "name": "Pixel Slate" }
			],
			"warnings": [
				"The webcams do not work."
			],
			"removeDevices": [
				"elanTrackpad",
				"elanTouchScreen"
			]
		},{
			"codename": "Pantheon",
			"info": [
				{ "manufacturer": "lenovo", "name": "Yoga Chromebook C630" }
			]
		},{
			"codename": "Shyvana",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebook Flip C433/C434" }
			]
		},{
			"codename": "Sona",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook x360 14" }
			]
		},{
			"codename": "Syndra",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 15 G1" }
			]
		},{
			"codename": "Vayne",
			"info": [
				{ "manufacturer": "dell", "name": "Inspiron Chromebook 14 (7460)" }
			]
		}
	],
	"devices": [
		"croskeyboard",
		"chromeec",
		"cr50",
		"elanTrackpad",
		"elanTouchScreen",
		"raydiumTouchScreen",
		"avsAudio"
	]
},{
	"supported": true,
	"family": "kabylake",
	"name": "Kabylake Box Reference",
	"codename": "Fizz",
	"variants": [
		{
			"codename": "Jax",
			"info": [
				{ "manufacturer": "aopen", "name": "Chromebox Commercial 2" },
				{ "manufacturer": "newline", "name": "Chromebox A10" }
			]
		},{
			"codename": "Kench",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebox G2" }
			]
		},{
			"codename": "Sion",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebox CXI3" }
			]
		},{
			"codename": "Teemo",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebox 3 (CN65)" }
			]
		},{
			"codename": "Wukong",
			"info": [
				{ "manufacturer": "ctl", "name": "Chromebox CBx1" },
				{ "manufacturer": "promethean", "name": "Chromebox" },
				{ "manufacturer": "smart", "name": "Chromebox G3" },
				{ "manufacturer": "viewsonic", "name": "NMP660 Chromebox" }
			]
		},{
			"codename": "Karma",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebase 24l2" },
			],
			"devices": [
				"elanTouchScreen"
			]
		}
	],
	"devices": [
		"chromeec",
		"cr50",
		"avsAudio"
	]
},{
	"supported": true,
	"family": "geminilake",
	"name": "Geminilake Reference",
	"codename": "Octopus",
	"variants": [
		{
			"codename": "Ampton",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebook Flip C214/C234" }
			]
		},{
			"codename": "Apel",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebook Flip C204" }
			]
		},{
			"codename": "Bloog",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook x360 12b" }
			]
		},{
			"codename": "Blooglet",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 14a" }
			]
		},{
			"codename": "Blooguard",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook x360 14a/14b" }
			]
		},{
			"codename": "Blorb",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 315" }
			]
		},{
			"codename": "Bluebird",
			"info": [
				{ "manufacturer": "samsung", "name": "Chromebook 4" }
			]
		},{
			"codename": "Bobba",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook CB311-9H, CB311-9HT, C733, C733U, C733T" }
			]
		},{
			"codename": "Bobba360",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook Spin 511, CP311-2H, CP311-2HN" }
			]
		},{
			"codename": "Casta",
			"info": [
				{ "manufacturer": "samsung", "name": "Samsung Chromebook 4+" }
			]
		},{
			"codename": "Dood",
			"info": [
				{ "manufacturer": "nec", "name": "Chromebook Y2" }
			]
		},{
			"codename": "Dorp",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 14 G6" }
			]
		},{
			"codename": "Droid",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 314 (CB314)" },
				{ "manufacturer": "packard bell", "name": "Chromebook 314 (CB314)" }
			]
		},{
			"codename": "Fleex",
			"info": [
				{ "manufacturer": "dell", "name": "Chromebook 3100" }
			]
		},{
			"codename": "Foob",
			"info": [
				{ "manufacturer": "ctl", "name": "Chromebook VX11/VX11T" }
			]
		},{
			"codename": "Foob360",
			"info": [
				{ "manufacturer": "poin2", "name": "Chromebook 11P" }
			]
		},{
			"codename": "Garfour",
			"info": [
				{ "manufacturer": "ctl", "name": "Chromebook NL81/NL81T" }
			]
		},{
			"codename": "Glk",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 311" }
			]
		},{
			"codename": "Glk360",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook Spin 311" }
			]
		},{
			"codename": "Grabbiter",
			"info": [
				{ "manufacturer": "dell", "name": "Chromebook 3100 2-in-1" }
			]
		},{
			"codename": "Laser",
			"info": [
				{ "manufacturer": "lenovo", "name": "Chromebook C340" }
			]
		},{
			"codename": "Laser14",
			"info": [
				{ "manufacturer": "lenovo", "name": "IdeaPad 3" }
			]
		},{
			"codename": "Lick",
			"info": [
				{ "manufacturer": "lenovo", "name": "Ideapad 3 Chromebook" }
			]
		},{
			"codename": "Meep",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook x360 11 G2 EE" }
			]
		},{
			"codename": "Mimrock",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 11 G7 EE" }
			]
		},{
			"codename": "Nospike",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebook C424" }
			]
		},{
			"codename": "Orbatrix",
			"info": [
				{ "manufacturer": "dell", "name": "Chromebook 3400" }
			]
		},{
			"codename": "Phaser",
			"info": [
				{ "manufacturer": "lenovo", "name": "100e Chromebook 2nd Gen" }
			]
		},{
			"codename": "Phaser360",
			"info": [
				{ "manufacturer": "lenovo", "name": "300e Chromebook 2nd Gen/Ideapad Flex 3" },
				{ "manufacturer": "nec", "name": "Chromebook Y1" }
			]
		},{
			"codename": "Phaser360s",
			"info": [
				{ "manufacturer": "lenovo", "name": "500e Chromebook 2nd Gen" }
			]
		},{
			"codename": "Sparky",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 512 (C851/C851T)" }
			]
		},{
			"codename": "Sparky360",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook Spin 512 (R851TN)" }
			]
		},{
			"codename": "Vorticon",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 11 G8 EE" }
			]
		},{
			"codename": "Vortininja",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook x360 11 G3 EE" }
			]
		},{
			"codename": "Garg",
			"info": [
				{ "manufacturer": "advan", "name": "Chromebook 116" },
				{ "manufacturer": "axioo", "name": "Chromebook" },
				{ "manufacturer": "baicells", "name": "Chromebook BB01" },
				{ "manufacturer": "ctl", "name": "Chromebook NL71/CT/LTE" },
				{ "manufacturer": "evercross", "name": "Chromebook CB1" },
				{ "manufacturer": "edxis", "name": "Chromebook 11 (S20-C)" },
				{ "manufacturer": "joi", "name": "Chromebook C100" },
				{ "manufacturer": "multilaser", "name": "Chromebook M11C-PC914" },
				{ "manufacturer": "pixart", "name": "Rxart Chromebook" },
				{ "manufacturer": "poin2", "name": "Chromebook 11A" },
				{ "manufacturer": "spc", "name": "Chromebook X1 Mini" },
				{ "manufacturer": "sector 5", "name": "E4 LTE Chromebook" },
				{ "manufacturer": "ws", "name": "Chromebook A101" },
				{ "manufacturer": "zyrex", "name": "Chromebook M432" }
			]
		},{
			"codename": "Garg360",
			"info": [
				{ "manufacturer": "ascon", "name": "Chromebook 11A" },
				{ "manufacturer": "axioo", "name": "Chromebook 360" },
				{ "manufacturer": "baicells", "name": "Chromebook BB01" },
				{ "manufacturer": "ctl", "name": "Chromebook NL71T/TW/TWB" },
				{ "manufacturer": "evercross", "name": "Chromebook CB1A" },
				{ "manufacturer": "edxis", "name": "Chromebook 11 (S20-X)" },
				{ "manufacturer": "joi", "name": "Chromebook C100" },
				{ "manufacturer": "multilaser", "name": "Chromebook M11HC-PC915" },
				{ "manufacturer": "pixart", "name": "Rxart Chromebook" },
				{ "manufacturer": "poin2", "name": "Chromebook 11A" },
				{ "manufacturer": "spc", "name": "Chromebook X1 Mini" },
				{ "manufacturer": "ws", "name": "Chromebook A101" },
				{ "manufacturer": "zyrex", "name": "Chromebook 360" }
			]
		}
	],
	"devices": [
		"croskeyboard",
		"chromeec",
		"cr50",
		"elanTrackpad",
		"elanTouchScreen",
		"raydiumTouchScreen",
		"intelSofAudio",
		"tinySolderedStorage"
	]
},{
	"supported": true,
	"family": "stoney",
	"name": "Stoney Reference",
	"codename": "Grunt",
	"variants": [
		{
			"codename": "Aleena",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 315 (CB315-2H)" }
			]
		},
		{
			"codename": "Barla",
			"info": [
				{ "manufacturer": "hp", "name": "11A G6 EE / 11 A G8 EE" }
			]
		},
		{
			"codename": "Careena",
			"info": [
				{ "manufacturer": "hp", "name": "14A G5" }
			]
		},
		{
			"codename": "Kasumi",
			"info": [
				{ "manufacturer": "acer", "name": "311 (C721/R721T)" }
			]
		},
		{
			"codename": "Liara",
			"info": [
				{ "manufacturer": "lenovo", "name": "14e (S345)" }
			]
		},
		{
			"codename": "Treeya",
			"info": [
				{ "manufacturer": "lenovo", "name": "100e/300e Gen 2 (AMD)" }
			]
		}
	],
	"devices": [
		"cr50",
		"chromeec",
		"testsigning",
		"bayhubemmc",
		"stoneygpu",
		"croskeyboard",
		"elanTrackpad",
		"synapticsTrackpad",
		"elanTouchScreen",
		"acp2x"
	],
	"warnings": [
		"Windows 10 requires slipstreaming the eMMC driver with NTLite",
		"GPU driver is patched, unsigned and requires testsigning"
	]
},{
	"supported": false,
	"family": "picasso-rwl",
	"name": "Picasso Reference",
	"codename": "Zork",
	"variants": [
		{
			"codename": "Woomax-rwl",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebook Flip CM5 [Dual Boot]" }
			]
		},{
			"codename": "Berknip-rwl",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook Pro C645 Enterprise (or 14b) [Dual Boot]" }
			]
		},{
			"codename": "Morphius-rwl",
			"info": [
				{ "manufacturer": "lenovo", "name": "Thinkpad Yoga C13 [Dual Boot]" }
			],
			"devices": [
				"elanTouchScreen"
			]
		}
	],
	"devices": [
		"cr50",
		"ryzenchip",
		"picassogpu",
		"chromeec",
		"croskeyboard",
		"elanTrackpad",
		"synapticsTrackpad",
		"acp3xmax98357aalc5682"
	],
	"warnings": [
		"Although dual booting with Chrome OS is possible on this platform, it is no longer provided active support and has known issues. Please follow the non-dual boot guide for the latest fixes."
	]
},{
	"supported": true,
	"family": "picasso",
	"name": "Picasso Reference",
	"codename": "Zork",
	"variants": [
		{
			"codename": "Woomax",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebook Flip CM5" }
			]
		},{
			"codename": "Berknip",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook Pro C645 Enterprise (or 14b)" }
			]
		},{
			"codename": "Morphius",
			"info": [
				{ "manufacturer": "lenovo", "name": "Thinkpad Yoga C13" }
			],
			"devices": [
				"elanTouchScreen"
			]
		},{
			"codename": "Dirinboz",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 14a" }
			]
		},{
			"codename": "Ezikinil",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook Spin 514" }
			]
		},{
			"codename": "Gumboz",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook x360 14a" }
			]
		},{
			"codename": "Vilboz",
			"info": [
				{ "manufacturer": "lenovo", "name": "100e Chromebook Gen3" }
			]
		},{
			"codename": "Vilboz360",
			"info": [
				{ "manufacturer": "lenovo", "name": "300e Chromebook Gen3" },
				{ "manufacturer": "NEC", "name": "Chromebook Y1 Gen 3A" }
			]
		}
	],
	"devices": [
		"cr50",
		"ryzenchip",
		"picassogpu",
		"chromeec",
		"croskeyboard",
		"elanTrackpad",
		"synapticsTrackpad",
		"elanTouchScreen",
		"acp3x"
	]
},{
	"supported": true,
	"family": "cometlake",
	"name": "Dell 7410 Enterprise",
	"codename": "Drallion",
	"variants": [
		{
			"codename": "Drallion",
			"info": [
				{ "manufacturer": "dell", "name": "Latitude 7410 Enterprise" }
			]
		}
	],
	"devices": [
		"cmlrst",
		"cr50",
		"wilcokeyboard",
		"cmljsltgladlchip",
		"elanTrackpad",
		"realtekALC295"
	]
},{
	"supported": true,
	"family": "cometlake",
	"name": "Comet Lake Reference",
	"codename": "Hatch",
	"variants": [
		{
			"codename": "Akemi",
			"info": [
				{ "manufacturer": "lenovo", "name": "Ideapad Flex 5" }
			]
		},
		{
			"codename": "Dragonair",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook x360 14c" }
			]
		},
		{
			"codename": "Dratini",
			"info": [
				{ "manufacturer": "hp", "name": "Pro c640" }
			]
		},
		{
			"codename": "Helios",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebook Flip C436FA" }
			]
		},
		{
			"codename": "Jinlon",
			"info": [
				{ "manufacturer": "hp", "name": "Elite C1030 / x360 13c" }
			]
		},
		{
			"codename": "Kindred",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 712 (C871)" }
			]
		},
		{
			"codename": "Kled",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook Spin 713 (CP713-2W)" }
			]
		},
		{
			"codename": "Kohaku",
			"info": [
				{ "manufacturer": "samsung", "name": "Galaxy Chromebook" }
			]
		},
		{
			"codename": "Nightfury",
			"info": [
				{ "manufacturer": "samsung", "name": "Galaxy Chromebook 2" }
			]
		}
	],
	"devices": [
		"cmlrst",
		"cr50",
		"chromeec",
		"croskeyboard",
		"cmljsltgladlchip",
		"elanTrackpad",
		"elanTouchScreen",
		"intelSofAudio"
	]
},{
	"supported": true,
	"family": "cometlake",
	"name": "Comet Lake Box Reference",
	"codename": "Puff",
	"variants": [
		{
			"codename": "Duffy",
			"info": [
				{ "manufacturer": "asus", "name": "Chromebox 4" }
			]
		},{
			"codename": "Faffy",
			"info": [
				{ "manufacturer": "asus", "name": "Fanless Chromebox" }
			]
		},{
			"codename": "Kaisa",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebox CXI4" }
			]
		},{
			"codename": "Noibat",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebox G3" }
			]
		},{
			"codename": "Wyvern",
			"info": [
				{ "manufacturer": "ctl", "name": "Chromebox CBx2" },
			]
		}
	],
	"devices": [
		"chromeec",
		"cr50",
		"intelSofAudio"
	]
},{
	"supported": true,
	"family": "jasperlake",
	"name": "Jasper Lake Reference",
	"codename": "Dedede",
	"variants": [
		{
			"codename": "Beetley",
			"info": [
				{ "manufacturer": "lenovo", "name": "Ideapad Flex 3i" }
			]
		},
		{
			"codename": "Blipper",
			"info": [
				{ "manufacturer": "lenovo", "name": "3i-15" }
			]
		},
		{
			"codename": "Bookem",
			"info": [
				{ "manufacturer": "lenovo", "name": "100e Gen3" }
			]
		},
		{
			"codename": "Boten",
			"info": [
				{ "manufacturer": "lenovo", "name": "500 gen3" }
			]
		},
		{
			"codename": "Botenflex",
			"info": [
				{ "manufacturer": "lenovo", "name": "Flex 3i-11/3i" }
			]
		},
		{
			"codename": "Bugzzy",
			"info": [
				{ "manufacturer": "samsung", "name": "Galaxy Chromebook 2 360" }
			]
		},
		{
			"codename": "Cret",
			"info": [
				{ "manufacturer": "dell", "name": "3100/3100 2-in-1" }
			]
		},
		{
			"codename": "Drawcia",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook x360 11 G4 EE" }
			]
		},
		{
			"codename": "Drawlat",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 11 G9 EE" }
			]
		},
		{
			"codename": "Drawlat",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 14 G7" }
			]
		},
		{
			"codename": "Drawper",
			"info": [
				{ "manufacturer": "hp", "name": "Fortis 14 G10" }
			]
		},
		{
			"codename": "Galith",
			"info": [
				{ "manufacturer": "asus", "name": "CX1500CKA/CX1500GKA" }
			]
		},
		{
			"codename": "Gallop",
			"info": [
				{ "manufacturer": "asus", "name": "CX1700" }
			]
		},
		{
			"codename": "Galnat",
			"info": [
				{ "manufacturer": "asus", "name": "CX1 1102/Flip CX1 1102" }
			]
		},
		{
			"codename": "Galtic",
			"info": [
				{ "manufacturer": "asus", "name": "CX1400/CX1400GKA" }
			]
		},
		{
			"codename": "Kracko",
			"info": [
				{ "manufacturer": "ctl", "name": "NL72" }
			]
		},
		{
			"codename": "Kracko360",
			"info": [
				{ "manufacturer": "ctl", "name": "NL72T" },
				{ "manufacturer": "lg", "name": "11TC50Q/11TQ50Q" }
			]
		},
		{
			"codename": "Lantis",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 14a" }
			]
		},
		{
			"codename": "Madoo",
			"info": [
				{ "manufacturer": "hp", "name": "x360 14b" }
			]
		},
		{
			"codename": "Magister",
			"info": [
				{ "manufacturer": "acer", "name": "Spin 314" }
			]
		},
		{
			"codename": "Maglet",
			"info": [
				{ "manufacturer": "acer", "name": "C852" }
			]
		},
		{

			"codename": "Maglith",
			"info": [
				{ "manufacturer": "acer", "name": "C733/C734" }
			]
		},
		{

			"codename": "Magma",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 315" }
			]
		},
		{

			"codename": "Magneto",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 314" }
			]
		},
		{

			"codename": "Magolor",
			"info": [
				{ "manufacturer": "acer", "name": "Spin 511" }
			]
		},
		{
			"codename": "Magpie",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 317" }
			]
		},
		{
			"codename": "Metaknight",
			"info": [
				{ "manufacturer": "nec", "name": "Chromebook Y3" }
			]
		},
		{
			"codename": "Pasara",
			"info": [
				{ "manufacturer": "gateway", "name": "Chromebook 15" }
			]
		},
		{
			"codename": "Pirette",
			"info": [
				{ "manufacturer": "axioo", "name": "Chromebook P11" },
				{ "manufacturer": "ctl", "name": "Chromebook PX11E" },
				{ "manufacturer": "spc", "name": "Chromebook Z1 Mini" },
				{ "manufacturer": "zyrex", "name": "Chromebook M432-2" }
			]
		},
		{
			"codename": "Pirika",
			"info": [
				{ "manufacturer": "gateway", "name": "Chromebook 15" }
			]
		},
		{
			"codename": "Sasuke",
			"info": [
				{ "manufacturer": "samsung", "name": "Chromebook Go" }
			]
		},
		{
			"codename": "Storo",
			"info": [
				{ "manufacturer": "asus", "name": "(Flip) CR1100" }
			]
		}
	],
	"devices": [
		"chromeec",
		"cr50",
		"croskeyboard",
		"cmljsltgladlchip",
		"jslgpu",
		"elanTrackpad",
		"synapticsTrackpad",
		"raydiumTouchScreen",
		"elanTouchScreen",
		"intelSofAudio"
	]
},{
	"supported": true,
	"family": "tigerlake",
	"name": "Tiger Lake Reference",
	"codename": "Volteer",
	"variants": [
		{
			"codename": "Chronicler",
			"info": [
				{ "manufacturer": "fmv", "name": "Chromebook 14F" }
			],
			"devices": [
				"elanTrackpad",
				"melfasTouchScreen",
				"elanTouchScreen"
			]
		},
		{
			"codename": "Collis",
			"info": [
				{ "manufacturer": "asus", "name": "Flip CX3" }
			]
		},
		{
			"codename": "Copano",
			"info": [
				{ "manufacturer": "asus", "name": "CX5400" }
			],
			"devices": [
				"elanTrackpad"
			]
		},
		{
			"codename": "Delbin",
			"info": [
				{ "manufacturer": "asus", "name": "CX5500 / CX536" }
			],
			"devices": [
				"elanTrackpad"
			]
		},
		{
			"codename": "Drobit",
			"info": [
				{ "manufacturer": "asus", "name": "CX9400" }
			]
		},
		{
			"codename": "Eldrid",
			"info": [
				{ "manufacturer": "hp", "name": "x360c" }
			],
			"devices": [
				"elanTrackpad"
			]
		},
		{
			"codename": "Elemi",
			"info": [
				{ "manufacturer": "hp", "name": "Pro c640 G2" }
			],
			"devices": [
				"elanTrackpad"
			]
		},
		{
			"codename": "Lillipup",
			"info": [
				{ "manufacturer": "lenovo", "name": "Ideapad Flex 5i" }
			],
			"devices": [
				"elanTrackpad",
				"elanTouchScreen"
			]
		},
		{
			"codename": "Lindar",
			"info": [
				{ "manufacturer": "lenovo", "name": "Ideapad Slim 5 / 5i-14" }
			],
			"devices": [
				"elanTrackpad",
				"elanTouchScreen"
			]
		},
		{
			"codename": "Volet",
			"info": [
				{ "manufacturer": "acer", "name": "CB515" }
			],
			"devices": [
				"elanTrackpad"
			]
		},
		{
			"codename": "Volta",
			"info": [
				{ "manufacturer": "acer", "name": "CB514" }
			],
			"devices": [
				"elanTrackpad",
				"raydiumTouchScreen"
			]
		},
		{
			"codename": "Voxel",
			"info": [
				{ "manufacturer": "acer", "name": "Spin 713 (CP713-3W)" }
			],
			"devices": [
				"elanTrackpad",
				"raydiumTouchScreen"
			]
		}
	],
	"devices": [
		"chromeec",
		"cr50",
		"croskeyboard",
		"cmljsltgladlchip",
		"tglgpu",
		"inteltbt4",
		"intelSofAudio"
	]
},{
	"supported": true,
	"family": "alderlake",
	"name": "Alder Lake Reference",
	"codename": "Brya",
	"variants": [
		{
			"codename": "Anahera",
			"info": [
				{ "manufacturer": "hp", "name": "c640 G3" }
			]
		},
		{
			"codename": "Banshee",
			"info": [
				{ "manufacturer": "framework", "name": "Chromebook" }
			],
			"removeDevices": [
				"elanTrackpad",
				"elanTouchScreen"
			]
		},
		{
			"codename": "Crota",
			"info": [
				{ "manufacturer": "dell", "name": "Latitude 5430" }
			]
		},
		{
			"codename": "Felwinter",
			"info": [
				{ "manufacturer": "asus", "name": "Flip CX5601" }
			]
		},
		{
			"codename": "Gimble",
			"info": [
				{ "manufacturer": "hp", "name": "x360 14 inch" }
			]
		},
		{
			"codename": "Kano",
			"info": [
				{ "manufacturer": "asus", "name": "Spin 714" }
			],
			"warnings": [
				"The webcam does not work currently"
			]
		},
		{
			"codename": "Marasov",
			"info": [
				{ "manufacturer": "asus", "name": "Plus CX3402" }
			]
		},
		{
			"codename": "Mithrax",
			"info": [
				{ "manufacturer": "hp", "name": "x360 14 inch" }
			]
		},
		{
			"codename": "Osiris",
			"info": [
				{ "manufacturer": "acer", "name": "516GE" }
			]
		},
		{
			"codename": "Omnigul",
			"info": [
				{ "manufacturer": "acer", "name": "Plus 515" }
			]
		},
		{
			"codename": "Primus",
			"info": [
				{ "manufacturer": "lenovo", "name": "Thinkpad C14 Gen 1" }
			]
		},
		{
			"codename": "Redrix",
			"info": [
				{ "manufacturer": "hp", "name": "Elite Dragonfly" }
			],
			"warnings": [
				"The webcam does not work currently"
			]
		},
		{
			"codename": "Taeko",
			"info": [
				{ "manufacturer": "lenovo", "name": "Flex 5i 14\"" }
			]
		},
		{
			"codename": "Taniks",
			"info": [
				{ "manufacturer": "lenovo", "name": "Ideapad Gaming 16\"" }
			]
		},
		{
			"codename": "Tarlo",
			"info": [
				{ "manufacturer": "lenovo", "name": "Ideapad 5i 16\"" }
			]
		},
		{
			"codename": "Volmar",
			"info": [
				{ "manufacturer": "acer", "name": "Vero 514" }
			]
		},
		{
			"codename": "Zavala",
			"info": [
				{ "manufacturer": "acer", "name": "Vero 712" }
			]
		}
	],
	"devices": [
		"cr50",
		"cmljsltgladlchip",
		"tglgpu",
		"adlwifi",
		"chromeec",
		"croskeyboard",
		"elanTrackpad",
		"elanTouchScreen",
		"inteltbt4",
		"intelSofAudio"
	]
},,{
	"supported": true,
	"family": "alderlake-n",
	"name": "Alder Lake-N Reference",
	"codename": "Nissa",
	"variants": [
		{
			"codename": "Craask",
			"info": [
				{ "manufacturer": "acer", "name": "Spin 512" }
			]
		},
		{
			"codename": "Craaskbowl",
			"info": [
				{ "manufacturer": "acer", "name": "Spin 511" }
			]
		},
		{
			"codename": "Craaskvin",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 511" }
			]
		},
		{
			"codename": "Craasneto",
			"info": [
				{ "manufacturer": "acer", "name": "Chromebook 314" }
			]
		},
		{
			"codename": "Pujjo",
			"info": [
				{ "manufacturer": "lenovo", "name": "500e Yoga Gen 4" }
			]
		},
		{
			"codename": "Pujjo1e",
			"info": [
				{ "manufacturer": "lenovo", "name": "100e Yoga Gen 4" }
			]
		},
		{
			"codename": "Pujjoflex",
			"info": [
				{ "manufacturer": "lenovo", "name": "Flex 3i" }
			]
		},
		{
			"codename": "Pujjoteen",
			"info": [
				{ "manufacturer": "lenovo", "name": "14e Gen 3" }
			]
		},
		{
			"codename": "Pujjoteen15w",
			"info": [
				{ "manufacturer": "lenovo", "name": "Ideapad Slim 3i" }
			]
		},
		{
			"codename": "Xivu",
			"info": [
				{ "manufacturer": "acer", "name": "CR11 (CR1102C/CR1102F)" }
			]
		},
		{
			"codename": "Yavilla",
			"info": [
				{ "manufacturer": "hp", "name": "Fortis G10" }
			]
		},
		{
			"codename": "Yavilly",
			"info": [
				{ "manufacturer": "hp", "name": "Fortis G5" }
			]
		},
		{
			"codename": "Yaviks",
			"info": [
				{ "manufacturer": "hp", "name": "Chromebook 15.6" }
			]
		}
	],
	"devices": [
		"cr50",
		"cmljsltgladlchip",
		"tglgpu",
		"adlwifi",
		"chromeec",
		"croskeyboard",
		"elanTrackpad",
		"elanTouchScreen",
		"inteltbt4",
		"intelSofAudio"
	],
	"warnings": [
		"A discount is available for the USB4 driver. Make sure to get it!"
	]
},{
	"supported": true,
	"family": "cezanne",
	"name": "Cezanne Reference",
	"codename": "Guybrush",
	"variants": [
		{
			"codename": "Nipperkin",
			"info": [
				{ "manufacturer": "hp", "name": "Elite c645 G2" }
			]
		},{
			"codename": "Dewatt",
			"info": [
				{ "manufacturer": "acer", "name": "Spin 514" }
			]
		}
	],
	"devices": [
		"cr50",
		"ryzenchip",
		"cezannegpu",
		"chromeec",
		"croskeyboard",
		"elanTrackpad",
		"synapticsTrackpad",
		"amdSofAudio"
	]
},{
	"supported": true,
	"family": "mendocino",
	"name": "Mendocino Reference",
	"codename": "Skyrim",
	"variants": [
		{
			"codename": "Frostflow",
			"info": [
				{ "manufacturer": "asus", "name": "CM34 Flip" }
			]
		},{
			"codename": "Markarth",
			"info": [
				{ "manufacturer": "acer", "name": "Plus 514" }
			]
		},{
			"codename": "Whiterun",
			"info": [
				{ "manufacturer": "dell", "name": "3445" }
			]
		}
	],
	"devices": [
		"cr50",
		"ryzenchip",
		"mendocinogpu",
		"chromeec",
		"croskeyboard",
		"elanTrackpad",
		"synapticsTrackpad",
		"amdSofAudio"
	]
}];