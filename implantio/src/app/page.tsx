export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <h1>Implantio</h1>
        <h2>We’re putting the finishing touches on something exciting.</h2>
        <p>Our website is currently being updated. We’ll be back shortly.</p>
        <p>
          For enquiries, contact{" "}
          <a href="mailto:hello@getimplantio.com">
            hello@getimplantio.com
          </a>
        </p>
      </div>
    </main>
  );
}
