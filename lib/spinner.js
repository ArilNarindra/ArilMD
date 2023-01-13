var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"𝑪",
"𝑪𝒓",
"𝑪𝒓𝒆",
"𝑪𝒓𝒆𝒂",
"𝑪𝒓𝒆𝒂𝒕",
"𝑪𝒓𝒆𝒂𝒕𝒆",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 A",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Ar",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Ari",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Aril",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Arill",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Arilll",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Arill",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Aril",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Ari",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Ar",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 A",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅",
"𝑪𝒓𝒆𝒂𝒕𝒆",
"𝑪𝒓𝒆𝒂𝒕",
"𝑪𝒓𝒆𝒂",
"𝑪𝒓𝒆",
"𝑪𝒓",
"𝑪",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}
