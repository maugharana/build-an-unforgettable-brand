export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Ahmad Jamal — Build an Unforgettable Brand</span>
        <div className="footer-links">
          <a href="#hero">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
