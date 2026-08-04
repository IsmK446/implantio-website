import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export default function NotFound() {
  return (
    <Container className="flex min-h-[62vh] flex-col justify-center gap-6 py-24">
      <Eyebrow>Error 404</Eyebrow>
      <h1 className="t-h2 text-ink">That page isn&rsquo;t here</h1>
      <p className="max-w-prose text-lg leading-relaxed text-muted">
        The link may be out of date, or the page may have moved. The demo booking page is the
        quickest way to get what you came for.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/demo" size="lg">
          Book your demo
        </Button>
        <Button href="/" size="lg" variant="secondary">
          Back to the homepage
        </Button>
      </div>
    </Container>
  );
}
