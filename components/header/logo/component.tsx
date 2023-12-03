import Link from "next/link";

export default function HeaderLogoBox() {
  return (
    <div className="block-2">
      <div className="site-logo">
        <Link href="/" className="js-logo-clone">
          SHOPPERS
        </Link>
      </div>
    </div>
  );
}
