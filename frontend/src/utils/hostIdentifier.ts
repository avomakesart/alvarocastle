import { isLocal, isVercel, isProd } from './constants';

const hostname =
  typeof window !== 'undefined' && window.location.hostname
    ? window.location.hostname
    : '';

export const hostIdentifier = (() => {
  if (hostname.includes(isProd)) {
    console.log('prod');
    return process.env.NEXT_PUBLIC_API_URL;
  }
  if (hostname.includes(isVercel)) {
    console.log('vercel');
    return process.env.NEXT_PUBLIC_API_URL;
  }
  if (hostname.includes(isLocal)) {
    console.log('local');
    return process.env.NEXT_PUBLIC_API_URL_LOCAL;
  }

  return process.env.NEXT_PUBLIC_API_URL_LOCAL;
})();
