import styles from "./FooterStyle.module.css"


const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.text}>© 2024 Frontend Engineer - I at Profile.fyi - Assignment Project</p>
          <nav className={styles.nav}>
            <a href="#" className={styles.link}>Privacy Policy</a>
            <a href="#" className={styles.link}>Terms of Service</a>
            <a href="#" className={styles.link}>Contact Us</a>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;