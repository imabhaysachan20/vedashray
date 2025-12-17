import { Calistoga,Montserrat } from 'next/font/google';


export const calistoga = Calistoga({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});