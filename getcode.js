let getcode = async (m, { conn, usedPrefix, isOwner }) => {
  if (global.conn.user.jid == conn.user.jid || !isOwner) return await conn.sendButton(m.chat, 'this command is only for bots', wm, 'Become a Bot', '.bot', m)
  else {
    global.conn.reply(conn.user.jid, `${usedPrefix}bot ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, m)
    global.conn.reply(conn.user.jid, `${JSON.stringify(conn.base64EncodedAuthInfo())}`, m)
  }
}
getcode.help = ['getcode']
getcode.tags = ['jadibot']
getcode.command = /^(getcode)$/i
