import Image from "next/image";
import Link from "next/link";

export function Brand({ eager = false, onNavigate }: { eager?: boolean; onNavigate?: () => void }) {
  return (
    <Link href="/" className="brand" aria-label="Devine Child Development Centre, home" onClick={onNavigate}>
      <Image src="/images/logo-textless-transparent.webp" alt="" width={50} height={50} loading={eager ? "eager" : "lazy"} />
      <span>
        <span className="brand__name">
          Devine Child <em>Development Centre</em>
        </span>
        <span className="brand__sub">Your safe space</span>
      </span>
    </Link>
  );
}
