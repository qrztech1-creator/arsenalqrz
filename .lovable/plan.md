# Arsenal QRZ — Landing Page

Landing single-page, dark tech premium (inspirada em qrztech.com), focada em converter empreendedores que querem montar um SaaS/negócio digital sem precisar desenvolver do zero.

## Estrutura da página (ordem das seções)

1. **Nav fixo minimalista** — logo "Arsenal QRZ" + botão "Quero o Arsenal" (R$ 97) levando a `qrztech.com`.

2. **Hero**
   - Headline: "100+ Negócios prontos em 1 único lugar."
   - Sub: "239+ sistemas completos em PHP — CRM, ERP, Delivery, IA, Marketplace, Streaming, Fintech e mais. Instale, personalize, revenda e fature."
   - CTA primário: "Quero meu Arsenal por R$ 97" → qrztech.com
   - Selos abaixo: "Código-fonte liberado • Direito total de revenda • Suporte na instalação"
   - Fundo: gradiente escuro com glow roxo/azul + grid sutil animado.

3. **Barra de dor / urgência**
   - "Enquanto você tenta desenvolver do zero, a IA acelera o mercado e seus concorrentes lançam primeiro."
   - 3 bullets curtos: tempo passando, custo de dev, oportunidade indo embora.

4. **Bloco "O que é o Arsenal QRZ"**
   - 3 cards: Soluções Prontas • Personalizáveis • Revenda Liberada.

5. **19 segmentos / +239 sistemas** (seção principal)
   - Grid de 19 cards de categoria, cada um com ícone, nome do segmento, mensagem comercial e chips com os nomes dos principais sistemas (lista que você mandou: Gestão Empresarial, E-commerce, Delivery, Saúde, Agendamentos, Marketplaces de Serviços, Transporte, Fintech, Imobiliário, Educação, Empregos, Marketing, IA, Redes Sociais, Streaming, Presença Digital, Jurídico, Conteúdo, Nichos Especializados).
   - Hover com glow neon na borda do card.

6. **"O que vem com cada sistema"**
   - 4 features destacadas: Versões Completas e Personalizáveis • Direito Total de Revenda • Código-Fonte Liberado • Suporte na Instalação.

7. **Como você fatura com isso** (3 caminhos)
   - Vender direto para empresas/profissionais
   - Oferecer como assinatura SaaS (recorrência)
   - Usar no seu próprio negócio
   - Subtítulo: "Possibilidades praticamente infinitas de monetização."

8. **Nichos que você pode atacar**
   - Lista visual em chips: Restaurantes, Clínicas, Oficinas, Academias, Imobiliárias, Escolas, Advogados, Lojas Online, Salões, Transportadoras, Hospitais, Bancos Digitais, etc.

9. **FAQ** (accordion)
   - Preciso saber programar?
   - Como ganho dinheiro com isso?
   - Quanto tempo até começar a faturar?
   - Posso vender para qualquer nicho?
   - Tem suporte?

10. **CTA final — Não perca tempo**
    - Headline: "O tempo está passando. Seus concorrentes não estão esperando."
    - Sub focado em IA acelerando o mercado, pessoa estagnada sem tempo de desenvolver.
    - Card de oferta: "Arsenal QRZ — Acesso vitalício — R$ 97" + botão grande → qrztech.com
    - Reforço: código-fonte + revenda + suporte.

11. **Footer** simples: nome + copyright + link CTA.

## Direção visual (dark tech premium, estilo qrztech)

- Fundo preto/quase-preto (`oklch ~0.12`) com gradientes radiais roxo→azul→ciano.
- Acento principal: roxo neon + ciano elétrico.
- Tipografia: Space Grotesk (headings) + Inter (corpo), via `<link>` no `__root.tsx`.
- Cards com bordas sutis, glassmorphism leve, glow on hover.
- Micro-animações de entrada (fade/slide) com Motion.
- Sem fotos stock; visual 100% gráfico (ícones lucide + gradientes + grid pattern).
- Tokens definidos em `src/styles.css` via `@theme` (sem inventar números/depoimentos).

## Implementação técnica

- Editar `src/routes/index.tsx` com a landing completa, removendo o placeholder.
- Atualizar `head()` da rota: title "Arsenal QRZ — 100+ Negócios Prontos em 1 Lugar", meta description, og:title/og:description.
- Adicionar tokens de cor/fontes em `src/styles.css` (`@theme`).
- Carregar fontes via `<link>` em `src/routes/__root.tsx` (não usar `@import` URL).
- Componentes da landing em `src/components/landing/` (Hero, Segments, Pricing, FAQ, etc.) usando shadcn (Accordion, Button, Card).
- Botões de CTA: link `<a href="https://qrztech.com" target="_blank" rel="noopener">`.
- Sem backend, sem Cloud — é página estática.

## Fora de escopo
- Sem checkout próprio (CTA externo para qrztech.com).
- Sem captura de e-mail / sem CMS.
- Sem números fictícios de prova social (você confirmou que não tem).
