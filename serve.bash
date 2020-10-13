deno run --allow-net --allow-read --allow-write server/p2p-enterprise-server.ts

# pm2 start server/p2p-enterprise-server.ts --interpreter="deno" --interpreter-args="run --allow-net --allow-read --allow-write"