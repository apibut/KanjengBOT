const a = '```'
const primbon = (prefix, pushname2, groupName, user, name) => {
return `
╭───「 *REGULATION ${name}* 」────
├
├   ${a}NAMA USER:${a} *${pushname2}*
├   ${a}NAMA GRUP:${a} *${groupName}*
├   ${a}VERSION:${a} *0.0.0*
├   ${a}USER TERDAFTAR:${a} *${user.length} User*
├
╰────────────────────────

╭───「 *PRIMBON MENU* 」

[+] *${prefix}apakah aku ganteng?*
[+] *${prefix}kapankah aku menikah?*
[+] *${prefix}bisakah aku memilikimu?*
[+] *${prefix}rate reply something*
[+] *${prefix}watak adul*
[+] *${prefix}hobby adul*
[+] *${prefix}gantengcek adul*
[+] *${prefix}cantikcek Raisa*
[+] *${prefix}persengay adul*
[+] *${prefix}pbucin adul*

╰────────────────────────

${a} TELEGRAM = ${a} *https://t.me/JSTFREENET*
` 
}
exports.primbon = primbon
