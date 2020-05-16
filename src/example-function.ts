import { Callback, Context} from 'aws-lambda'
import { Payload } from './models/payload';

import 'source-map-support/register';

export const handler = (event: Payload, _context: Context, callback: Callback) => {
  const { content } = event;

  const response: Payload = { content: `${content} World!` };

  callback(null, response);
}
