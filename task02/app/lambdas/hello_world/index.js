const ALLOWED_METHOD = 'GET';
const ALLOWED_PATH = '/hello';

exports.handler = async (event) => {
  const method = event?.requestContext?.http?.method;
  const path = event?.requestContext?.http?.path;

  if (method !== ALLOWED_METHOD || path !== ALLOWED_PATH) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`,
      }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Hello from Lambda',
    }),
  };
};
