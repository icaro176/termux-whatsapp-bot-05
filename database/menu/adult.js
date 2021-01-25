const adult = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Criador: ${ownerName}
  ❏ Versão: 0.0.4
◪ *SOBRE*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *18+*
  |
  ├─ ❏ ${prefix}randomhentai
  ├─ ❏ ${prefix}nsfwtrap
  └─ ❏ ${prefix}nsfwneko`
}
exports.adult = adult
