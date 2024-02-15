import Link from "next/link";

export default function HeaderLogoBox() {
  return (
    <div className="block-2">
      <div className="site-logo-wrapper">
        <Link href="/" className="site-logo">
          SHOPPERS
        </Link>
      </div>
    </div>
  );
}
