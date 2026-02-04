
export default function handler(req, res) {
  const redirect = `https://discord.com/oauth2/authorize` +
    `?client_id=1461438572081971386` +
    `&response_type=code` +
    `&redirect_uri=https://syntaxbot.vercel.app/api/callback` +
    `&scope=identify%20guilds`;

  res.writeHead(302, { Location: redirect });
  res.end();
}
