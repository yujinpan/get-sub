import dotenv from 'dotenv';
import fs from 'fs';
import * as glob from 'glob';

import type { RequestHandler } from 'express';

dotenv.config({ path: `.env` });
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: `.env.local`, override: true });
} else {
  dotenv.config({ path: `.env.development`, override: true });
}

export const getSub: RequestHandler = (req, res) => {
  const token = req.query.token;

  if (token !== process.env.TOKEN) {
    return res.status(400).send('Token invalid.');
  }

  const result = getV2RaySubResult(req.ip);

  return res.send(result);
};

type V2RayInbound = {
  tag: string;
  port: number;
  protocol: string;
  settings: {
    clients: { id: string }[];
  };
};

export function getV2RaySubResult(ip: string): string {
  const v2rayConfigPath = process.env.V2RAY_CONFIG_PATH || '/etc/v2ray/conf';
  const configs: V2RayInbound[] = glob
    .sync(`${v2rayConfigPath}/*.json`)
    .flatMap((file: string) => {
      return JSON.parse(fs.readFileSync(file).toString()).inbounds;
    });
  const result = configs
    .map((item) => {
      const {
        tag,
        port,
        protocol,
        settings: { clients },
      } = item;
      const password = clients[0].id;

      if (protocol === 'vmess') {
        const params = base64Encode(
          JSON.stringify({ ps: tag, port, id: password, add: ip }),
        );
        return `${protocol}://${params}`;
      } else {
        const params = base64Encode(`aes-256-gcm:${password}@${ip}:${port}`);
        return `${protocol}://${params}#${tag}`;
      }
    })
    .join('\n');

  return base64Encode(result);
}

function base64Encode(text: string) {
  return Buffer.from(text).toString('base64');
}
