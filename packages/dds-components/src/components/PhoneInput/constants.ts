export interface Country {
  name: string;
  id: ISOCountryCode;
  dialCode: string;
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
  | 'EH'
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
  | 'GS'
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
  | 'HM'
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

type Countries = Record<ISOCountryCode, Country>;

// Hentet fra [uber/baseweb](https://github.com/uber/baseweb/)
// Modifisert til å passe våre behov: nummer som int

export const COUNTRIES: Countries = {
  AF: { name: 'Afghanistan (‫افغانستان‬‎)', id: 'AF', dialCode: '+93' },
  AL: { name: 'Albania (Shqipëri)', id: 'AL', dialCode: '+355' },
  DZ: { name: 'Algerie (‫الجزائر‬‎)', id: 'DZ', dialCode: '+213' },
  AS: {
    name: 'Amerikansk Samoa (American Samoa)',
    id: 'AS',
    dialCode: '+1684',
  },
  AD: { name: 'Andorra', id: 'AD', dialCode: '+376' },
  AO: { name: 'Angola', id: 'AO', dialCode: '+244' },
  AI: { name: 'Anguilla', id: 'AI', dialCode: '+1264' },
  AG: {
    name: 'Antigua og Barbuda (Antigua and Barbuda)',
    id: 'AG',
    dialCode: '+1268',
  },
  AR: { name: 'Argentina', id: 'AR', dialCode: '+54' },
  AM: { name: 'Armenia (Հայաստան)', id: 'AM', dialCode: '+374' },
  AW: { name: 'Aruba', id: 'AW', dialCode: '+297' },
  AU: { name: 'Australia', id: 'AU', dialCode: '+61' },
  AT: { name: 'Østerrike (Österreich)', id: 'AT', dialCode: '+43' },
  AZ: { name: 'Aserbajdsjan (Azərbaycan)', id: 'AZ', dialCode: '+994' },
  BS: { name: 'Bahamas', id: 'BS', dialCode: '+1242' },
  BH: { name: 'Bahrain (‫البحرين‬‎)', id: 'BH', dialCode: '+973' },
  BD: { name: 'Bangladesh (বাংলাদেশ)', id: 'BD', dialCode: '+880' },
  BB: { name: 'Barbados', id: 'BB', dialCode: '+1246' },
  BY: { name: 'Belarus (Беларусь)', id: 'BY', dialCode: '+375' },
  BE: { name: 'Belgium (België)', id: 'BE', dialCode: '+32' },
  BZ: { name: 'Belize', id: 'BZ', dialCode: '+501' },
  BJ: { name: 'Benin (Bénin)', id: 'BJ', dialCode: '+229' },
  BM: { name: 'Bermuda', id: 'BM', dialCode: '+1441' },
  BT: { name: 'Bhutan (འབྲུག)', id: 'BT', dialCode: '+975' },
  BO: { name: 'Bolivia', id: 'BO', dialCode: '+591' },
  BA: {
    name: 'Bosnia-Hercegovina (Босна и Херцеговина)',
    id: 'BA',
    dialCode: '+387',
  },
  BW: { name: 'Botswana', id: 'BW', dialCode: '+267' },
  BR: { name: 'Brasil', id: 'BR', dialCode: '+55' },
  IO: {
    name: 'Det britiske territoriet i Indiahavet (British Indian Ocean Territory)',
    id: 'IO',
    dialCode: '+246',
  },
  VG: {
    name: 'Britiske Jomfruøyer (British Virgin Islands)',
    id: 'VG',
    dialCode: '+1284',
  },
  BN: { name: 'Brunei', id: 'BN', dialCode: '+673' },
  BG: { name: 'Bulgaria (България)', id: 'BG', dialCode: '+359' },
  BF: { name: 'Burkina Faso', id: 'BF', dialCode: '+226' },
  BI: { name: 'Burundi (Uburundi)', id: 'BI', dialCode: '+257' },
  KH: { name: 'Kambodsja (កម្ពុជា)', id: 'KH', dialCode: '+855' },
  CM: { name: 'Kamerun (Cameroun)', id: 'CM', dialCode: '+237' },
  CA: { name: 'Canada', id: 'CA', dialCode: '+1' },
  CV: { name: 'Kapp Verde (Kabu Verdi)', id: 'CV', dialCode: '+238' },
  KY: { name: 'Caymanøyene (Cayman Islands)', id: 'KY', dialCode: '+1345' },
  CF: {
    name: 'Den sentralafrikanske republikk (République centrafricaine)',
    id: 'CF',
    dialCode: '+236',
  },
  TD: { name: 'Tsjad (Tchad)', id: 'TD', dialCode: '+235' },
  CL: { name: 'Chile', id: 'CL', dialCode: '+56' },
  CN: { name: 'Kina (中国)', id: 'CN', dialCode: '+86' },
  CX: { name: 'Christmasøya (Christmas Island)', id: 'CX', dialCode: '+61' },
  CC: {
    name: 'Kokosøyene (Cocos (Keeling) Islands)',
    id: 'CC',
    dialCode: '+61',
  },
  CO: { name: 'Colombia', id: 'CO', dialCode: '+57' },
  KM: { name: 'Komorene (‫جزر القمر‬‎)', id: 'KM', dialCode: '+269' },
  CD: {
    name: 'Kongo, den demokratiske republikken (République démocratique du Congo)',
    id: 'CD',
    dialCode: '+243',
  },
  CG: {
    name: 'Kongo, republikken (République du Congo)',
    id: 'CG',
    dialCode: '+242',
  },
  CK: { name: 'Cookøyene (Cook Islands)', id: 'CK', dialCode: '+682' },
  CR: { name: 'Costa Rica', id: 'CR', dialCode: '+506' },
  CI: { name: 'Elfenbenskysten (Côte d’Ivoire)', id: 'CI', dialCode: '+225' },
  HR: { name: 'Kroatia (Hrvatska)', id: 'HR', dialCode: '+385' },
  CU: { name: 'Cuba', id: 'CU', dialCode: '+53' },
  CW: { name: 'Curaçao', id: 'CW', dialCode: '+599' },
  CY: { name: 'Kypros (Κύπρος)', id: 'CY', dialCode: '+357' },
  CZ: { name: 'Tsjekkia (Česká republika)', id: 'CZ', dialCode: '+420' },
  DK: { name: 'Danmark', id: 'DK', dialCode: '+45' },
  DJ: { name: 'Djibouti', id: 'DJ', dialCode: '+253' },
  DM: { name: 'Dominica', id: 'DM', dialCode: '+1767' },
  DO: {
    name: 'Den dominikanske republikk (República Dominicana)',
    id: 'DO',
    dialCode: '+1',
  },
  EC: { name: 'Ecuador', id: 'EC', dialCode: '+593' },
  EG: { name: 'Egypt (‫مصر‬‎)', id: 'EG', dialCode: '+20' },
  SV: { name: 'El Salvador', id: 'SV', dialCode: '+503' },
  GQ: {
    name: 'Ekvatorial-Guinea (Guinea Ecuatorial)',
    id: 'GQ',
    dialCode: '+240',
  },
  ER: { name: 'Eritrea', id: 'ER', dialCode: '+291' },
  EE: { name: 'Estland (Eesti)', id: 'EE', dialCode: '+372' },
  ET: { name: 'Etiopia (ኢትዮጵያ)', id: 'ET', dialCode: '+251' },
  FK: { name: 'Falklandsøyene (Islas Malvinas)', id: 'FK', dialCode: '+500' },
  FO: { name: 'Færøyene (Føroyar)', id: 'FO', dialCode: '+298' },
  FJ: { name: 'Fiji', id: 'FJ', dialCode: '+679' },
  FI: { name: 'Finland (Suomi)', id: 'FI', dialCode: '+358' },
  FR: { name: 'Frankrike (France)', id: 'FR', dialCode: '+33' },
  GF: { name: 'Fransk Guyana (Guyane française)', id: 'GF', dialCode: '+594' },
  PF: {
    name: 'Fransk Polynesia (Polynésie française)',
    id: 'PF',
    dialCode: '+689',
  },
  GA: { name: 'Gabon', id: 'GA', dialCode: '+241' },
  GM: { name: 'Gambia', id: 'GM', dialCode: '+220' },
  GE: { name: 'Georgia (საქართველო)', id: 'GE', dialCode: '+995' },
  DE: { name: 'Tyskland (Deutschland)', id: 'DE', dialCode: '+49' },
  GH: { name: 'Ghana (Gaana)', id: 'GH', dialCode: '+233' },
  GI: { name: 'Gibraltar', id: 'GI', dialCode: '+350' },
  GR: { name: 'Hellas (Ελλάδα)', id: 'GR', dialCode: '+30' },
  GL: { name: 'Grønland  (Kalaallit Nunaat)', id: 'GL', dialCode: '+299' },
  GD: { name: 'Grenada', id: 'GD', dialCode: '+1473' },
  GP: { name: 'Guadeloupe', id: 'GP', dialCode: '+590' },
  GU: { name: 'Guam', id: 'GU', dialCode: '+1671' },
  GT: { name: 'Guatemala', id: 'GT', dialCode: '+502' },
  GG: { name: 'Guernsey', id: 'GG', dialCode: '+44' },
  GN: { name: 'Guinea (Guinée)', id: 'GN', dialCode: '+224' },
  GW: { name: 'Guinea-Bissau (Guiné-Bissau)', id: 'GW', dialCode: '+245' },
  GY: { name: 'Guyana', id: 'GY', dialCode: '+592' },
  HT: { name: 'Haiti', id: 'HT', dialCode: '+509' },
  HM: {
    name: 'Heard- og McDonaldøyene (Heard Island and McDonald Islands)',
    id: 'HM',
    dialCode: '+672',
  },
  VA: {
    name: 'Vatikanstaten (Città del Vaticano)',
    id: 'VA',
    dialCode: '+379',
  },
  HN: { name: 'Honduras', id: 'HN', dialCode: '+504' },
  HK: { name: 'Hongkong (香港)', id: 'HK', dialCode: '+852' },
  HU: { name: 'Ungarn (Magyarország)', id: 'HU', dialCode: '+36' },
  IS: { name: 'Island (Ísland)', id: 'IS', dialCode: '+354' },
  IN: { name: 'India (भारत)', id: 'IN', dialCode: '+91' },
  ID: { name: 'Indonesia', id: 'ID', dialCode: '+62' },
  IR: { name: 'Iran (‫ایران‬‎)', id: 'IR', dialCode: '+98' },
  IQ: { name: 'Irak (‫العراق‬‎)', id: 'IQ', dialCode: '+964' },
  IE: { name: 'Irland (Éire)', id: 'IE', dialCode: '+353' },
  IM: { name: 'Man (Isle of Man)', id: 'IM', dialCode: '+44' },
  IL: { name: 'Israel (‫ישראל‬‎)', id: 'IL', dialCode: '+972' },
  IT: { name: 'Italia', id: 'IT', dialCode: '+39' },
  JM: { name: 'Jamaica', id: 'JM', dialCode: '+1' },
  JP: { name: 'Japan (日本)', id: 'JP', dialCode: '+81' },
  JE: { name: 'Jersey', id: 'JE', dialCode: '+44' },
  JO: { name: 'Jordan (‫الأردن‬‎)', id: 'JO', dialCode: '+962' },
  KZ: { name: 'Kasakhstan (Қазақстан)', id: 'KZ', dialCode: '+7' },
  KE: { name: 'Kenya', id: 'KE', dialCode: '+254' },
  KI: { name: 'Kiribati', id: 'KI', dialCode: '+686' },
  XK: { name: 'Kosovo', id: 'XK', dialCode: '+383' },
  KW: { name: 'Kuwait (‫الكويت‬‎)', id: 'KW', dialCode: '+965' },
  KG: { name: 'Kirgisistan (Кыргызстан)', id: 'KG', dialCode: '+996' },
  LA: { name: 'Laos (ລາວ)', id: 'LA', dialCode: '+856' },
  LV: { name: 'Latvia (Latvija)', id: 'LV', dialCode: '+371' },
  LB: { name: 'Libanon (‫لبنان‬‎)', id: 'LB', dialCode: '+961' },
  LS: { name: 'Lesotho', id: 'LS', dialCode: '+266' },
  LR: { name: 'Liberia', id: 'LR', dialCode: '+231' },
  LY: { name: 'Libya (‫ليبيا‬‎)', id: 'LY', dialCode: '+218' },
  LI: { name: 'Liechtenstein', id: 'LI', dialCode: '+423' },
  LT: { name: 'Litauen (Lietuva)', id: 'LT', dialCode: '+370' },
  LU: { name: 'Luxembourg', id: 'LU', dialCode: '+352' },
  MO: { name: 'Macao (澳門)', id: 'MO', dialCode: '+853' },
  MK: {
    name: 'Nord-Makedonia (Македонија)',
    id: 'MK',
    dialCode: '+389',
  },
  MG: { name: 'Madagaskar (Madagasikara)', id: 'MG', dialCode: '+261' },
  MW: { name: 'Malawi', id: 'MW', dialCode: '+265' },
  MY: { name: 'Malaysia', id: 'MY', dialCode: '+60' },
  MV: {
    name: 'Maldivene (ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ)',
    id: 'MV',
    dialCode: '+960',
  },
  ML: { name: 'Mali', id: 'ML', dialCode: '+223' },
  MT: { name: 'Malta', id: 'MT', dialCode: '+356' },
  MH: { name: 'Marshalløyene (Marshall Islands)', id: 'MH', dialCode: '+692' },
  MQ: { name: 'Martinique', id: 'MQ', dialCode: '+596' },
  MR: { name: 'Mauritania (‫موريتانيا‬‎)', id: 'MR', dialCode: '+222' },
  MU: { name: 'Mauritius (Moris)', id: 'MU', dialCode: '+230' },
  YT: { name: 'Mayotte', id: 'YT', dialCode: '+262' },
  MX: { name: 'Mexico (México)', id: 'MX', dialCode: '+52' },
  FM: { name: 'Mikronesia (Micronesia)', id: 'FM', dialCode: '+691' },
  MD: { name: 'Moldova (Republica Moldova)', id: 'MD', dialCode: '+373' },
  MC: { name: 'Monaco', id: 'MC', dialCode: '+377' },
  MN: { name: 'Mongolia (Монгол)', id: 'MN', dialCode: '+976' },
  ME: { name: 'Montenegro (Crna Gora)', id: 'ME', dialCode: '+382' },
  MS: { name: 'Montserrat', id: 'MS', dialCode: '+1664' },
  MA: { name: 'Marokko (‫المغرب‬‎)', id: 'MA', dialCode: '+212' },
  MZ: { name: 'Mosambik (Moçambique)', id: 'MZ', dialCode: '+258' },
  MM: { name: 'Myanmar (မြန်မာ)', id: 'MM', dialCode: '+95' },
  NA: { name: 'Namibia', id: 'NA', dialCode: '+264' },
  NR: { name: 'Nauru', id: 'NR', dialCode: '+674' },
  NP: { name: 'Nepal (नेपाल)', id: 'NP', dialCode: '+977' },
  NL: { name: 'Nederland', id: 'NL', dialCode: '+31' },
  NC: { name: 'Ny-Caledonia (Nouvelle-Calédonie)', id: 'NC', dialCode: '+687' },
  NZ: { name: 'New Zealand', id: 'NZ', dialCode: '+64' },
  NI: { name: 'Nicaragua', id: 'NI', dialCode: '+505' },
  NE: { name: 'Niger (Nijar)', id: 'NE', dialCode: '+227' },
  NG: { name: 'Nigeria', id: 'NG', dialCode: '+234' },
  NU: { name: 'Niue', id: 'NU', dialCode: '+683' },
  NF: { name: 'Norfolk Island', id: 'NF', dialCode: '+672' },
  KP: {
    name: 'Nord-Korea (조선 민주주의 인민 공화국)',
    id: 'KP',
    dialCode: '+850',
  },
  MP: {
    name: 'Nord-Marianene (Northern Mariana Islands)',
    id: 'MP',
    dialCode: '+1670',
  },
  NO: { name: 'Norge', id: 'NO', dialCode: '+47' },
  OM: { name: 'Oman (‫عُمان‬‎)', id: 'OM', dialCode: '+968' },
  PK: { name: 'Pakistan (‫پاکستان‬‎)', id: 'PK', dialCode: '+92' },
  PW: { name: 'Palau', id: 'PW', dialCode: '+680' },
  PS: {
    name: 'Palestina (‫فلسطين‬‎)',
    id: 'PS',
    dialCode: '+970',
  },
  PA: { name: 'Panama (Panamá)', id: 'PA', dialCode: '+507' },
  PG: {
    name: 'Papua Ny-Guinea (Papua New Guinea)',
    id: 'PG',
    dialCode: '+675',
  },
  PY: { name: 'Paraguay', id: 'PY', dialCode: '+595' },
  PE: { name: 'Peru (Perú)', id: 'PE', dialCode: '+51' },
  PH: { name: 'Filippinene (Philippines)', id: 'PH', dialCode: '+63' },
  PL: { name: 'Polen (Polska)', id: 'PL', dialCode: '+48' },
  PT: { name: 'Portugal', id: 'PT', dialCode: '+351' },
  PR: { name: 'Puerto Rico', id: 'PR', dialCode: '+1' },
  QA: { name: 'Qatar (‫قطر‬‎)', id: 'QA', dialCode: '+974' },
  RE: { name: 'Réunion', id: 'RE', dialCode: '+262' },
  RO: { name: 'Romania (România)', id: 'RO', dialCode: '+40' },
  RU: { name: 'Russland (Россия)', id: 'RU', dialCode: '+7' },
  RW: { name: 'Rwanda', id: 'RW', dialCode: '+250' },
  BL: {
    name: 'Saint Barthélemy',
    id: 'BL',
    dialCode: '+590',
  },
  SH: { name: 'St. Helena (Saint Helena)', id: 'SH', dialCode: '+290' },
  KN: {
    name: 'Saint Kitts og Nevis (Saint Kitts and Nevis)',
    id: 'KN',
    dialCode: '+1869',
  },
  LC: { name: 'Saint Lucia', id: 'LC', dialCode: '+1758' },
  MF: {
    name: 'Saint-Martin (Collectivité de Saint-Martin)',
    id: 'MF',
    dialCode: '+590',
  },
  PM: {
    name: 'Saint Pierre og Miquelon (Saint-Pierre-et-Miquelon)',
    id: 'PM',
    dialCode: '+508',
  },
  VC: {
    name: 'Saint Vincent og Grenadinene (Saint Vincent and the Grenadines)',
    id: 'VC',
    dialCode: '+1784',
  },
  WS: { name: 'Samoa', id: 'WS', dialCode: '+685' },
  SM: { name: 'San Marino', id: 'SM', dialCode: '+378' },
  ST: {
    name: 'São Tomé og Príncipe (São Tomé e Príncipe)',
    id: 'ST',
    dialCode: '+239',
  },
  SA: {
    name: 'Saudi-Arabia (المملكة العربية السعودية)',
    id: 'SA',
    dialCode: '+966',
  },
  SN: { name: 'Senegal (Sénégal)', id: 'SN', dialCode: '+221' },
  RS: { name: 'Serbia (Србија)', id: 'RS', dialCode: '+381' },
  SC: { name: 'Seychellene (Seychelles)', id: 'SC', dialCode: '+248' },
  SL: { name: 'Sierra Leone', id: 'SL', dialCode: '+232' },
  SG: { name: 'Singapore', id: 'SG', dialCode: '+65' },
  SX: { name: 'Sint Maarten', id: 'SX', dialCode: '+1721' },
  SK: { name: 'Slovakia (Slovensko)', id: 'SK', dialCode: '+421' },
  SI: { name: 'Slovenia (Slovenija)', id: 'SI', dialCode: '+386' },
  SB: { name: 'Salomonøyene (Solomon Islands)', id: 'SB', dialCode: '+677' },
  SO: { name: 'Somalia (Soomaaliya)', id: 'SO', dialCode: '+252' },
  ZA: { name: 'Sør-Afrika (South Africa)', id: 'ZA', dialCode: '+27' },
  GS: {
    name: 'Sør-Georgia og Sør-Sandwichøyene (South Georgia and the South Sandwich Islands)',
    id: 'GS',
    dialCode: '+500',
  },
  KR: {
    name: 'Sør-Korea (대한민국)',
    id: 'KR',
    dialCode: '+82',
  },
  SS: { name: 'Sør-Sudan  (‫جنوب السودان‬‎)', id: 'SS', dialCode: '+211' },
  ES: { name: 'Spania (España)', id: 'ES', dialCode: '+34' },
  LK: { name: 'Sri Lanka (ශ්‍රී ලංකාව)', id: 'LK', dialCode: '+94' },
  SD: { name: 'Sudan (السودان)', id: 'SD', dialCode: '+249' },
  SR: { name: 'Surinam (Suriname)', id: 'SR', dialCode: '+597' },
  SJ: { name: 'Svalbard og Jan Mayen', id: 'SJ', dialCode: '+47' },
  SZ: { name: 'Eswatini', id: 'SZ', dialCode: '+268' },
  SE: { name: 'Sverige', id: 'SE', dialCode: '+46' },
  CH: { name: 'Sveits (Schweiz)', id: 'CH', dialCode: '+41' },
  SY: { name: 'Syria (‫سوريا‬‎)', id: 'SY', dialCode: '+963' },
  TW: { name: 'Taiwan (台灣)', id: 'TW', dialCode: '+886' },
  TJ: { name: 'Tadsjikistan (Таджикистан)', id: 'TJ', dialCode: '+992' },
  TZ: { name: 'Tanzania', id: 'TZ', dialCode: '+255' },
  TH: { name: 'Thailand (ไทย)', id: 'TH', dialCode: '+66' },
  TL: { name: 'Øst-Timor (Timor-Leste)', id: 'TL', dialCode: '+670' },
  TG: { name: 'Togo', id: 'TG', dialCode: '+228' },
  TK: { name: 'Tokelau', id: 'TK', dialCode: '+690' },
  TO: { name: 'Tonga', id: 'TO', dialCode: '+676' },
  TT: {
    name: 'Trinidad og Tobago (Trinidad and Tobago)',
    id: 'TT',
    dialCode: '+1868',
  },
  TN: { name: 'Tunisia (‫تونس‬‎)', id: 'TN', dialCode: '+216' },
  TR: { name: 'Tyrkia (Türkiye)', id: 'TR', dialCode: '+90' },
  TM: { name: 'Turkmenistan', id: 'TM', dialCode: '+993' },
  TC: {
    name: 'Turks- og Caicosøyene (Turks and Caicos Islands)',
    id: 'TC',
    dialCode: '+1649',
  },
  TV: { name: 'Tuvalu', id: 'TV', dialCode: '+688' },
  VI: {
    name: 'De amerikanske Jomfruøyer (U.S. Virgin Islands)',
    id: 'VI',
    dialCode: '+1340',
  },
  UG: { name: 'Uganda', id: 'UG', dialCode: '+256' },
  UA: { name: 'Ukraina (Україна)', id: 'UA', dialCode: '+380' },
  AE: {
    name: 'De forente arabiske emirater (‫الإمارات العربية المتحدة‬‎)',
    id: 'AE',
    dialCode: '+971',
  },
  GB: { name: 'Storbritannia (United Kingdom)', id: 'GB', dialCode: '+44' },
  US: { name: 'USA (United States)', id: 'US', dialCode: '+1' },
  UY: { name: 'Uruguay', id: 'UY', dialCode: '+598' },
  UZ: { name: 'Usbekistan (Ўзбекистон)', id: 'UZ', dialCode: '+998' },
  VU: { name: 'Vanuatu', id: 'VU', dialCode: '+678' },
  VE: { name: 'Venezuela', id: 'VE', dialCode: '+58' },
  VN: { name: 'Vietnam (Việt Nam)', id: 'VN', dialCode: '+84' },
  EH: { name: 'Vest-Sahara (Western Sahara)', id: 'EH', dialCode: '+212' },
  WF: {
    name: 'Wallis- og Futunaøyene  (Wallis-et-Futuna)',
    id: 'WF',
    dialCode: '+681',
  },
  YE: { name: 'Yemen (‫اليمن‬‎)', id: 'YE', dialCode: '+967' },
  ZM: { name: 'Zambia', id: 'ZM', dialCode: '+260' },
  ZW: { name: 'Zimbabwe', id: 'ZW', dialCode: '+263' },
  AX: { name: 'Åland', id: 'AX', dialCode: '+358' },
};
