import { Download, Mail, MessageCircle, Phone, Smartphone } from 'lucide-react';

const contactLinks = [
  { href: '/gu-morey.vcf', label: '保存到通讯录', detail: '下载电子名片', icon: Download, download: true, primary: true },
  { href: 'https://wa.me/message/TNBZKOUMIJRVC1?src=qr', label: 'WhatsApp', detail: '直接发起对话', icon: MessageCircle },
  { href: 'mailto:gu@singular.com', label: '发送邮件', detail: 'gu@singular.com', icon: Mail },
  { href: 'tel:+8617602299316', label: '拨打电话', detail: '+86 176 0229 9316', icon: Phone },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 sm:py-10">
      <section className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[30px] border border-[#ddd4cc] bg-white shadow-[0_28px_90px_rgba(70,48,36,0.13)]">
        <div className="identity-panel px-6 pb-8 pt-7 sm:px-10 sm:pb-10 sm:pt-9">
          <div className="mb-14 flex items-center justify-between sm:mb-20">
            <span className="text-[15px] font-semibold tracking-[0.08em] text-[#543d31]">GuSingular</span>
            <span className="rounded-full border border-[#8f786b]/30 px-3 py-1 text-xs tracking-[0.08em] text-[#6d5548]">DIGITAL CARD</span>
          </div>
          <p className="mb-2 text-sm tracking-[0.18em] text-[#80695d]">上海顾极智舟国际贸易有限公司</p>
          <h1 className="text-[3.35rem] font-semibold leading-none tracking-[-0.055em] text-[#4d382d] sm:text-[4rem]">顾沐锐</h1>
          <p className="mt-3 text-[1.7rem] font-light tracking-[-0.025em] text-[#594137]">Gu Morey</p>
          <div className="mt-6 h-px w-14 bg-[#b89d8e]" />
          <p className="mt-5 text-base text-[#6c5549]">总经理 <span className="mx-2 text-[#b7a69d]">/</span> General Manager</p>
        </div>

        <div className="space-y-3 px-4 py-4 sm:px-6 sm:py-6">
          {contactLinks.map(({ href, label, detail, icon: Icon, download, primary }) => (
            <a key={label} href={href} download={download || undefined} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className={`group flex min-h-16 items-center gap-4 rounded-2xl border px-4 py-3 transition active:scale-[0.99] ${primary ? 'border-[#513b30] bg-[#513b30] text-white hover:bg-[#61483b]' : 'border-[#e6dfda] bg-[#fbfaf9] text-[#4d382d] hover:border-[#cbbdb4] hover:bg-white'}`}>
              <span className={`grid size-10 shrink-0 place-items-center rounded-full ${primary ? 'bg-white/12' : 'bg-[#eee8e4]'}`}><Icon aria-hidden="true" size={19} strokeWidth={1.8} /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold">{label}</span>
                <span className={`block truncate text-sm ${primary ? 'text-white/65' : 'text-[#8b766b]'}`}>{detail}</span>
              </span>
              <span aria-hidden="true" className={`text-lg ${primary ? 'text-white/50' : 'text-[#b5a69e]'}`}>→</span>
            </a>
          ))}

          <div className="mt-5 rounded-[22px] border border-[#e6dfda] bg-[#f7f3f0] p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-[#513b30] text-white"><Smartphone aria-hidden="true" size={19} strokeWidth={1.8} /></span>
              <div><h2 className="text-[15px] font-semibold text-[#4d382d]">微信 / WeChat</h2><p className="text-sm text-[#8b766b]">使用微信扫描二维码添加</p></div>
            </div>
            <div className="mx-auto w-fit rounded-2xl bg-white p-3 shadow-[0_10px_35px_rgba(70,48,36,0.08)]">
              <img src="/wechat-qr.png" alt="顾沐锐的微信二维码" className="size-[210px] sm:size-[230px]" />
            </div>
          </div>
        </div>

        <footer className="border-t border-[#eee8e4] px-6 py-5 text-center text-xs leading-5 text-[#9a887f]">GuSingular · Connecting ideas with the world</footer>
      </section>
    </main>
  );
}
