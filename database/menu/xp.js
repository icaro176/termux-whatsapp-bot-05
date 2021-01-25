const xp = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
  ❏ Version: 0.0.4
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *XP*
  │
  ├─ ❏ ${prefix}leveling
  ├─ ❏ ${prefix}level
  └─ ❏ ${prefix}mining
--------------------------------
Nota: Você pode coletar XP e aumentar seu nível conversando com qualquer pessoa do grupo que tenha ativado o recurso de nivelamento.`
}
exports.xp = xp
