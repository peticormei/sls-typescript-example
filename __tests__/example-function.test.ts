import * as lambdaWrapper from 'lambda-wrapper';
import * as exampleFunction from '../src/example-function'

import { Payload } from '../src/models/payload';

const lambda = lambdaWrapper.wrap(exampleFunction);

describe('Lambda: Example Function', () => {
    it('should return "Hello World!"', async () => {
        const payload: Payload = { content: 'Hello' };

        const response: Payload = await lambda.run(payload);

        expect('Hello World!').toBe(response.content);
    });
});
