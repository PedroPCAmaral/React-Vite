// src/components/Footer.jsx
function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {ano} - Pedro Paulo Costa do Amaral</p>
    </footer>
  );
}

export default Footer;
