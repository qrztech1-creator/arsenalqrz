import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase, ShoppingBag, UtensilsCrossed, HeartPulse, CalendarCheck,
  Users, Truck, Landmark, Home, GraduationCap, BriefcaseBusiness,
  Megaphone, Sparkles, Share2, PlayCircle, QrCode, Scale, Newspaper,
  Layers, Check, Code2, Repeat, Rocket, Clock, Zap, ShieldCheck,
  ArrowRight, Infinity as InfinityIcon,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import arsenalLogo from "@/assets/arsenal.png.asset.json";

const CHECKOUT_URL = "https://qrztech.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arsenal QRZ — 100+ Negócios Prontos em 1 Único Lugar" },
      {
        name: "description",
        content:
          "100+ sistemas completos em PHP para você criar, revender ou faturar com SaaS em qualquer nicho. CRM, ERP, Delivery, IA, Fintech, Marketplace e muito mais. Acesso por R$ 97/ano.",
      },
      { property: "og:title", content: "Arsenal QRZ — 100+ Negócios Prontos em 1 Único Lugar" },
      {
        property: "og:description",
        content:
          "100+ sistemas completos. Instale, personalize, revenda e fature. Código-fonte liberado e direito total de revenda.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

const segments = [
  { icon: Briefcase, name: "Gestão Empresarial", msg: "CRM, ERP, Financeiro, RH, Projetos, Help Desk e Gestão Corporativa.", systems: ["CRMGo", "ERPGo", "Perfex CRM", "CloudOnex", "Acculance", "SalesERP", "AccountGo", "Worksuite"] },
  { icon: ShoppingBag, name: "E-commerce & Marketplace", msg: "Lojas Virtuais, Multi-Vendor, Catálogos e Produtos Digitais.", systems: ["eCommerceGo", "MartFury", "StoreGo", "Shopperzz", "eClassify", "ficKrr"] },
  { icon: UtensilsCrossed, name: "Delivery & Alimentação", msg: "Marketplace de restaurantes, cardápio QR, PDV e pedidos online.", systems: ["StackFood", "FoodBank", "eFood", "Khadyo", "Eorder", "QR Menu Maker"] },
  { icon: HeartPulse, name: "Saúde", msg: "Hospitais, Clínicas, Consultórios, Dentistas, Farmácias e Telemedicina.", systems: ["InfyHMS", "Multi Hospital", "Doctro", "Doxe", "InfyCare", "iDentSoft", "Acnoo Pharmacy"] },
  { icon: CalendarCheck, name: "Agendamentos & Reservas", msg: "Agendamento Online, Reservas, Salões, Clínicas e Prestadores.", systems: ["BookingGo", "Bookapp", "Aoxio", "Infycal", "Frezka"] },
  { icon: Users, name: "Marketplace de Serviços", msg: "GetNinjas, Fiverr, Workana, TaskRabbit e Prestadores.", systems: ["Qixer", "Workzone", "eDemand", "Bookapp", "CarePro"] },
  { icon: Truck, name: "Transporte & Logística", msg: "Uber, 99, Entregas, Couriers, Logística e Rastreamento.", systems: ["MightyTaxi", "OvoRide", "DRIVEMOND", "Tagxi", "Cargo Pro", "CourierLab", "Deprixa"] },
  { icon: Landmark, name: "Fintech & Pagamentos", msg: "Banco Digital, Carteira Digital, Gateway e Cartões Virtuais.", systems: ["Digibank", "StripCard", "PayMoney"] },
  { icon: Home, name: "Imobiliário", msg: "Portais Imobiliários, Gestão de Imóveis e Corretores.", systems: ["Resido", "Flex Home", "Zaiproty"] },
  { icon: GraduationCap, name: "Educação", msg: "Escolas, LMS, Cursos Online e Gestão Acadêmica.", systems: ["InfixEdu", "SkillGro", "StudyBuddy"] },
  { icon: BriefcaseBusiness, name: "Empregos & Recrutamento", msg: "Portais de Emprego, Recrutamento e Marketplace de Talentos.", systems: ["Jobpilot", "JobBox", "JobClass", "Jobcy"] },
  { icon: Megaphone, name: "Marketing & Automação", msg: "WhatsApp, E-mail, SMS, Chatbots e Automação de Redes Sociais.", systems: ["WhatsBox", "SwiftChats", "SaleBot", "WASender", "Maildoll", "Acelle", "Relayzo", "StackPosts", "SocialAI"] },
  { icon: Sparkles, name: "Inteligência Artificial", msg: "IA Generativa, Chatbots, Conteúdo, Imagens, Voz e Automação.", systems: ["MagicAI", "66AIX", "WriteBot", "OpenAI Davinci"] },
  { icon: Share2, name: "Redes Sociais & Comunidades", msg: "Redes Sociais, Comunidades, Criadores e Assinaturas.", systems: ["Chatter", "Social Media Clone", "JustFans"] },
  { icon: PlayCircle, name: "Streaming", msg: "Netflix, Prime Video, TV Online e Plataformas de Streaming.", systems: ["Streamit", "Streamit Laravel", "Video Portal"] },
  { icon: QrCode, name: "Presença Digital", msg: "Link na Bio, Cartão Digital, Portfólio e Página Profissional.", systems: ["66Biolinks", "vCardGo", "66vCard", "Profilex", "Zelio"] },
  { icon: Scale, name: "Jurídico", msg: "Gestão Jurídica, Escritórios de Advocacia e Consultoria.", systems: ["AdvocateGo", "LawAdvisor"] },
  { icon: Newspaper, name: "Conteúdo & Publicação", msg: "Blogs, Portais de Notícias e Publicação de Conteúdo.", systems: ["Instant Blog", "Stories", "Blogaaso"] },
  { icon: Layers, name: "Nichos Especializados", msg: "Oficinas, Academias, Têxtil, Relacionamentos e Rodoviário.", systems: ["Garage Master", "NitroFIT", "Garments ERP", "Active Matrimonial", "Bus365"] },
];

const niches = [
  "Restaurantes", "Clínicas", "Oficinas", "Academias", "Imobiliárias",
  "Escolas", "Advogados", "Lojas Online", "Salões", "Transportadoras",
  "Hospitais", "Bancos Digitais", "Marketplaces", "Delivery", "Streaming",
  "Cursos Online", "Agências", "Consultórios", "Eventos", "Petshops",
];

const faqs = [
  { q: "Preciso saber programar para usar os sistemas?", a: "Não é necessário ser programador. Os sistemas vêm prontos para uso e a instalação é simples — basta subir em um servidor PHP padrão e seguir o passo a passo de cada sistema." },
  { q: "Como posso ganhar dinheiro com esses sistemas?", a: "Você pode vender os sistemas diretamente para empresas ou profissionais liberais, oferecer como serviço de assinatura (SaaS) ou implementar nos seus próprios negócios. As possibilidades de lucro são praticamente infinitas e você pode criar renda recorrente." },
  { q: "Quanto tempo leva para começar a faturar?", a: "Você pode começar a faturar em questão de dias. Basta seguir o guia de instalação, personalizar os sistemas conforme sua necessidade e começar a vender para o segmento que quiser." },
  { q: "Posso vender para qualquer nicho de mercado?", a: "Praticamente todos. Os sistemas são flexíveis e personalizáveis — restaurantes, consultórios, lojas online, fintechs, escolas, transportadoras, marketplaces e muito mais." },
  { q: "Como funciona o acesso?", a: "Você paga uma vez e tem 1 ano completo de acesso ao Arsenal QRZ, com todos os sistemas disponíveis para baixar, personalizar e revender." },
];

function CTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary-glow inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="/" className="flex items-center transition-transform hover:scale-105">
            <img src={arsenalLogo.url} alt="Arsenal QRZ" className="h-20 w-auto md:h-24 animate-glow" />
          </a>
          <CTAButton className="!px-5 !py-2.5 !text-sm">Quero o Arsenal — R$ 97</CTAButton>
        </div>
      </header>


      {/* HERO */}
      <section className="relative pt-52 pb-28">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid-animated opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            100+ sistemas • 19 segmentos • código-fonte liberado
          </div>

          <h1 className="mt-6 animate-fade-up font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl" style={{ animationDelay: "0.1s" }}>
            100+ <span className="text-shimmer">Negócios prontos</span>
            <br /> em 1 único lugar.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "0.2s" }}>
            100+ sistemas completos em PHP — CRM, ERP, Delivery, IA, Marketplace,
            Streaming, Fintech e mais. <span className="text-foreground font-medium">Instale, personalize, revenda e fature.</span>
          </p>

          <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <CTAButton className="!px-8 !py-5 !text-lg">Quero meu Arsenal por R$ 97</CTAButton>
            <span className="text-sm text-muted-foreground">Acesso imediato • 1 ano de acesso</span>
          </div>

          <div className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground" style={{ animationDelay: "0.4s" }}>
            <span className="flex items-center gap-2"><Code2 className="h-4 w-4 text-neon-2" /> Código-fonte liberado</span>
            <span className="flex items-center gap-2"><Repeat className="h-4 w-4 text-neon-2" /> Direito total de revenda</span>
            <span className="flex items-center gap-2"><Rocket className="h-4 w-4 text-neon-2" /> Pronto para deploy</span>
          </div>
        </div>

      </section>

      {/* DOR / URGÊNCIA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="card-glow rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 text-neon">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">A era da IA não espera</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Enquanto você tenta desenvolver do zero,
              <br className="hidden md:block" />
              <span className="text-gradient"> seus concorrentes já estão faturando.</span>
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { icon: Clock, t: "O tempo está passando", d: "Cada mês desenvolvendo é um mês sem faturar." },
                { icon: Code2, t: "Dev custa caro", d: "Times técnicos custam dezenas de milhares por mês." },
                { icon: Zap, t: "Oportunidade indo embora", d: "A IA acelerou o mercado. Quem entrega antes ganha." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-3">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-neon" />
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              O <span className="text-gradient">atalho</span> para começar um negócio digital
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              100+ sistemas prontos para você usar, personalizar ou revender. Em qualquer nicho.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Rocket, t: "Soluções Prontas", d: "Sistemas completos, testados e prontos para deploy. Sem desenvolver do zero." },
              { icon: Sparkles, t: "100% Personalizáveis", d: "Adapte cor, marca, funcionalidades e venda como se fosse seu." },
              { icon: InfinityIcon, t: "Revenda Liberada", d: "Direito total de revenda. Cobre uma vez, mensalmente ou venda projetos." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="card-glow card-glow-hover rounded-2xl p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10 text-neon">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGMENTOS */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              19 segmentos • 100+ sistemas
            </div>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Tudo isso por <span className="text-gradient">R$ 97</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Um arsenal completo para você atacar qualquer mercado.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map(({ icon: Icon, name, msg, systems }, idx) => (
              <div
                key={name}
                className="card-glow card-glow-hover group animate-fade-up rounded-2xl p-6"
                style={{ animationDelay: `${Math.min(idx * 0.05, 0.5)}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10 text-neon transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{msg}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {systems.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border/70 bg-secondary/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* O QUE VEM */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              O que vem com <span className="text-gradient">cada sistema</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, t: "Versões Completas", d: "Já vem com todos os módulos e personalizações." },
              { icon: Repeat, t: "Revenda Liberada", d: "Direito total de revender quantas vezes quiser." },
              { icon: Code2, t: "Código-Fonte", d: "Acesso ao código para customizar do seu jeito." },
              { icon: Rocket, t: "Pronto para Deploy", d: "Suba em qualquer servidor PHP e comece a vender." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="card-glow card-glow-hover rounded-2xl p-6">
                <Icon className="h-6 w-6 text-neon-2" />
                <h3 className="mt-4 font-bold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FATURAR */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hero-glow opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              3 caminhos para <span className="text-gradient">faturar</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Possibilidades praticamente infinitas de monetização.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Venda direta", d: "Venda os sistemas para empresas e profissionais liberais por projeto." },
              { n: "02", t: "SaaS recorrente", d: "Ofereça como assinatura mensal e construa uma renda previsível." },
              { n: "03", t: "Seu próprio negócio", d: "Use no seu próprio negócio e domine seu nicho com tecnologia de ponta." },
            ].map(({ n, t, d }) => (
              <div key={n} className="card-glow card-glow-hover rounded-2xl p-8">
                <div className="font-display text-5xl font-bold text-gradient">{n}</div>
                <h3 className="mt-4 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NICHOS */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Ataque <span className="text-gradient">qualquer nicho</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Os sistemas são flexíveis e se adaptam a praticamente qualquer mercado.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {niches.map((n) => (
              <span
                key={n}
                className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium backdrop-blur transition hover:border-neon/60 hover:text-neon"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold md:text-5xl">Perguntas <span className="text-gradient">frequentes</span></h2>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="card-glow rounded-3xl p-10 text-center md:p-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neon">
              <Clock className="h-3.5 w-3.5" /> Não perca tempo
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
              O tempo está passando.
              <br />
              <span className="text-gradient">Seus concorrentes não estão esperando.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Enquanto você pensa, a IA acelera o mercado. Com o Arsenal QRZ você
              entra em qualquer nicho com tecnologia de ponta e pronta para faturar.
            </p>

            <div className="mt-10 inline-flex flex-col items-center gap-2 rounded-2xl border border-border bg-background/60 p-6 backdrop-blur">
              <span className="text-sm uppercase tracking-wider text-muted-foreground">Arsenal QRZ — Acesso Anual</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl font-bold text-gradient">R$ 97</span>
                <span className="text-muted-foreground">/ano</span>
              </div>
              <ul className="mt-3 space-y-1.5 text-left text-sm text-muted-foreground">
                {["100+ sistemas completos", "Código-fonte liberado", "Direito total de revenda", "Pronto para deploy"].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-neon-2" /> {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-center">
              <CTAButton className="!px-10 !py-5 !text-lg">Quero meu Arsenal agora</CTAButton>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5" /> Pagamento único • Acesso imediato por 1 ano
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={arsenalLogo.url} alt="Arsenal QRZ" className="h-16 w-auto md:h-20" />
            <span>© {new Date().getFullYear()}</span>
          </div>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neon">
            Garantir acesso →
          </a>
        </div>
      </footer>
    </div>
  );
}
