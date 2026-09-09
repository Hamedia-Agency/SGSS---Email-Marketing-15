import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar} id="navbar">
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.navLogo} id="nav-logo">
          <Image
            src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/691d0ba7c2cf864910f19e13.png"
            alt="SGSS Logo"
            className={styles.logoImg}
            width={200}
            height={60}
          />
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="https://www.secureguardservices.com/contact" className={styles.navCta} id="nav-cta">
              Get A Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
