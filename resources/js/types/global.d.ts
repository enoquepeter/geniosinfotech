declare module 'react-helmet';
declare module 'react-day-picker';
declare module 'recharts';
declare module 'vaul';

declare global {
  interface Window {
    fbq?: (action: string, event: string) => void;
  }
}

export {};
