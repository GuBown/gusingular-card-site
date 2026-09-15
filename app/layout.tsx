import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '顾沐锐 · Gu Morey | GuSingular',
  description: '上海顾极智舟国际贸易有限公司总经理顾沐锐的电子名片。',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f2eeeb' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
