const downloader = (prefix, botName, ownerName) => {
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
◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}pinterest
  ├─ ❏ ${prefix}ytmp3
  ├─ ❏ ${prefix}ytmp4
  └─ ❏ ${prefix}tiktok`
}
exports.downloader = downloader
