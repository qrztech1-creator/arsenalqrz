import { useEffect, useRef, useState } from "react";
import { Clock, X, Flame, ArrowRight } from "lucide-react";

const CHECKOUT_URL = "https://qrztech.com";
const DURATION = 5 * 60; // 5 min
const STORAGE_KEY = "arsenal_countdown_end";
const POPUP_KEY = "arsenal_popup_shown";

function useCountdown() {
  const [left, setLeft] = useState(DURATION);
  useEffect(() => {
    let end = Number(localStorage.getItem(STORAGE_KEY));
    if (!end || end < Date.now()) {
      end = Date.now() + DURATION * 1000;
      localStorage.setItem(STORAGE_KEY, String(end));
    }
    const tick = () => {
      const s = Math.max(0, Math.floor((end - Date.now()) / 1000));
      setLeft(s);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const m = String(Math.floor(left / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return { m, s, done: left === 0 };
}

export function CountdownBar() {
  const { m, s } = useCountdown();
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-neon/90 via-neon-3/90 to-neon-2/90 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-xs font-semibold sm:text-sm">
        <Flame className="h-4 w-4 animate-pulse" />
        <span className="hidden sm:inline">Oferta por tempo limitado — R$ 97 expira em</span>
        <span className="sm:hidden">Oferta expira em</span>
        <span className="inline-flex items-center gap-1 rounded-md bg-black/30 px-2 py-0.5 font-mono tabular-nums">
          <Clock className="h-3.5 w-3.5" /> {m}:{s}
        </span>
      </div>
    </div>
  );
}

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);
  const lastScrollY = useRef(0);
  const armedMobile = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_KEY)) {
      shownRef.current = true;
      return;
    }

    const trigger = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      sessionStorage.setItem(POPUP_KEY, "1");
      setOpen(true);
    };

    // Desktop: exit-intent via mouseleave at top
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    // Mobile: arm after user scrolled past 60% of page,
    // then fire when they scroll back up significantly.
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? y / h : 0;
      if (!armedMobile.current && pct > 0.6) {
        armedMobile.current = true;
        lastScrollY.current = y;
      }
      if (armedMobile.current && lastScrollY.current - y > 250) {
        trigger();
      }
      lastScrollY.current = y;
    };

    // Fallback: tab hidden (mobile back / switch app)
    const onVisibility = () => {
      if (document.visibilityState === "hidden" && armedMobile.current) trigger();
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-up"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-neon/40 bg-card p-8 text-center shadow-2xl"
        style={{ boxShadow: "0 30px 80px -20px oklch(0.65 0.24 295 / 0.6)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neon">
          <Flame className="h-3 w-3" /> Espera!
        </div>

        <h3 className="mt-4 font-display text-3xl font-bold leading-tight">
          Não vá embora <span className="text-gradient">de mãos vazias</span>
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Você está prestes a perder acesso a <strong className="text-foreground">100+ sistemas prontos</strong> por
          apenas <strong className="text-foreground">R$ 97/ano</strong>. Essa oferta não vai durar.
        </p>

        <div className="my-6 rounded-xl border border-border bg-background/60 p-4">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">De R$ 497 por apenas</div>
          <div className="font-display text-5xl font-bold text-gradient">R$ 97</div>
        </div>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-glow inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold"
        >
          Garantir minha vaga agora
          <ArrowRight className="h-4 w-4" />
        </a>
        <button
          onClick={() => setOpen(false)}
          className="mt-3 text-xs text-muted-foreground hover:text-foreground"
        >
          Não, prefiro continuar parado
        </button>
      </div>
    </div>
  );
}
