const LOAD_EVENT = {
  landing: "landingpageload",
  checkout: "checkoutpageload",
  upgrade: "upgradeload"
};

const SCOPE = {
  API: "apiRoot",
  ADDON: "addon",
  COLOR: "color",
  CROSS: "cross",
  DATA: "data",
  FIELDS: "fields",
  ID: "id",
  INIT_DATA: "initiatedData",
  LABELS: "labels",
  LOCALE: "locale",
  LOG: "log",
  MAIN: "main",
  MODE: "mode",
  PIXELS: "pixels",
  PAYMENT: "payment",
  REPORT: "report",
  SHIPPING: "shipping",
  STATUS: "status",
  UPGRADE: "upgrade",
  URL_PARAMS: "urlParams"
}

const CONTROLLERS = {
  FAQ: "FaqController",
  LANDING: "LandingController",
  LOADER: "LoaderController"
}

const SERVICES = {
  REPORT: "ReportService",
  LOAD: "LoadService",
  PAYMENT: "PaymentService"
}

const COUNTRY_CODE = {
  AF: {
    name: "Afghanistan"
  },
  AL: {
    name: "Albania"
  },
  DZ: {
    name: "Algeria"
  },
  AS: {
    name: "American Samoa"
  },
  AD: {
    name: "Andorra"
  },
  AO: {
    name: "Angola"
  },
  AI: {
    name: "Anguilla"
  },
  AQ: {
    name: "Antarctica"
  },
  AG: {
    name: "Antigua & Barbuda"
  },
  AR: {
    name: "Argentina"
  },
  AM: {
    name: "Armenia"
  },
  AW: {
    name: "Aruba"
  },
  AU: {
    name: "Australia",
    divisions: {
      "AU-NSW": "New South Wales",
      "AU-QLD": "Queensland",
      "AU-SA": "South Australia",
      "AU-TAS": "Tasmania",
      "AU-VIC": "Victoria",
      "AU-WA": "Western Australia",
      "AU-ACT": "Australian Capital Territory",
      "AU-NT": "Northern Territory"
    }
  },
  AT: {
    name: "Austria"
  },
  AZ: {
    name: "Azerbaijan"
  },
  BS: {
    name: "Bahamas"
  },
  BH: {
    name: "Bahrain"
  },
  BD: {
    name: "Bangladesh"
  },
  BB: {
    name: "Barbados"
  },
  BY: {
    name: "Belarus"
  },
  BE: {
    name: "Belgium"
  },
  BZ: {
    name: "Belize"
  },
  BJ: {
    name: "Benin"
  },
  BM: {
    name: "Bermuda"
  },
  BT: {
    name: "Bhutan"
  },
  BO: {
    name: "Bolivia"
  },
  BA: {
    name: "Bosnia & Herzegovina"
  },
  BW: {
    name: "Botswana"
  },
  BV: {
    name: "Bouvet Island"
  },
  BR: {
    name: "Brazil",
    divisions: {
      "BR-AC": "Acre",
      "BR-AL": "Alagoas",
      "BR-AP": "Amapá",
      "BR-AM": "Amazonas",
      "BR-BA": "Bahia",
      "BR-CE": "Ceará",
      "BR-DF": "Distrito Federal",
      "BR-ES": "Espírito Santo",
      "BR-GO": "Goiás",
      "BR-MA": "Maranhāo",
      "BR-MT": "Mato Grosso",
      "BR-MS": "Mato Grosso do Sul",
      "BR-MG": "Minas Gerais",
      "BR-PA": "Pará",
      "BR-PB": "Paraíba",
      "BR-PR": "Paraná",
      "BR-PE": "Pernambuco",
      "BR-PI": "Piauí",
      "BR-RJ": "Rio de Janeiro",
      "BR-RN": "Rio Grande do Norte",
      "BR-RS": "Rio Grande do Sul",
      "BR-R0": "Rondônia",
      "BR-RR": "Roraima",
      "BR-SC": "Santa Catarina",
      "BR-SP": "São Paulo",
      "BR-SE": "Sergipe",
      "BR-TO": "Tocantins"
    }
  },
  IO: {
    name: "British Indian Ocean Territory"
  },
  BN: {
    name: "Brunei Darussalam"
  },
  BG: {
    name: "Bulgaria"
  },
  BF: {
    name: "Burkina Faso"
  },
  BI: {
    name: "Burundi"
  },
  KH: {
    name: "Cambodia"
  },
  CM: {
    name: "Cameroon"
  },
  CA: {
    name: "Canada",
    divisions: {
      "CA-AB": "Alberta",
      "CA-BC": "British Columbia (Colombie-Britannique)",
      "CA-MB": "Manitoba",
      "CA-NB": "New Brunswick (Nouveau-Brunswick)",
      "CA-NL": "Newfoundland and Labrador (Terre-Neuve)",
      "CA-NS": "Nova Scotia (Nouvelle-Écosse)",
      "CA-ON": "Ontario",
      "CA-PE": "Prince Edward Island (Île-du-Prince-Édouard)",
      "CA-QC": "Quebec (Québec)",
      "CA-SK": "Saskatchewan",
      "CA-NT": "Northwest Territories (Territoires du Nord-Ouest)",
      "CA-NU": "Nunavut",
      "CA-YT": "Yukon Territory (Teritoire du Yukon)"
    }
  },
  CV: {
    name: "Cape Verde"
  },
  KY: {
    name: "Cayman Islands"
  },
  CF: {
    name: "Central African Republic"
  },
  TD: {
    name: "Chad"
  },
  CL: {
    name: "Chile"
  },
  CN: {
    name: "China"
  },
  CX: {
    name: "Christmas Island"
  },
  CC: {
    name: "Cocos (Keeling) Islands"
  },
  CO: {
    name: "Colombia"
  },
  KM: {
    name: "Comoros"
  },
  CG: {
    name: "Congo"
  },
  CD: {
    name: "Zaire"
  },
  CK: {
    name: "Cook Islands"
  },
  CR: {
    name: "Costa Rica"
  },
  CI: {
    name: "Cote D'ivoire (Ivory Coast)"
  },
  HR: {
    name: "Croatia (Hrvatska)"
  },
  CU: {
    name: "Cuba"
  },
  CY: {
    name: "Cyprus"
  },
  CZ: {
    name: "Czech Republic"
  },
  DK: {
    name: "Denmark"
  },
  DJ: {
    name: "Djibouti"
  },
  DM: {
    name: "Dominica"
  },
  DO: {
    name: "Dominican Republic"
  },
  TP: {
    name: "East Timor"
  },
  EC: {
    name: "Ecuador"
  },
  EG: {
    name: "Egypt"
  },
  SV: {
    name: "El Salvador"
  },
  GQ: {
    name: "Equatorial Guinea"
  },
  ER: {
    name: "Eritrea"
  },
  EE: {
    name: "Estonia"
  },
  ET: {
    name: "Ethiopia"
  },
  FK: {
    name: "Falkland Islands (Malvinas)"
  },
  FO: {
    name: "Faroe Islands"
  },
  FJ: {
    name: "Fiji"
  },
  FI: {
    name: "Finland"
  },
  FR: {
    name: "France"
  },
  GF: {
    name: "French Guiana"
  },
  PF: {
    name: "French Polynesia"
  },
  TF: {
    name: "French Southern Territories"
  },
  GA: {
    name: "Gabon"
  },
  GM: {
    name: "Gambia"
  },
  GE: {
    name: "Georgia"
  },
  DE: {
    name: "Germany"
  },
  GH: {
    name: "Ghana"
  },
  GI: {
    name: "Gibraltar"
  },
  GB: {
    name: "United Kingdom"
  },
  GR: {
    name: "Greece"
  },
  GL: {
    name: "Greenland"
  },
  GD: {
    name: "Grenada"
  },
  GP: {
    name: "Guadeloupe"
  },
  GU: {
    name: "Guam"
  },
  GT: {
    name: "Guatemala"
  },
  GN: {
    name: "Guinea"
  },
  GW: {
    name: "Guinea-Bissau"
  },
  GY: {
    name: "Guyana"
  },
  HT: {
    name: "Haiti"
  },
  HM: {
    name: "Heard & McDonald Islands"
  },
  VA: {
    name: "Vatican City (Holy See)"
  },
  HN: {
    name: "Honduras"
  },
  HK: {
    name: "Hong Kong"
  },
  HU: {
    name: "Hungary"
  },
  IS: {
    name: "Iceland"
  },
  IN: {
    name: "India"
  },
  ID: {
    name: "Indonesia"
  },
  IR: {
    name: "Iran"
  },
  IQ: {
    name: "Iraq"
  },
  IE: {
    name: "Ireland"
  },
  IL: {
    name: "Israel"
  },
  IT: {
    name: "Italy"
  },
  JM: {
    name: "Jamaica"
  },
  JP: {
    name: "Japan"
  },
  JO: {
    name: "Jordan"
  },
  KZ: {
    name: "Kazakhstan"
  },
  KE: {
    name: "Kenya"
  },
  KI: {
    name: "Kiribati"
  },
  KP: {
    name: "Korea (North)"
  },
  KR: {
    name: "Korea (South)"
  },
  KW: {
    name: "Kuwait"
  },
  KG: {
    name: "Kyrgyzstan"
  },
  LA: {
    name: "Laos"
  },
  LV: {
    name: "Latvia"
  },
  LB: {
    name: "Lebanon"
  },
  LS: {
    name: "Lesotho"
  },
  LR: {
    name: "Liberia"
  },
  LY: {
    name: "Libya"
  },
  LI: {
    name: "Liechtenstein"
  },
  LT: {
    name: "Lithuania"
  },
  LU: {
    name: "Luxembourg"
  },
  MO: {
    name: "Macau"
  },
  MK: {
    name: "Macedonia"
  },
  MG: {
    name: "Madagascar"
  },
  MW: {
    name: "Malawi"
  },
  MY: {
    name: "Malaysia"
  },
  MV: {
    name: "Maldives"
  },
  ML: {
    name: "Mali"
  },
  MT: {
    name: "Malta"
  },
  MH: {
    name: "Marshall Islands"
  },
  MQ: {
    name: "Martinique"
  },
  MR: {
    name: "Mauritania"
  },
  MU: {
    name: "Mauritius"
  },
  YT: {
    name: "Mayotte"
  },
  MX: {
    name: "Mexico"
  },
  FM: {
    name: "Micronesia"
  },
  MD: {
    name: "Moldova"
  },
  MC: {
    name: "Monaco"
  },
  MN: {
    name: "Mongolia"
  },
  MS: {
    name: "Montserrat"
  },
  MA: {
    name: "Morocco"
  },
  MZ: {
    name: "Mozambique"
  },
  MM: {
    name: "Myanmar"
  },
  NA: {
    name: "Namibia"
  },
  NR: {
    name: "Nauru"
  },
  NP: {
    name: "Nepal"
  },
  NL: {
    name: "Netherlands"
  },
  AN: {
    name: "Netherlands Antilles"
  },
  NC: {
    name: "New Caledonia"
  },
  NZ: {
    name: "New Zealand"
  },
  NI: {
    name: "Nicaragua"
  },
  NE: {
    name: "Niger"
  },
  NG: {
    name: "Nigeria"
  },
  NU: {
    name: "Niue"
  },
  NF: {
    name: "Norfolk Island"
  },
  MP: {
    name: "Northern Mariana Islands"
  },
  NO: {
    name: "Norway"
  },
  OM: {
    name: "Oman"
  },
  PK: {
    name: "Pakistan"
  },
  PW: {
    name: "Palau"
  },
  PA: {
    name: "Panama"
  },
  PG: {
    name: "Papua New Guinea"
  },
  PY: {
    name: "Paraguay"
  },
  PE: {
    name: "Peru"
  },
  PH: {
    name: "Philippines"
  },
  PN: {
    name: "Pitcairn"
  },
  PL: {
    name: "Poland"
  },
  PT: {
    name: "Portugal"
  },
  PR: {
    name: "Puerto Rico"
  },
  QA: {
    name: "Qatar"
  },
  RE: {
    name: "Reunion"
  },
  RO: {
    name: "Romania"
  },
  RU: {
    name: "Russian Federation"
  },
  RW: {
    name: "Rwanda"
  },
  SH: {
    name: "St. Helena"
  },
  KN: {
    name: "Saint Kitts & Nevis"
  },
  LC: {
    name: "Saint Lucia"
  },
  PM: {
    name: "St. Pierre & Miquelon"
  },
  VC: {
    name: "St. Vincent & the Grenadines"
  },
  WS: {
    name: "Samoa"
  },
  SM: {
    name: "San Marino"
  },
  ST: {
    name: "Sao Tome & Principe"
  },
  SA: {
    name: "Saudi Arabia"
  },
  SN: {
    name: "Senegal"
  },
  SC: {
    name: "Seychelles"
  },
  SL: {
    name: "Sierra Leone"
  },
  SG: {
    name: "Singapore"
  },
  SK: {
    name: "Slovak Republic"
  },
  SI: {
    name: "Slovenia"
  },
  SB: {
    name: "Solomon Islands"
  },
  SO: {
    name: "Somalia"
  },
  ZA: {
    name: "South Africa"
  },
  GS: {
    name: "S.Georgia & S.Sandwich Islands"
  },
  ES: {
    name: "Spain",
    divisions: {
      "ES-Ãlava": "Ãlava",
      "ES-Albacete": "Albacete",
      "ES-Alicante": "Alicante",
      "ES-AlmerÃ­a": "AlmerÃ­a",
      "ES-Asturias": "Asturias",
      "ES-Ãvila": "Ãvila",
      "ES-Badajoz": "Badajoz",
      "ES-Barcelona": "Barcelona",
      "ES-Burgos": "Burgos",
      "ES-CÃ¡ceres": "CÃ¡ceres",
      "ES-CÃ¡diz": "CÃ¡diz",
      "ES-Cantabria": "Cantabria",
      "ES-CastellÃ³n": "CastellÃ³n",
      "ES-Ceuta": "Ceuta",
      "ES-Ciudad Real": "Ciudad Real",
      "ES-CÃ³rdoba": "CÃ³rdoba",
      "ES-Cuenca": "Cuenca",
      "ES-Gerona": "Gerona",
      "ES-Granada": "Granada",
      "ES-Guadalajara": "Guadalajara",
      "ES-GuipÃºzcoa": "GuipÃºzcoa",
      "ES-Huelva": "Huelva",
      "ES-Huesca": "Huesca",
      "ES-Islas Baleares": "Islas Baleares",
      "ES-JaÃ©n": "JaÃ©n",
      "ES-La Coruna": "La Coruna",
      "ES-La Rioja": "La Rioja",
      "ES-Las Palmas": "Las Palmas",
      "ES-LeÃ³n": "LeÃ³n",
      "ES-LÃ©rida": "LÃ©rida",
      "ES-Lugo": "Lugo",
      "ES-Madrid": "Madrid",
      "ES-MÃ¡laga": "MÃ¡laga",
      "ES-Melilla": "Melilla",
      "ES-Murcia": "Murcia",
      "ES-Navarra": "Navarra",
      "ES-Orense": "Orense",
      "ES-Palencia": "Palencia",
      "ES-Pontevedra": "Pontevedra",
      "ES-Salamanca": "Salamanca",
      "ES-Santa Cruz de Tenerife": "Santa Cruz de Tenerife",
      "ES-Segovia": "Segovia",
      "ES-Sevilla": "Sevilla",
      "ES-Sevilla": "Sevilla",
      "ES-Soria": "Soria",
      "ES-Tarragona": "Tarragona",
      "ES-Valencia": "Valencia",
      "ES-Teruel": "Teruel",
      "ES-Toledo": "Toledo",
      "ES-Valladolid": "Valladolid",
      "ES-Vizcaya": "Vizcaya",
      "ES-Zamora": "Zamora",
      "ES-Zaragoza": "Zaragoza"
    }
  },
  LK: {
    name: "Sri Lanka"
  },
  SD: {
    name: "Sudan"
  },
  SR: {
    name: "Suriname"
  },
  SJ: {
    name: "Svalbard & Jan Mayen Islands"
  },
  SZ: {
    name: "Swaziland"
  },
  SE: {
    name: "Sweden"
  },
  CH: {
    name: "Switzerland"
  },
  SY: {
    name: "Syria"
  },
  TW: {
    name: "Taiwan"
  },
  TJ: {
    name: "Tajikistan"
  },
  TZ: {
    name: "Tanzania"
  },
  TH: {
    name: "Thailand"
  },
  TG: {
    name: "Togo"
  },
  TK: {
    name: "Tokelau"
  },
  TO: {
    name: "Tonga"
  },
  TT: {
    name: "Trinidad & Tobago"
  },
  TN: {
    name: "Tunisia"
  },
  TR: {
    name: "Turkey"
  },
  TM: {
    name: "Turkmenistan"
  },
  TC: {
    name: "Turks & Caicos Islands"
  },
  TV: {
    name: "Tuvalu"
  },
  UG: {
    name: "Uganda"
  },
  UA: {
    name: "Ukraine"
  },
  AE: {
    name: "United Arab Emirates"
  },
  US: {
    name: "United States",
    divisions: {
      "US-AL": "Alabama",
      "US-AK": "Alaska",
      "US-AZ": "Arizona",
      "US-AR": "Arkansas",
      "US-CA": "California",
      "US-CO": "Colorado",
      "US-CT": "Connecticut",
      "US-DE": "Delaware",
      "US-FL": "Florida",
      "US-GA": "Georgia",
      "US-HI": "Hawaii",
      "US-ID": "Idaho",
      "US-IL": "Illinois",
      "US-IN": "Indiana",
      "US-IA": "Iowa",
      "US-KS": "Kansas",
      "US-KY": "Kentucky",
      "US-LA": "Louisiana",
      "US-ME": "Maine",
      "US-MD": "Maryland",
      "US-MA": "Massachusetts",
      "US-MI": "Michigan",
      "US-MN": "Minnesota",
      "US-MS": "Mississippi",
      "US-MO": "Missouri",
      "US-MT": "Montana",
      "US-NE": "Nebraska",
      "US-NV": "Nevada",
      "US-NH": "New Hampshire",
      "US-NJ": "New Jersey",
      "US-NM": "New Mexico",
      "US-NY": "New York",
      "US-NC": "North Carolina",
      "US-ND": "North Dakota",
      "US-OH": "Ohio",
      "US-OK": "Oklahoma",
      "US-OR": "Oregon",
      "US-PA": "Pennsylvania",
      "US-RI": "Rhode Island",
      "US-SC": "South Carolina",
      "US-SD": "South Dakota",
      "US-TN": "Tennessee",
      "US-TX": "Texas",
      "US-UT": "Utah",
      "US-VT": "Vermont",
      "US-VA": "Virginia",
      "US-WA": "Washington",
      "US-WV": "West Virginia",
      "US-WI": "Wisconsin",
      "US-WY": "Wyoming",
      "US-DC": "District of Columbia",
      "US-AS": "American Samoa",
      "US-GU": "Guam",
      "US-MP": "Northern Mariana Islands",
      "US-PR": "Puerto Rico",
      "US-UM": "United States Minor Outlying Islands",
      "US-VI": "Virgin Islands, U.S."
    }
  },

  UY: {
    name: "Uruguay"
  },
  UZ: {
    name: "Uzbekistan"
  },
  VU: {
    name: "Vanuatu"
  },
  VE: {
    name: "Venezuela"
  },
  VN: {
    name: "Viet Nam"
  },
  VG: {
    name: "Virgin Islands (British)"
  },
  VI: {
    name: "Virgin Islands (U.S.)"
  },
  WF: {
    name: "Wallis & Futuna Islands"
  },
  EH: {
    name: "Western Sahara"
  },
  YE: {
    name: "Yemen"
  },
  YU: {
    name: "Yugoslavia"
  },
  ZM: {
    name: "Zambia"
  },
  ZW: {
    name: "Zimbabwe"
  }
};

const PHONE_CODE = {
  BD: "880",
  BE: "32",
  BF: "226",
  BG: "359",
  BA: "387",
  BB: "1-246",
  WF: "681",
  BL: "590",
  BM: "1-441",
  BN: "673",
  BO: "591",
  BH: "973",
  BI: "257",
  BJ: "229",
  BT: "975",
  JM: "1-876",
  BW: "267",
  WS: "685",
  BQ: "599",
  BR: "55",
  BS: "1-242",
  JE: "44-1534",
  BY: "375",
  BZ: "501",
  RU: "7",
  RW: "250",
  RS: "381",
  TL: "670",
  RE: "262",
  TM: "993",
  TJ: "992",
  RO: "40",
  TK: "690",
  GW: "245",
  GU: "1-671",
  GT: "502",
  GR: "30",
  GQ: "240",
  GP: "590",
  JP: "81",
  GY: "592",
  GG: "44-1481",
  GF: "594",
  GE: "995",
  GD: "1-473",
  GB: "44",
  GA: "241",
  SV: "503",
  GN: "224",
  GM: "220",
  GL: "299",
  GI: "350",
  GH: "233",
  OM: "968",
  TN: "216",
  JO: "962",
  HR: "385",
  HT: "509",
  HU: "36",
  HK: "852",
  HN: "504",
  VE: "58",
  PR: "1-787",
  PS: "970",
  PW: "680",
  PT: "351",
  SJ: "47",
  PY: "595",
  IQ: "964",
  PA: "507",
  PF: "689",
  PG: "675",
  PE: "51",
  PK: "92",
  PH: "63",
  PN: "870",
  PL: "48",
  PM: "508",
  ZM: "260",
  EH: "212",
  EE: "372",
  EG: "20",
  ZA: "27",
  EC: "593",
  IT: "39",
  VN: "84",
  SB: "677",
  ET: "251",
  SO: "252",
  ZW: "263",
  SA: "966",
  ES: "34",
  ER: "291",
  ME: "382",
  MD: "373",
  MG: "261",
  MF: "590",
  MA: "212",
  MC: "377",
  UZ: "998",
  MM: "95",
  ML: "223",
  MO: "853",
  MN: "976",
  MH: "692",
  MK: "389",
  MU: "230",
  MT: "356",
  MW: "265",
  MV: "960",
  MQ: "596",
  MP: "1-670",
  MS: "1-664",
  MR: "222",
  IM: "44-1624",
  UG: "256",
  TZ: "255",
  MY: "60",
  MX: "52",
  IL: "972",
  FR: "33",
  IO: "246",
  SH: "290",
  FI: "358",
  FJ: "679",
  FK: "500",
  FM: "691",
  FO: "298",
  NI: "505",
  NL: "31",
  NO: "47",
  NA: "264",
  VU: "678",
  NC: "687",
  NE: "227",
  NF: "672",
  NG: "234",
  NZ: "64",
  NP: "977",
  NR: "674",
  NU: "683",
  CK: "682",
  CI: "225",
  CH: "41",
  CO: "57",
  CN: "86",
  CM: "237",
  CL: "56",
  CC: "61",
  CA: "1",
  CG: "242",
  CF: "236",
  CD: "243",
  CZ: "420",
  CY: "357",
  CX: "61",
  CR: "506",
  CW: "599",
  CV: "238",
  CU: "53",
  SZ: "268",
  SY: "963",
  SX: "599",
  KG: "996",
  KE: "254",
  SS: "211",
  SR: "597",
  KI: "686",
  KH: "855",
  KN: "1-869",
  KM: "269",
  ST: "239",
  SK: "421",
  KR: "82",
  SI: "386",
  KP: "850",
  KW: "965",
  SN: "221",
  SM: "378",
  SL: "232",
  SC: "248",
  KZ: "7",
  KY: "1-345",
  SG: "65",
  SE: "46",
  SD: "249",
  DO: "1-809",
  DM: "1-767",
  DJ: "253",
  DK: "45",
  VG: "1-284",
  DE: "49",
  YE: "967",
  DZ: "213",
  US: "1",
  UY: "598",
  YT: "262",
  UM: "1",
  LB: "961",
  LC: "1-758",
  LA: "856",
  TV: "688",
  TW: "886",
  TT: "1-868",
  TR: "90",
  LK: "94",
  LI: "423",
  LV: "371",
  TO: "676",
  LT: "370",
  LU: "352",
  LR: "231",
  LS: "266",
  TH: "66",
  TG: "228",
  TD: "235",
  TC: "1-649",
  LY: "218",
  VA: "379",
  VC: "1-784",
  AE: "971",
  AD: "376",
  AG: "1-268",
  AF: "93",
  AI: "1-264",
  VI: "1-340",
  IS: "354",
  IR: "98",
  AM: "374",
  AL: "355",
  AO: "244",
  AS: "1-684",
  AR: "54",
  AU: "61",
  AT: "43",
  AW: "297",
  IN: "91",
  AX: "358-18",
  AZ: "994",
  IE: "353",
  ID: "62",
  UA: "380",
  QA: "974",
  MZ: "258"
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export { LOAD_EVENT, SCOPE, CONTROLLERS, SERVICES, COUNTRY_CODE, PHONE_CODE, MONTHS, DAYS };