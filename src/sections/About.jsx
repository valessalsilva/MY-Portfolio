import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Sou <strong>Valessa Lopes</strong>, desenvolvedora Full Stack em
                formação, apaixonada por tecnologia e pela criação de soluções
                digitais que geram impacto real. Minha jornada na programação
                começou com a curiosidade de entender como as coisas funcionam,
                e hoje evolui constantemente por meio de estudos, projetos
                práticos e aprendizado contínuo.
              </p>

              <p>
                Tenho foco no desenvolvimento de aplicações modernas utilizando
                <strong> React, Next.js e TypeScript</strong>, além de atuar na
                construção de soluções completas que envolvem front-end,
                back-end com
                <strong> Node.js</strong>, integração com <strong>APIs</strong>{" "}
                e gerenciamento de <strong>bancos de dados</strong>. Busco
                sempre unir boas práticas de código, organização e experiência
                do usuário.
              </p>

              <p>
                Estou em constante evolução, explorando novas tecnologias,
                aprimorando meus conhecimentos e colocando em prática tudo o que
                aprendo por meio de projetos pessoais e profissionais, sempre
                com o objetivo de crescer como desenvolvedora e entregar
                soluções eficientes e bem estruturadas.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Meu objetivo é desenvolver soluções digitais que sejam
                funcionais, bem estruturadas e intuitivas, entrego produtos que
                facilitem a vida das pessoas e reflitam a qualidade e o cuidado
                em cada detalhe do código."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
