const a = '```'
const groupp = (prefix, pushname2, groupName, user, name, uptime, jam, tanggal, premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx) => {
return `
╭───「 *REGULATION ${name}* 」────
├
├   ${a}NAMA USER:${a} *${pushname2}*
├   ${a}CEK PREMIUM:${a} ${premi}
├   ${a}LIMIT:${a} *${limitt} perhari*
│
├   ${a}NAMA GRUP:${a} *${groupName}*
├   ${a}MODE WELCOME:${a} *${Welcomee}*
├   ${a}MODE ANTI BADWORD:${a} *${BadWordd}*
├   ${a}MODE ANTI LINK:${a} *${AntiLinkk}*
├   ${a}MODE ANTI VIRTEX:${a} *${AntiVirtexx}*
│
├   ${a}JAM:${a} *${jam} WIB*
├   ${a}TANGGAL:${a} *${tanggal}*
├   ${a}AKTIF:${a} ${kyun(uptime)}
├   ${a}VERSION:${a} *0.0.0*
├   ${a}USER TERDAFTAR:${a} *${user.length} User*
├
╰────────────────────────

╭──「 *AKTIFKAN JIKA DIPERLUKAN* 」

[+] *${prefix}antilink On/Off*
[+] *${prefix}welcome On/Off*
[+] *${prefix}grup buka/tutup*
[+] *${prefix}antivirtex on/off*
[+] *${prefix}badword on/off*

╰────────────────────────

╭───「 *GROUP ONLY ADMIN* 」──

[+] *${prefix}fitnah @mentioned/isi/balasan*
[+] *${prefix}ownergrup*
[+] *${prefix}setpp*
[+] *${prefix}infogrup*
[+] *${prefix}add 628xxxxxxxxxx*
[+] *${prefix}kick @mentioned*
[+] *${prefix}kicktime @mentioned*
[+] *${prefix}promote @mentioned*
[+] *${prefix}demote @mentioned*
[+] *${prefix}setname*
[+] *${prefix}setdesc*
[+] *${prefix}linkgrup*
[+] *${prefix}tagme*
[+] *${prefix}wame*
[+] *${prefix}hidetag*
[+] *${prefix}tagall*
[+] *${prefix}mentionall*
[+] *${prefix}adminlist*

╰────────────────────────

${a} TELEGRAM = ${a} *https://t.me/JSTFREENET*
`
}
exports.groupp = groupp

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}
