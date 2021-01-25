const imagemaker = (prefix, botName, ownerName) => {
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
◪ *IMAGEM CRIADOR*
  │
  ├─ ❏ ${prefix}bpink
  ├─ ❏ ${prefix}snowwrite
  ├─ ❏ ${prefix}3dtext
  ├─ ❏ ${prefix}firetext
  ├─ ❏ ${prefix}glitch
  ├─ ❏ ${prefix}shadow
  ├─ ❏ ${prefix}burnpaper
  ├─ ❏ ${prefix}coffee
  ├─ ❏ ${prefix}lovepaper
  ├─ ❏ ${prefix}woodblock
  ├─ ❏ ${prefix}qowheart
  ├─ ❏ ${prefix}mutgrass
  ├─ ❏ ${prefix}undergocean
  ├─ ❏ ${prefix}woodenboards
  ├─ ❏ ${prefix}wolfmetal
  ├─ ❏ ${prefix}metalictglow
  ├─ ❏ ${prefix}8bit
  ├─ ❏ ${prefix}herrypotter
  └─ ❏ ${prefix}quotemaker`
}
exports.imagemaker = imagemaker
