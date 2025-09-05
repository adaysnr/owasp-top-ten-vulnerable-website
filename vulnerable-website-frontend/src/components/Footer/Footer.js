import Logo from "@/components/Logo/Logo";
import Link from "next/link";

const Footer = () => {
  const shoppingLink = [
    "Sıkça Sorulan Sorular (SSS)",
    "Kargo ve Teslimat",
    "İade ve Değişim Koşulları",
    "Sipariş Takibi",
    "Ödeme Yöntemleri",
  ];

  const yasalLink = [
    "Kullanım Koşulları",
    "Gizlilik Politikası",
    "Mesafeli Satış Sözleşmesi",
    "KVKK Aydınlatma Metni",
  ];

  return (
    <div className="bg-[#1e3a8a] flex flex-col text-white px-28 pt-10">
      <div className="flex flex-row gap-60">
        {/* Logo ve İletişim */}
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="font-medium">Güvenilir kırtasiye alışverişinin adresi!</p>
          <h4 className="font-bold mt-8">Bize Ulaşın!</h4>
          <p>
            Altıntepe Mahallesi,<br />
            Mevsim Sokak No:12/A<br />
            Kadıköy 34730 - İstanbul/Türkiye<br /><br />
            +90 (216) 345 67 89<br /><br />
            info@eticaret.com
          </p>
        </div>

        {/* Alışveriş Bilgileri */}
        <div className="flex flex-col mt-5">
          <h3 className="font-bold mb-5 text-lg">Alışveriş Bilgileri</h3>
          {shoppingLink.map((link) => (
            <Link href={"not-found"} key={link} className="mb-3">{link}</Link>
          ))}
        </div>

        {/* Yasal Bilgiler */}
        <div className="flex flex-col mt-5">
          <h3 className="font-bold mb-5 text-lg">Yasal Bilgiler</h3>
          {shoppingLink.map((link) => (
            <Link href={"not-found"} key={link} className="mb-3">{link}</Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 mb-3">
          © 2025 E-Ticaret. Tüm Hakları Saklıdır.
      </div>
    </div>
  );
}

export default Footer;