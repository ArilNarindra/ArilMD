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
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒂",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒂𝒚",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒂𝒚𝒍",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒂𝒚𝒍𝒂",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒂𝒚𝒍𝒂𝒂",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒂𝒚𝒍𝒂𝒂𝒂",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒂𝒚𝒍𝒂𝒂",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒂𝒚𝒍𝒂",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒂𝒚𝒍",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒂𝒚",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲𝒂",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑲",
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