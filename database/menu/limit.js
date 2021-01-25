const limit = (prefix, botName, ownerName) => {
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
◪ *LIMIT*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}bal
  └─ ❏ ${prefix}buylimit
--------------------------------
Nota: Você pode comprar limites recolhendo dinheiro primeiro.  Verifique seu dinheiro digitando comandos *${prefix}bal* , harga 1 limit = 1000 uang.`
}
exports.limit = limit
