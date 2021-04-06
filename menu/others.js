const a = '```'
const others = (prefix, pushname2, groupName, user, name) => {
return `
╭───「 *REGULATION ${name}* 」──
├
├   ${a}NAMA USER:${a} *${pushname2}*
├   ${a}NAMA GRUP:${a} *${groupName}*
├   ${a}VERSION:${a} *0.0.0*
├   ${a}USER TERDAFTAR:${a} *${user.length} User*
├
╰────────────────────────

╭────「 *OTHERS MENU* 」──────────

[+] *${prefix}testime*
[+] *${prefix}quotes*
[+] *${prefix}bucin*
[+] *${prefix}bacotandilan*
[+] *${prefix}hekerbucin*
[+] *${prefix}katailham*
[+] *${prefix}wait*
       Check anime, reply gambar

╰────────────────────────

╭────「 *ISLAMIC MENU* 」─────────

[+] *${prefix}listsurah*

╰────────────────────────

${a} TELEGRAM = ${a} *https://t.me/JSTFREENET*
`
}
exports.others = others
