const WEB_WORKER_IDENTIFIER = 'WEB_WORKER';

self.onmessage = msg => {
  const data = msg.data || {};

  switch (data.type) {
    case 'MSG':
      console.log('[w] :', data.date);
      break;
  }
};
