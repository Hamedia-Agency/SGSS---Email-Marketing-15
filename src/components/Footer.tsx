import Image from "next/image";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <Image
            src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/6a0262de60a7a52fdc112210.png"
            alt="SGSS Logo"
            className={styles.logoImg}
            style={{ height: '76px', width: 'auto' }}
            width={200}
            height={76}
          />
        </div>

        <p className={styles.footerCopy}>
          © {new Date().getFullYear()} Secure Guard Security Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
