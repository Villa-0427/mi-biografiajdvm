import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Compass,
  Feather,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  PenLine,
  Quote,
  Sparkles,
  X,
} from 'lucide-react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { biografia, lineaDelTiempo } from '@/data/biografia';
import EasterEgg from './pages/EasterEgg';
import { Link } from "wouter";

const queryClient = new QueryClient();

function Home() {
  // Estos dos estados controlan pequeñas interacciones de la página:
  // el menú móvil y el mensaje que aparece al copiar el correo.
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Cierra el menú móvil después de hacer clic en un enlace.
  const closeMenu = () => setMenuOpen(false);

  // Copia el correo al portapapeles sin abrir otra aplicación.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(biografia.correo);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    // Permite cerrar el menú del móvil pulsando la tecla Escape.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="noise-overlay min-h-[100dvh] overflow-hidden bg-background text-foreground">
      {/* Cabecera fija: contiene el nombre y los enlaces para desplazarse. */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-foreground/10 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#inicio" onClick={closeMenu} className="group flex items-center gap-3" data-testid="link-home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground transition-transform group-hover:rotate-[-8deg]">{biografia.iniciales}</span>
            <span className="hidden text-left sm:block">
              <span className="block font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{biografia.etiqueta}</span>
              <span className="font-display text-base leading-none">{biografia.nombre}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
            <a href="#historia" className="nav-link font-mono-ui text-[11px] uppercase tracking-[0.15em] text-muted-foreground" data-testid="link-historia">Introducción</a>
            <a href="#hitos" className="nav-link font-mono-ui text-[11px] uppercase tracking-[0.15em] text-muted-foreground" data-testid="link-hitos">Hitos</a>
            <a href="#principios" className="nav-link font-mono-ui text-[11px] uppercase tracking-[0.15em] text-muted-foreground" data-testid="link-principios">Gustos</a>
            <a href="#contacto" className="group flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 font-mono-ui text-[11px] uppercase tracking-[0.15em] transition-colors hover:border-accent hover:text-accent" data-testid="link-contacto">
              Conversemos <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 md:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-foreground/10 bg-background px-5 py-5 md:hidden" aria-label="Navegación móvil">
            <div className="flex flex-col gap-4">
              <a href="#historia" onClick={closeMenu} className="font-display text-2xl" data-testid="mobile-link-historia">Historia</a>
              <a href="#hitos" onClick={closeMenu} className="font-display text-2xl" data-testid="mobile-link-hitos">Hitos</a>
              <a href="#principios" onClick={closeMenu} className="font-display text-2xl" data-testid="mobile-link-principios">Principios</a>
              <a href="#contacto" onClick={closeMenu} className="flex items-center gap-2 font-display text-2xl text-accent" data-testid="mobile-link-contacto">Conversemos <ArrowUpRight size={19} /></a>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Portada: es lo primero que ve la persona que visita la página. */}
        <section id="inicio" className="relative mx-auto grid min-h-[760px] max-w-[1320px] items-center gap-12 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:pb-28 lg:pt-40">
          <div className="relative z-10">
            <div className="reveal flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-10 bg-accent" />
              {biografia.portada.indicador}
            </div>
            <h1 className="reveal delay-1 mt-7 max-w-[700px] font-display text-[clamp(4rem,9vw,8.6rem)] leading-[0.84] tracking-[-0.065em]">
              {biografia.portada.tituloPrincipal}
              <span className="block text-accent">{biografia.portada.tituloAcento}</span>
            </h1>
            <p className="reveal delay-2 mt-9 max-w-[490px] text-base leading-7 text-muted-foreground sm:text-lg">
              Soy <strong className="font-medium text-foreground">{biografia.nombre}</strong>, {biografia.profesion}. Esta es la historia —todavía en borrador— de cómo aprendí a hacer espacio para lo que importa.
            </p>
            <div className="reveal delay-3 mt-9 flex flex-wrap items-center gap-5">
              <a href="#historia" className="group flex items-center gap-3 rounded-full bg-primary px-5 py-3 font-mono-ui text-[11px] uppercase tracking-[0.13em] text-primary-foreground transition-transform hover:-translate-y-1" data-testid="link-read-story">
                {biografia.portada.textoBoton} <ArrowDown size={15} className="transition-transform group-hover:translate-y-1" />
              </a>
              <span className="font-mono-ui text-[10px] uppercase tracking-[0.13em] text-muted-foreground">{biografia.ubicacion}</span>
            </div>
          </div>

          <div className="reveal delay-2 relative mx-auto w-full max-w-[560px] lg:justify-self-end">
            <div className="absolute -right-2 top-2 h-full w-full border border-accent/25 sm:-right-4 sm:top-4" />
            <div className="relative overflow-hidden border border-foreground/15 bg-secondary/70 p-4 sm:p-5">
              <div className="relative flex aspect-[4/5] items-end overflow-hidden bg-[#718b7b]">
                {biografia.retrato.imagen ? (
                  <>
                    {/* Si hay una imagen, se muestra ocupando todo el marco. */}
                    <img
                        src={biografia.retrato.imagen}
                      alt={`Retrato de ${biografia.nombre}`}
                        className="absolute inset-0 h-full w-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d3d49]/65 via-transparent to-transparent"></div>
                  </>
                ) : (
                  <>
                    {/* Si todavía no hay foto, conservamos la ilustración original. */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(244,229,197,.95)_0,rgba(244,229,197,.25)_20%,transparent_48%),linear-gradient(145deg,#9dad87_0%,#5c7e72_45%,#3c5360_100%)]" />
                    <div className="absolute left-[13%] top-[12%] h-24 w-24 rounded-full border border-background/40 bg-background/10 blur-[1px] sm:h-32 sm:w-32" />
                    <div className="absolute bottom-[-5%] left-[15%] h-[57%] w-[65%] -rotate-[5deg] rounded-[45%_45%_14%_14%] bg-[#ca6454]/85" />
                    <div className="absolute bottom-[39%] left-[31%] h-[28%] w-[32%] rounded-[48%_48%_44%_44%] bg-[#bf845f]" />
                    <div className="absolute bottom-[49%] left-[27%] h-[12%] w-[42%] rotate-[-6deg] rounded-[50%] bg-[#3a3141]" />
                    <div className="absolute bottom-[34%] left-[36%] h-2 w-16 rounded-full bg-[#3a3141]/50 sm:w-24" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d3d49]/65 via-transparent to-transparent" />
                  </>
                )}
                <div className="relative flex w-full items-end justify-between p-5 text-background sm:p-7">
                  <div>
                    <p className="font-display text-2xl sm:text-3xl">{biografia.nombre}</p>
                    <p className="mt-1 font-mono-ui text-[9px] uppercase tracking-[0.16em] text-background/75">{biografia.retrato.subtitulo}</p>
                  </div>
                  <span className="font-mono-ui text-[10px] text-background/75">{biografia.retrato.contador}</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-1 pb-1 pt-4 font-mono-ui text-[9px] uppercase tracking-[0.16em] text-primary-foreground/75">
                <span>{biografia.retrato.pieIzquierdo}</span>
                <span>{biografia.retrato.pieDerecho}</span>
              </div>
            </div>
            <div className="float-slow absolute -bottom-8 -left-5 flex h-24 w-24 rotate-[-8deg] items-center justify-center rounded-full bg-accent text-center font-display text-xl leading-none text-accent-foreground shadow-lg sm:-left-10">
              seguir<br />mirando
            </div>
          </div>
        </section>

        {/* Introducción: presenta la historia en pocas frases. */}
        <section id="historia" className="border-y border-foreground/10 bg-card">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-24 lg:px-12 lg:py-32">
            <div>
              <div className="flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[0.22em] text-accent">
                <span className="h-px w-10 bg-accent" />
                {biografia.historia.indicador}
              </div>
              <h2 className="mt-7 max-w-[440px] font-display text-5xl leading-[0.94] tracking-[-0.045em] sm:text-6xl">
                {biografia.historia.titulo} <em className="text-accent">{biografia.historia.tituloAcento}</em>
              </h2>
              <div className="mt-9 flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-secondary" />
                <span>{biografia.historia.ubicacion}</span>
              </div>
            </div>
            <div className="max-w-[650px]">
              <Quote size={31} strokeWidth={1.2} className="text-accent" />
              <p className="mt-5 font-display text-3xl leading-[1.14] tracking-[-0.025em] sm:text-4xl">
                {biografia.historia.cita}
              </p>
              <div className="mt-8 grid gap-6 border-t border-foreground/15 pt-6 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
                {biografia.historia.parrafos.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* Hitos: muestra tres momentos importantes de forma resumida. */}
        <section id="hitos" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[0.22em] text-accent">
                <span className="h-px w-10 bg-accent" />
                03 — Hitos destacados
              </div>
              <h2 className="mt-6 font-display text-5xl leading-none tracking-[-0.045em] sm:text-6xl">Las piezas que movieron el mapa.</h2>
            </div>
            <p className="max-w-[245px] font-mono-ui text-[10px] uppercase leading-5 tracking-[0.12em] text-muted-foreground">Tres decisiones pequeñas con consecuencias grandes.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-[1.2fr_.8fr_.95fr]">
            {biografia.hitos.map((hito, index) => {
              const Icon = [Compass, PenLine, BookOpen][index];
              const cardStyle = [
                'bg-primary text-primary-foreground',
                'border border-foreground/15 bg-[#d5ad73] text-primary',
                'border border-foreground/15 bg-secondary text-secondary-foreground',
              ][index];

              return (
            <article key={hito.numero} className={`group relative min-h-[310px] overflow-hidden p-7 transition-transform hover:-translate-y-1 sm:p-9 ${cardStyle}`}>
              <div className="flex items-start justify-between">
                <span className="font-mono-ui text-[11px] text-accent">{hito.numero}</span>
                <Icon size={24} strokeWidth={1.3} className="text-accent transition-transform group-hover:rotate-45" />
              </div>
              <div className="absolute bottom-8 left-7 right-7 sm:left-9 sm:right-9">
                <p className="font-mono-ui text-[10px] uppercase tracking-[0.17em] text-primary-foreground/55">{hito.etiqueta}</p>
                <h3 className="mt-3 max-w-[420px] font-display text-4xl leading-[.94] tracking-[-.035em]">{hito.titulo}</h3>
              </div>
            </article>
              );
            })}
          </div>
        </section>

        {/* Línea del tiempo: recorre todos los momentos definidos en biografia.ts. */}
        <section className="border-y border-foreground/10 bg-[#e6dccb]">
          <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[0.22em] text-accent">
                  <span className="h-px w-10 bg-accent" />
                   04 — Línea del tiempo
                </div>
                <h2 className="mt-6 max-w-[650px] font-display text-5xl leading-[.92] tracking-[-.05em] sm:text-7xl">Los Acontecimientos Más Importantes</h2>
              </div>
              <div className="flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
                 <span className="h-2 w-2 rounded-full bg-accent" /> 2008 — 2026
              </div>
            </div>

            <div className="relative mt-20">
              <div className="absolute bottom-0 left-[14px] top-0 w-px bg-foreground/20 md:left-1/2 md:-translate-x-1/2" />
              <div className="space-y-12 md:space-y-16">
                {lineaDelTiempo.map((item, index) => (
                  <article key={item.year} className="relative grid gap-5 md:grid-cols-2 md:gap-16" data-testid={`timeline-item-${item.year}`}>
                    <div className={`${item.side === 'left' ? 'md:col-start-1 md:text-right' : 'md:col-start-2'} pl-12 md:pl-0`}>
                      <div className={`timeline-card border border-foreground/15 bg-card p-6 sm:p-8 ${item.side === 'left' ? 'md:ml-auto' : ''} max-w-[520px]`}>
                        <div className={`flex items-center justify-between gap-4 ${item.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                          <span className="font-mono-ui text-xs font-bold tracking-[0.1em] text-accent">{item.year}</span>
                          <span className="font-mono-ui text-[9px] uppercase tracking-[0.14em] text-muted-foreground">{item.place}</span>
                        </div>
                        <h3 className="mt-5 font-display text-3xl leading-none tracking-[-.03em] sm:text-4xl">{item.title}</h3>
                        <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                          {/* Imagen del evento */}
                          {item.imagen && (
                              <div className="mt-4">
                                  <img
                                      src={item.imagen}
                                      alt={item.title}
                                      className="w-full h-auto rounded-md"
                                  />
                              </div>
                          )}
                        <div className={`mt-6 flex items-center gap-2 border-t border-foreground/10 pt-4 font-mono-ui text-[10px] uppercase tracking-[0.11em] text-secondary ${item.side === 'left' ? 'md:justify-end' : ''}`}>
                          <Feather size={13} /> {item.note}
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[7px] top-8 flex h-4 w-4 items-center justify-center rounded-full border-[3px] border-[#e6dccb] bg-accent md:left-1/2 md:-translate-x-1/2 md:top-10">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground" />
                    </div>
                    <div className={`hidden items-start pt-2 font-mono-ui text-[9px] uppercase tracking-[0.17em] text-muted-foreground md:flex ${item.side === 'left' ? 'md:col-start-2 md:justify-start' : 'md:col-start-1 md:row-start-1 md:justify-end'}`}>
                      {String(index + 1).padStart(2, '0')} / 08
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

          {/* Principios */}
          <section id="principios" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
              <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
                  <div>
                      <div className="flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[0.22em] text-accent">
                          <span className="h-px w-10 bg-accent" />
                          05 - PRINCIPIOS
                      </div>
                      <h2 className="mt-6 font-display text-5xl leading-[.92] tracking-[.05em] sm:text-7xl">Mis Gustos</h2>
                      <p className="mt-7 max-w-[340px] text-sm leading-6 text-muted-foreground">
                          Los Gustos son siempre una esclavitud más grande que los disgustos
                      </p>

                      <Link href="/secreto">
                          <button className="mt-3 w-8 h-10 rounded-full bg-amber-100/30 hover:bg-amber-100/60 border border-amber-300/30 hover:border-amber-300/60 text-amber-700/50 hover:text-amber-700/80 transition-all flex items-center justify-center text-sm shadow-sm hover:shadow-md">
                              🥚
                          </button>
                      </Link>
                  </div>

                  <div className="divide-y divide-foreground/15 border-y border-foreground/15">
                      {biografia.principios.map((principio) => (
                          <div key={principio.numero} className="py-6 first:pt-0 last:pb-0">
                              <div className="flex items-start gap-4">
            <span className="font-mono-ui text-xs font-bold text-accent">
              {principio.numero}
            </span>
                                  <div>
                                      <h3 className="font-display text-xl leading-tight">
                                          {principio.titulo}
                                      </h3>
                                      <p className="mt-1 text-sm text-muted-foreground">
                                          {principio.descripcion}
                                      </p>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

        {/* Contacto: invita a la persona visitante a escribirte. */}
        <section id="contacto" className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-accent/45 sm:h-96 sm:w-96" />
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-accent/25 sm:h-64 sm:w-64" />
          <div className="relative mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="max-w-[800px]">
              <div className="flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[0.22em] text-accent">
                <span className="h-px w-10 bg-accent" />
                {biografia.contacto.indicador}
              </div>
              <h2 className="mt-7 font-display text-6xl leading-[.86] tracking-[-.06em] sm:text-8xl">{biografia.contacto.tituloPrincipal}<br /><span className="text-accent">{biografia.contacto.tituloAcento}</span></h2>
              <p className="mt-8 max-w-[470px] text-base leading-7 text-primary-foreground/70">{biografia.contacto.descripcion}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href={`mailto:${biografia.correo}`} className="group flex items-center gap-3 rounded-full bg-accent px-5 py-3 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-accent-foreground transition-transform hover:-translate-y-1" data-testid="link-email">
                  <Mail size={15} /> {biografia.correo} <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <button type="button" onClick={copyEmail} className="flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-3 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-primary-foreground/75 transition-colors hover:border-accent hover:text-accent" data-testid="button-copy-email">
                  {copied ? <Check size={14} /> : <Sparkles size={14} />} {copied ? 'Correo copiado' : 'Copiar correo'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página: redes sociales, copyright y enlace para volver arriba. */}
      <footer className="bg-primary px-5 pb-8 text-primary-foreground sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 border-t border-primary-foreground/15 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
             <p className="font-display text-2xl">{biografia.nombre}</p>
            <p className="mt-2 font-mono-ui text-[9px] uppercase tracking-[0.16em] text-primary-foreground/45">Notas al margen · una biografía viva</p>
          </div>
          <div className="flex items-center gap-5">
             <a href={biografia.redes.linkedin} target="_blank" rel="noreferrer" className="text-primary-foreground/60 transition-colors hover:text-accent" aria-label="LinkedIn" data-testid="link-linkedin"><Linkedin size={17} /></a>
             <a href={biografia.redes.instagram} target="_blank" rel="noreferrer" className="text-primary-foreground/60 transition-colors hover:text-accent" aria-label="Instagram" data-testid="link-instagram"><Instagram size={17} /></a>
            <a href="#inicio" className="ml-2 flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[0.12em] text-primary-foreground/60 transition-colors hover:text-accent" data-testid="link-back-top">Volver arriba <ArrowUpRight size={14} className="rotate-[-45deg]" /></a>
          </div>
          <span className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-primary-foreground/35">© 2025 / Hecho despacio</span>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
          <Route path="/secreto" component={EasterEgg} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;