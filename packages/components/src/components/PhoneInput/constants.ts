export interface Country {
  name: string;
  id: ISOCountryCode;
  dialCode: string;
  dialCodeInt: number;
}

export type ISOCountryCode =
  | 'AF'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BA'
  | 'BW'
  | 'BR'
  | 'IO'
  | 'VG'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'CV'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CD'
  | 'CG'
  | 'CK'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'ET'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'XK'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MK'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'KP'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'KR'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SZ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'VI'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VA'
  | 'VE'
  | 'VN'
  | 'WF'
  | 'YE'
  | 'ZM'
  | 'ZW'
  | 'AX';

type Countries = {
  [key in ISOCountryCode]: Country;
};

// Hentet fra [uber/baseweb](https://github.com/uber/baseweb/)
// Modifisert til å passe våre behov: nummer som int

export const COUNTRIES: Countries = {
  AF: {
    name: 'Afghanistan (‫افغانستان‬‎)',
    id: 'AF',
    dialCode: '+93',
    dialCodeInt: 93,
  },
  AL: {
    name: 'Albania (Shqipëri)',
    id: 'AL',
    dialCode: '+355',
    dialCodeInt: 355,
  },
  DZ: {
    name: 'Algeria (‫الجزائر‬‎)',
    id: 'DZ',
    dialCode: '+213',
    dialCodeInt: 213,
  },
  AS: {
    name: 'American Samoa',
    id: 'AS',
    dialCode: '+1684',
    dialCodeInt: 1684,
  },
  AD: { name: 'Andorra', id: 'AD', dialCode: '+376', dialCodeInt: 376 },
  AO: { name: 'Angola', id: 'AO', dialCode: '+244', dialCodeInt: 244 },
  AI: { name: 'Anguilla', id: 'AI', dialCode: '+1264', dialCodeInt: 1264 },
  AG: {
    name: 'Antigua and Barbuda',
    id: 'AG',
    dialCode: '+1268',
    dialCodeInt: 1268,
  },
  AR: { name: 'Argentina', id: 'AR', dialCode: '+54', dialCodeInt: 54 },
  AM: {
    name: 'Armenia (Հայաստան)',
    id: 'AM',
    dialCode: '+374',
    dialCodeInt: 374,
  },
  AW: { name: 'Aruba', id: 'AW', dialCode: '+297', dialCodeInt: 297 },
  AU: { name: 'Australia', id: 'AU', dialCode: '+61', dialCodeInt: 61 },
  AT: {
    name: 'Austria (Österreich)',
    id: 'AT',
    dialCode: '+43',
    dialCodeInt: 43,
  },
  AZ: {
    name: 'Azerbaijan (Azərbaycan)',
    id: 'AZ',
    dialCode: '+994',
    dialCodeInt: 994,
  },
  BS: { name: 'Bahamas', id: 'BS', dialCode: '+1242', dialCodeInt: 1242 },
  BH: {
    name: 'Bahrain (‫البحرين‬‎)',
    id: 'BH',
    dialCode: '+973',
    dialCodeInt: 973,
  },
  BD: {
    name: 'Bangladesh (বাংলাদেশ)',
    id: 'BD',
    dialCode: '+880',
    dialCodeInt: 880,
  },
  BB: { name: 'Barbados', id: 'BB', dialCode: '+1246', dialCodeInt: 1246 },
  BY: {
    name: 'Belarus (Беларусь)',
    id: 'BY',
    dialCode: '+375',
    dialCodeInt: 375,
  },
  BE: { name: 'Belgium (België)', id: 'BE', dialCode: '+32', dialCodeInt: 32 },
  BZ: { name: 'Belize', id: 'BZ', dialCode: '+501', dialCodeInt: 501 },
  BJ: { name: 'Benin (Bénin)', id: 'BJ', dialCode: '+229', dialCodeInt: 229 },
  BM: { name: 'Bermuda', id: 'BM', dialCode: '+1441', dialCodeInt: 1441 },
  BT: { name: 'Bhutan (འབྲུག)', id: 'BT', dialCode: '+975', dialCodeInt: 975 },
  BO: { name: 'Bolivia', id: 'BO', dialCode: '+591', dialCodeInt: 591 },
  BA: {
    name: 'Bosnia and Herzegovina (Босна и Херцеговина)',
    id: 'BA',
    dialCode: '+387',
    dialCodeInt: 387,
  },
  BW: { name: 'Botswana', id: 'BW', dialCode: '+267', dialCodeInt: 267 },
  BR: { name: 'Brazil (Brasil)', id: 'BR', dialCode: '+55', dialCodeInt: 55 },
  IO: {
    name: 'British Indian Ocean Territory',
    id: 'IO',
    dialCode: '+246',
    dialCodeInt: 246,
  },
  VG: {
    name: 'British Virgin Islands',
    id: 'VG',
    dialCode: '+1284',
    dialCodeInt: 1284,
  },
  BN: { name: 'Brunei', id: 'BN', dialCode: '+673', dialCodeInt: 673 },
  BG: {
    name: 'Bulgaria (България)',
    id: 'BG',
    dialCode: '+359',
    dialCodeInt: 359,
  },
  BF: { name: 'Burkina Faso', id: 'BF', dialCode: '+226', dialCodeInt: 226 },
  BI: {
    name: 'Burundi (Uburundi)',
    id: 'BI',
    dialCode: '+257',
    dialCodeInt: 257,
  },
  KH: {
    name: 'Cambodia (កម្ពុជា)',
    id: 'KH',
    dialCode: '+855',
    dialCodeInt: 855,
  },
  CM: {
    name: 'Cameroon (Cameroun)',
    id: 'CM',
    dialCode: '+237',
    dialCodeInt: 237,
  },
  CA: { name: 'Canada', id: 'CA', dialCode: '+1', dialCodeInt: 1 },
  CV: {
    name: 'Cape Verde (Kabu Verdi)',
    id: 'CV',
    dialCode: '+238',
    dialCodeInt: 238,
  },
  KY: {
    name: 'Cayman Islands',
    id: 'KY',
    dialCode: '+1345',
    dialCodeInt: 1345,
  },
  CF: {
    name: 'Central African Republic (République centrafricaine)',
    id: 'CF',
    dialCode: '+236',
    dialCodeInt: 236,
  },
  TD: { name: 'Chad (Tchad)', id: 'TD', dialCode: '+235', dialCodeInt: 235 },
  CL: { name: 'Chile', id: 'CL', dialCode: '+56', dialCodeInt: 56 },
  CN: { name: 'China (中国)', id: 'CN', dialCode: '+86', dialCodeInt: 86 },
  CX: { name: 'Christmas Island', id: 'CX', dialCode: '+61', dialCodeInt: 61 },
  CC: {
    name: 'Cocos (Keeling) Islands',
    id: 'CC',
    dialCode: '+61',
    dialCodeInt: 61,
  },
  CO: { name: 'Colombia', id: 'CO', dialCode: '+57', dialCodeInt: 57 },
  KM: {
    name: 'Comoros (‫جزر القمر‬‎)',
    id: 'KM',
    dialCode: '+269',
    dialCodeInt: 269,
  },
  CD: {
    name: 'Congo (DRC) (Jamhuri ya Kisoemokrasia ya Kongo)',
    id: 'CD',
    dialCode: '+243',
    dialCodeInt: 243,
  },
  CG: {
    name: 'Congo (Republic) (Congo-Brazzaville)',
    id: 'CG',
    dialCode: '+242',
    dialCodeInt: 242,
  },
  CK: { name: 'Cook Islands', id: 'CK', dialCode: '+682', dialCodeInt: 682 },
  CR: { name: 'Costa Rica', id: 'CR', dialCode: '+506', dialCodeInt: 506 },
  CI: { name: 'Côte d’Ivoire', id: 'CI', dialCode: '+225', dialCodeInt: 225 },
  HR: {
    name: 'Croatia (Hrvatska)',
    id: 'HR',
    dialCode: '+385',
    dialCodeInt: 385,
  },
  CU: { name: 'Cuba', id: 'CU', dialCode: '+53', dialCodeInt: 53 },
  CW: { name: 'Curaçao', id: 'CW', dialCode: '+599', dialCodeInt: 599 },
  CY: {
    name: 'Cyprus (Κύπρος)',
    id: 'CY',
    dialCode: '+357',
    dialCodeInt: 357,
  },
  CZ: {
    name: 'Czech Republic (Česká republika)',
    id: 'CZ',
    dialCode: '+420',
    dialCodeInt: 420,
  },
  DK: {
    name: 'Denmark (Danmark)',
    id: 'DK',
    dialCode: '+45',
    dialCodeInt: 45,
  },
  DJ: { name: 'Djibouti', id: 'DJ', dialCode: '+253', dialCodeInt: 253 },
  DM: { name: 'Dominica', id: 'DM', dialCode: '+1767', dialCodeInt: 1767 },
  DO: {
    name: 'Dominican Republic (República Dominicana)',
    id: 'DO',
    dialCode: '+1',
    dialCodeInt: 1,
  },
  EC: { name: 'Ecuador', id: 'EC', dialCode: '+593', dialCodeInt: 593 },
  EG: { name: 'Egypt (‫مصر‬‎)', id: 'EG', dialCode: '+20', dialCodeInt: 20 },
  SV: { name: 'El Salvador', id: 'SV', dialCode: '+503', dialCodeInt: 503 },
  GQ: {
    name: 'Equatorial Guinea (Guinea Ecuatorial)',
    id: 'GQ',
    dialCode: '+240',
    dialCodeInt: 240,
  },
  ER: { name: 'Eritrea', id: 'ER', dialCode: '+291', dialCodeInt: 291 },
  EE: {
    name: 'Estonia (Eesti)',
    id: 'EE',
    dialCode: '+372',
    dialCodeInt: 372,
  },
  ET: { name: 'Ethiopia', id: 'ET', dialCode: '+251', dialCodeInt: 251 },
  FK: {
    name: 'Falkland Islands (Islas Malvinas)',
    id: 'FK',
    dialCode: '+500',
    dialCodeInt: 500,
  },
  FO: {
    name: 'Faroe Islands (Føroyar)',
    id: 'FO',
    dialCode: '+298',
    dialCodeInt: 298,
  },
  FJ: { name: 'Fiji', id: 'FJ', dialCode: '+679', dialCodeInt: 679 },
  FI: {
    name: 'Finland (Suomi)',
    id: 'FI',
    dialCode: '+358',
    dialCodeInt: 358,
  },
  FR: { name: 'France', id: 'FR', dialCode: '+33', dialCodeInt: 33 },
  GF: {
    name: 'French Guiana (Guyane française)',
    id: 'GF',
    dialCode: '+594',
    dialCodeInt: 594,
  },
  PF: {
    name: 'French Polynesia (Polynésie française)',
    id: 'PF',
    dialCode: '+689',
    dialCodeInt: 689,
  },
  GA: { name: 'Gabon', id: 'GA', dialCode: '+241', dialCodeInt: 241 },
  GM: { name: 'Gambia', id: 'GM', dialCode: '+220', dialCodeInt: 220 },
  GE: {
    name: 'Georgia (საქართველო)',
    id: 'GE',
    dialCode: '+995',
    dialCodeInt: 995,
  },
  DE: {
    name: 'Germany (Deutschland)',
    id: 'DE',
    dialCode: '+49',
    dialCodeInt: 49,
  },
  GH: { name: 'Ghana (Gaana)', id: 'GH', dialCode: '+233', dialCodeInt: 233 },
  GI: { name: 'Gibraltar', id: 'GI', dialCode: '+350', dialCodeInt: 350 },
  GR: { name: 'Greece (Ελλάδα)', id: 'GR', dialCode: '+30', dialCodeInt: 30 },
  GL: {
    name: 'Greenland (Kalaallit Nunaat)',
    id: 'GL',
    dialCode: '+299',
    dialCodeInt: 299,
  },
  GD: { name: 'Grenada', id: 'GD', dialCode: '+1473', dialCodeInt: 1473 },
  GP: { name: 'Guadeloupe', id: 'GP', dialCode: '+590', dialCodeInt: 590 },
  GU: { name: 'Guam', id: 'GU', dialCode: '+1671', dialCodeInt: 1671 },
  GT: { name: 'Guatemala', id: 'GT', dialCode: '+502', dialCodeInt: 502 },
  GG: { name: 'Guernsey', id: 'GG', dialCode: '+44', dialCodeInt: 44 },
  GN: {
    name: 'Guinea (Guinée)',
    id: 'GN',
    dialCode: '+224',
    dialCodeInt: 224,
  },
  GW: {
    name: 'Guinea-Bissau (Guiné Bissau)',
    id: 'GW',
    dialCode: '+245',
    dialCodeInt: 245,
  },
  GY: { name: 'Guyana', id: 'GY', dialCode: '+592', dialCodeInt: 592 },
  HT: { name: 'Haiti', id: 'HT', dialCode: '+509', dialCodeInt: 509 },
  HN: { name: 'Honduras', id: 'HN', dialCode: '+504', dialCodeInt: 504 },
  HK: {
    name: 'Hong Kong (香港)',
    id: 'HK',
    dialCode: '+852',
    dialCodeInt: 852,
  },
  HU: {
    name: 'Hungary (Magyarország)',
    id: 'HU',
    dialCode: '+36',
    dialCodeInt: 36,
  },
  IS: {
    name: 'Iceland (Ísland)',
    id: 'IS',
    dialCode: '+354',
    dialCodeInt: 354,
  },
  IN: { name: 'India (भारत)', id: 'IN', dialCode: '+91', dialCodeInt: 91 },
  ID: { name: 'Indonesia', id: 'ID', dialCode: '+62', dialCodeInt: 62 },
  IR: { name: 'Iran (‫ایران‬‎)', id: 'IR', dialCode: '+98', dialCodeInt: 98 },
  IQ: {
    name: 'Iraq (‫العراق‬‎)',
    id: 'IQ',
    dialCode: '+964',
    dialCodeInt: 964,
  },
  IE: { name: 'Ireland', id: 'IE', dialCode: '+353', dialCodeInt: 353 },
  IM: { name: 'Isle of Man', id: 'IM', dialCode: '+44', dialCodeInt: 44 },
  IL: {
    name: 'Israel (‫ישראל‬‎)',
    id: 'IL',
    dialCode: '+972',
    dialCodeInt: 972,
  },
  IT: { name: 'Italy (Italia)', id: 'IT', dialCode: '+39', dialCodeInt: 39 },
  JM: { name: 'Jamaica', id: 'JM', dialCode: '+1', dialCodeInt: 1 },
  JP: { name: 'Japan (日本)', id: 'JP', dialCode: '+81', dialCodeInt: 81 },
  JE: { name: 'Jersey', id: 'JE', dialCode: '+44', dialCodeInt: 44 },
  JO: {
    name: 'Jordan (‫الأردن‬‎)',
    id: 'JO',
    dialCode: '+962',
    dialCodeInt: 962,
  },
  KZ: {
    name: 'Kazakhstan (Казахстан)',
    id: 'KZ',
    dialCode: '+7',
    dialCodeInt: 7,
  },
  KE: { name: 'Kenya', id: 'KE', dialCode: '+254', dialCodeInt: 254 },
  KI: { name: 'Kiribati', id: 'KI', dialCode: '+686', dialCodeInt: 686 },
  XK: { name: 'Kosovo', id: 'XK', dialCode: '+383', dialCodeInt: 383 },
  KW: {
    name: 'Kuwait (‫الكويت‬‎)',
    id: 'KW',
    dialCode: '+965',
    dialCodeInt: 965,
  },
  KG: {
    name: 'Kyrgyzstan (Кыргызстан)',
    id: 'KG',
    dialCode: '+996',
    dialCodeInt: 996,
  },
  LA: { name: 'Laos (ລາວ)', id: 'LA', dialCode: '+856', dialCodeInt: 856 },
  LV: {
    name: 'Latvia (Latvija)',
    id: 'LV',
    dialCode: '+371',
    dialCodeInt: 371,
  },
  LB: {
    name: 'Lebanon (‫لبنان‬‎)',
    id: 'LB',
    dialCode: '+961',
    dialCodeInt: 961,
  },
  LS: { name: 'Lesotho', id: 'LS', dialCode: '+266', dialCodeInt: 266 },
  LR: { name: 'Liberia', id: 'LR', dialCode: '+231', dialCodeInt: 231 },
  LY: {
    name: 'Libya (‫ليبيا‬‎)',
    id: 'LY',
    dialCode: '+218',
    dialCodeInt: 218,
  },
  LI: { name: 'Liechtenstein', id: 'LI', dialCode: '+423', dialCodeInt: 423 },
  LT: {
    name: 'Lithuania (Lietuva)',
    id: 'LT',
    dialCode: '+370',
    dialCodeInt: 370,
  },
  LU: { name: 'Luxembourg', id: 'LU', dialCode: '+352', dialCodeInt: 352 },
  MO: { name: 'Macau (澳門)', id: 'MO', dialCode: '+853', dialCodeInt: 853 },
  MK: {
    name: 'North Macedonia (FYROM) (Македонија)',
    id: 'MK',
    dialCode: '+389',
    dialCodeInt: 389,
  },
  MG: {
    name: 'Madagascar (Madagasikara)',
    id: 'MG',
    dialCode: '+261',
    dialCodeInt: 261,
  },
  MW: { name: 'Malawi', id: 'MW', dialCode: '+265', dialCodeInt: 265 },
  MY: { name: 'Malaysia', id: 'MY', dialCode: '+60', dialCodeInt: 60 },
  MV: { name: 'Maldives', id: 'MV', dialCode: '+960', dialCodeInt: 960 },
  ML: { name: 'Mali', id: 'ML', dialCode: '+223', dialCodeInt: 223 },
  MT: { name: 'Malta', id: 'MT', dialCode: '+356', dialCodeInt: 356 },
  MH: {
    name: 'Marshall Islands',
    id: 'MH',
    dialCode: '+692',
    dialCodeInt: 692,
  },
  MQ: { name: 'Martinique', id: 'MQ', dialCode: '+596', dialCodeInt: 596 },
  MR: {
    name: 'Mauritania (‫موريتانيا‬‎)',
    id: 'MR',
    dialCode: '+222',
    dialCodeInt: 222,
  },
  MU: {
    name: 'Mauritius (Moris)',
    id: 'MU',
    dialCode: '+230',
    dialCodeInt: 230,
  },
  YT: { name: 'Mayotte', id: 'YT', dialCode: '+262', dialCodeInt: 262 },
  MX: { name: 'Mexico (México)', id: 'MX', dialCode: '+52', dialCodeInt: 52 },
  FM: { name: 'Micronesia', id: 'FM', dialCode: '+691', dialCodeInt: 691 },
  MD: {
    name: 'Moldova (Republica Moldova)',
    id: 'MD',
    dialCode: '+373',
    dialCodeInt: 373,
  },
  MC: { name: 'Monaco', id: 'MC', dialCode: '+377', dialCodeInt: 377 },
  MN: {
    name: 'Mongolia (Монгол)',
    id: 'MN',
    dialCode: '+976',
    dialCodeInt: 976,
  },
  ME: {
    name: 'Montenegro (Crna Gora)',
    id: 'ME',
    dialCode: '+382',
    dialCodeInt: 382,
  },
  MS: { name: 'Montserrat', id: 'MS', dialCode: '+1664', dialCodeInt: 1664 },
  MA: {
    name: 'Morocco (‫المغرب‬‎)',
    id: 'MA',
    dialCode: '+212',
    dialCodeInt: 212,
  },
  MZ: {
    name: 'Mozambique (Moçambique)',
    id: 'MZ',
    dialCode: '+258',
    dialCodeInt: 258,
  },
  MM: {
    name: 'Myanmar (Burma) (မြန်မာ)',
    id: 'MM',
    dialCode: '+95',
    dialCodeInt: 95,
  },
  NA: {
    name: 'Namibia (Namibië)',
    id: 'NA',
    dialCode: '+264',
    dialCodeInt: 264,
  },
  NR: { name: 'Nauru', id: 'NR', dialCode: '+674', dialCodeInt: 674 },
  NP: { name: 'Nepal (नेपाल)', id: 'NP', dialCode: '+977', dialCodeInt: 977 },
  NL: {
    name: 'Netherlands (Nederland)',
    id: 'NL',
    dialCode: '+31',
    dialCodeInt: 31,
  },
  NC: {
    name: 'New Caledonia (Nouvelle-Calédonie)',
    id: 'NC',
    dialCode: '+687',
    dialCodeInt: 687,
  },
  NZ: { name: 'New Zealand', id: 'NZ', dialCode: '+64', dialCodeInt: 64 },
  NI: { name: 'Nicaragua', id: 'NI', dialCode: '+505', dialCodeInt: 505 },
  NE: { name: 'Niger (Nijar)', id: 'NE', dialCode: '+227', dialCodeInt: 227 },
  NG: { name: 'Nigeria', id: 'NG', dialCode: '+234', dialCodeInt: 234 },
  NU: { name: 'Niue', id: 'NU', dialCode: '+683', dialCodeInt: 683 },
  NF: { name: 'Norfolk Island', id: 'NF', dialCode: '+672', dialCodeInt: 672 },
  KP: {
    name: 'North Korea (조선 민주주의 인민 공화국)',
    id: 'KP',
    dialCode: '+850',
    dialCodeInt: 850,
  },
  MP: {
    name: 'Northern Mariana Islands',
    id: 'MP',
    dialCode: '+1670',
    dialCodeInt: 1670,
  },
  NO: { name: 'Norway (Norge)', id: 'NO', dialCode: '+47', dialCodeInt: 47 },
  OM: {
    name: 'Oman (‫عُمان‬‎)',
    id: 'OM',
    dialCode: '+968',
    dialCodeInt: 968,
  },
  PK: {
    name: 'Pakistan (‫پاکستان‬‎)',
    id: 'PK',
    dialCode: '+92',
    dialCodeInt: 92,
  },
  PW: { name: 'Palau', id: 'PW', dialCode: '+680', dialCodeInt: 680 },
  PS: {
    name: 'Palestine (‫فلسطين‬‎)',
    id: 'PS',
    dialCode: '+970',
    dialCodeInt: 970,
  },
  PA: {
    name: 'Panama (Panamá)',
    id: 'PA',
    dialCode: '+507',
    dialCodeInt: 507,
  },
  PG: {
    name: 'Papua New Guinea',
    id: 'PG',
    dialCode: '+675',
    dialCodeInt: 675,
  },
  PY: { name: 'Paraguay', id: 'PY', dialCode: '+595', dialCodeInt: 595 },
  PE: { name: 'Peru (Perú)', id: 'PE', dialCode: '+51', dialCodeInt: 51 },
  PH: { name: 'Philippines', id: 'PH', dialCode: '+63', dialCodeInt: 63 },
  PL: { name: 'Poland (Polska)', id: 'PL', dialCode: '+48', dialCodeInt: 48 },
  PT: { name: 'Portugal', id: 'PT', dialCode: '+351', dialCodeInt: 351 },
  PR: { name: 'Puerto Rico', id: 'PR', dialCode: '+1', dialCodeInt: 1 },
  QA: { name: 'Qatar (‫قطر‬‎)', id: 'QA', dialCode: '+974', dialCodeInt: 974 },
  RE: {
    name: 'Réunion (La Réunion)',
    id: 'RE',
    dialCode: '+262',
    dialCodeInt: 262,
  },
  RO: {
    name: 'Romania (România)',
    id: 'RO',
    dialCode: '+40',
    dialCodeInt: 40,
  },
  RU: { name: 'Russia (Россия)', id: 'RU', dialCode: '+7', dialCodeInt: 7 },
  RW: { name: 'Rwanda', id: 'RW', dialCode: '+250', dialCodeInt: 250 },
  BL: {
    name: 'Saint Barthélemy',
    id: 'BL',
    dialCode: '+590',
    dialCodeInt: 590,
  },
  SH: { name: 'Saint Helena', id: 'SH', dialCode: '+290', dialCodeInt: 290 },
  KN: {
    name: 'Saint Kitts and Nevis',
    id: 'KN',
    dialCode: '+1869',
    dialCodeInt: 1869,
  },
  LC: { name: 'Saint Lucia', id: 'LC', dialCode: '+1758', dialCodeInt: 1758 },
  MF: {
    name: 'Saint Martin (Saint-Martin (partie française))',
    id: 'MF',
    dialCode: '+590',
    dialCodeInt: 590,
  },
  PM: {
    name: 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
    id: 'PM',
    dialCode: '+508',
    dialCodeInt: 508,
  },
  VC: {
    name: 'Saint Vincent and the Grenadines',
    id: 'VC',
    dialCode: '+1784',
    dialCodeInt: 1784,
  },
  WS: { name: 'Samoa', id: 'WS', dialCode: '+685', dialCodeInt: 685 },
  SM: { name: 'San Marino', id: 'SM', dialCode: '+378', dialCodeInt: 378 },
  ST: {
    name: 'São Tomé and Príncipe (São Tomé e Príncipe)',
    id: 'ST',
    dialCode: '+239',
    dialCodeInt: 239,
  },
  SA: {
    name: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
    id: 'SA',
    dialCode: '+966',
    dialCodeInt: 966,
  },
  SN: {
    name: 'Senegal (Sénégal)',
    id: 'SN',
    dialCode: '+221',
    dialCodeInt: 221,
  },
  RS: {
    name: 'Serbia (Србија)',
    id: 'RS',
    dialCode: '+381',
    dialCodeInt: 381,
  },
  SC: { name: 'Seychelles', id: 'SC', dialCode: '+248', dialCodeInt: 248 },
  SL: { name: 'Sierra Leone', id: 'SL', dialCode: '+232', dialCodeInt: 232 },
  SG: { name: 'Singapore', id: 'SG', dialCode: '+65', dialCodeInt: 65 },
  SX: { name: 'Sint Maarten', id: 'SX', dialCode: '+1721', dialCodeInt: 1721 },
  SK: {
    name: 'Slovakia (Slovensko)',
    id: 'SK',
    dialCode: '+421',
    dialCodeInt: 421,
  },
  SI: {
    name: 'Slovenia (Slovenija)',
    id: 'SI',
    dialCode: '+386',
    dialCodeInt: 386,
  },
  SB: {
    name: 'Solomon Islands',
    id: 'SB',
    dialCode: '+677',
    dialCodeInt: 677,
  },
  SO: {
    name: 'Somalia (Soomaaliya)',
    id: 'SO',
    dialCode: '+252',
    dialCodeInt: 252,
  },
  ZA: { name: 'South Africa', id: 'ZA', dialCode: '+27', dialCodeInt: 27 },
  KR: {
    name: 'South Korea (대한민국)',
    id: 'KR',
    dialCode: '+82',
    dialCodeInt: 82,
  },
  SS: {
    name: 'South Sudan (‫جنوب السودان‬‎)',
    id: 'SS',
    dialCode: '+211',
    dialCodeInt: 211,
  },
  ES: { name: 'Spain (España)', id: 'ES', dialCode: '+34', dialCodeInt: 34 },
  LK: {
    name: 'Sri Lanka (ශ්‍රී ලංකාව)',
    id: 'LK',
    dialCode: '+94',
    dialCodeInt: 94,
  },
  SD: {
    name: 'Sudan (‫السودان‬‎)',
    id: 'SD',
    dialCode: '+249',
    dialCodeInt: 249,
  },
  SR: { name: 'Suriname', id: 'SR', dialCode: '+597', dialCodeInt: 597 },
  SJ: {
    name: 'Svalbard and Jan Mayen',
    id: 'SJ',
    dialCode: '+47',
    dialCodeInt: 47,
  },
  SZ: { name: 'Swaziland', id: 'SZ', dialCode: '+268', dialCodeInt: 268 },
  SE: { name: 'Sweden (Sverige)', id: 'SE', dialCode: '+46', dialCodeInt: 46 },
  CH: {
    name: 'Switzerland (Schweiz)',
    id: 'CH',
    dialCode: '+41',
    dialCodeInt: 41,
  },
  SY: {
    name: 'Syria (‫سوريا‬‎)',
    id: 'SY',
    dialCode: '+963',
    dialCodeInt: 963,
  },
  TW: { name: 'Taiwan (台灣)', id: 'TW', dialCode: '+886', dialCodeInt: 886 },
  TJ: { name: 'Tajikistan', id: 'TJ', dialCode: '+992', dialCodeInt: 992 },
  TZ: { name: 'Tanzania', id: 'TZ', dialCode: '+255', dialCodeInt: 255 },
  TH: { name: 'Thailand (ไทย)', id: 'TH', dialCode: '+66', dialCodeInt: 66 },
  TL: { name: 'Timor-Leste', id: 'TL', dialCode: '+670', dialCodeInt: 670 },
  TG: { name: 'Togo', id: 'TG', dialCode: '+228', dialCodeInt: 228 },
  TK: { name: 'Tokelau', id: 'TK', dialCode: '+690', dialCodeInt: 690 },
  TO: { name: 'Tonga', id: 'TO', dialCode: '+676', dialCodeInt: 676 },
  TT: {
    name: 'Trinisoad and Tobago',
    id: 'TT',
    dialCode: '+1868',
    dialCodeInt: 1868,
  },
  TN: {
    name: 'Tunisia (‫تونس‬‎)',
    id: 'TN',
    dialCode: '+216',
    dialCodeInt: 216,
  },
  TR: { name: 'Turkey (Türkiye)', id: 'TR', dialCode: '+90', dialCodeInt: 90 },
  TM: { name: 'Turkmenistan', id: 'TM', dialCode: '+993', dialCodeInt: 993 },
  TC: {
    name: 'Turks and Caicos Islands',
    id: 'TC',
    dialCode: '+1649',
    dialCodeInt: 1649,
  },
  TV: { name: 'Tuvalu', id: 'TV', dialCode: '+688', dialCodeInt: 688 },
  VI: {
    name: 'U.S. Virgin Islands',
    id: 'VI',
    dialCode: '+1340',
    dialCodeInt: 1340,
  },
  UG: { name: 'Uganda', id: 'UG', dialCode: '+256', dialCodeInt: 256 },
  UA: {
    name: 'Ukraine (Україна)',
    id: 'UA',
    dialCode: '+380',
    dialCodeInt: 380,
  },
  AE: {
    name: 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
    id: 'AE',
    dialCode: '+971',
    dialCodeInt: 971,
  },
  GB: { name: 'United Kingdom', id: 'GB', dialCode: '+44', dialCodeInt: 44 },
  US: { name: 'United States', id: 'US', dialCode: '+1', dialCodeInt: 1 },
  UY: { name: 'Uruguay', id: 'UY', dialCode: '+598', dialCodeInt: 598 },
  UZ: {
    name: 'Uzbekistan (Oʻzbekiston)',
    id: 'UZ',
    dialCode: '+998',
    dialCodeInt: 998,
  },
  VU: { name: 'Vanuatu', id: 'VU', dialCode: '+678', dialCodeInt: 678 },
  VA: {
    name: 'Vatican City (Città del Vaticano)',
    id: 'VA',
    dialCode: '+39',
    dialCodeInt: 39,
  },
  VE: { name: 'Venezuela', id: 'VE', dialCode: '+58', dialCodeInt: 58 },
  VN: {
    name: 'Vietnam (Việt Nam)',
    id: 'VN',
    dialCode: '+84',
    dialCodeInt: 84,
  },
  WF: {
    name: 'Wallis and Futuna (Wallis-et-Futuna)',
    id: 'WF',
    dialCode: '+681',
    dialCodeInt: 681,
  },
  YE: {
    name: 'Yemen (‫اليمن‬‎)',
    id: 'YE',
    dialCode: '+967',
    dialCodeInt: 967,
  },
  ZM: { name: 'Zambia', id: 'ZM', dialCode: '+260', dialCodeInt: 260 },
  ZW: { name: 'Zimbabwe', id: 'ZW', dialCode: '+263', dialCodeInt: 263 },
  AX: { name: 'Åland Islands', id: 'AX', dialCode: '+358', dialCodeInt: 358 },
} as const;
