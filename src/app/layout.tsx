import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Bống Xinh - Trà Tắc & Mì',
    description: 'Thưởng thức trà tắc và mì ngon tuyệt từ Bống Xinh. Đặt hàng ngay!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}