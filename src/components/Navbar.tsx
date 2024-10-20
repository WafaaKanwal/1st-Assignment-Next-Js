import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-2 bg-[#1f1301] shadow-lg text-[#bcb08a] text-lg font-bold">
      <div className="flex gap-12">
        <Link href="/" className="hover:text-[#aa660d] transition-all">
          Home
        </Link>
        <Link href="/services" className="hover:text-[#aa660d] transition-all">
          Services
        </Link>
        <Link href="/about" className="hover:text-[#aa660d] transition-all">
          About
        </Link>
        <Link href="/products" className="hover:text-[#aa660d] transition-all">
          Products
        </Link>
        <Link href="/contact" className="hover:text-[#aa660d] transition-all">
          Contact
        </Link>
        <Link href="/deals" className="hover:text-[#aa660d] transition-all">
          Deals
        </Link>
      </div>
      <div className="cursor-pointer transition-transform transform hover:scale-110">
        <Image
          src="/images/wkk.png"
          alt="WK Beauty Salon Logo"
          width={50}
          height={50}
          className="rounded-full shadow-md"
        />
      </div>
    </div>
  );
}
