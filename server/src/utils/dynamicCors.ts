import { isLocal, isVercel, isProd } from '../constants';

const hostname =
  typeof window !== 'undefined' && window.location.hostname
    ? window.location.hostname
    : '';

export const dynamicCors = (() => {
  if (hostname.includes(isProd)) {
    console.log('prod');
    return process.env.CORS_ORIGIN;
  }
  if (hostname.includes(isVercel)) {
    console.log('vercel');
    return process.env.CORS_ORIGIN;
  }
  if (hostname.includes(isLocal)) {
    console.log('local');
    return process.env.CORS_ORIGIN_LOCAL;
  }

  return process.env.CORS_ORIGIN_LOCAL;
})();
