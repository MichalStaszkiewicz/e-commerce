import Link from "next/link";

export default function HeaderLogoBox() {
  return (
    <div >
      <div className="site-logo">
        <Link href="/" className="js-logo-clone">
          SHOPPERS
        </Link>
      </div>
    </div>
  );
}
