export function Header() {
  return (
    <header
      className="w-[100vw] relative flex items-center pt-[2.5rem] pb-[1.5rem]"
      style={{
        background: `linear-gradient(
            0deg,
            hsl(240deg 6% 10%) 0%,
            hsl(232deg 13% 13%) 17%,
            hsl(225deg 20% 17%) 28%,
            hsl(220deg 27% 20%) 37%,
            hsl(215deg 34% 22%) 44%,
            hsl(213deg 34% 25%) 51%,
            hsl(215deg 28% 29%) 57%,
            hsl(216deg 23% 33%) 63%,
            hsl(218deg 19% 37%) 68%,
            hsl(219deg 16% 41%) 73%,
            hsl(256deg 10% 46%) 78%,
            hsl(308deg 9% 49%) 82%,
            hsl(341deg 14% 55%) 85%,
            hsl(3deg 17% 60%) 89%,
            hsl(12deg 19% 61%) 91%,
            hsl(11deg 18% 62%) 94%,
            hsl(11deg 17% 63%) 96%,
            hsl(10deg 15% 64%) 98%,
            hsl(10deg 13% 65%) 100%
          )`,
      }}
    >
      <h1 className="mx-auto font-mono text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-amber-100/70 mb-8">
        rehype-pretty-code
      </h1>
    </header>
  );
}