import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
  Mail,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Figma",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Full Stack Developer
            </span>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Creating{" "}
                <span className="text-primary glow-text">experiences</span>
                <br />
                digital with
                <br />
                <span className="font-serif italic font-normal text-white">
                  purpose.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                Hello, I’m <strong>Valessa Lopes</strong>. A Full Stack
                Developer in training, focused on React, TypeScript, Node.js,
                API integration, and databases. I work on building modern,
                functional user interfaces as well as developing complete
                front-end and back-end solutions. I’m passionate about
                technology, continuous learning, and creating digital solutions
                that deliver real impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=valessalopes.silva@gmail.com&su=Contato%20Portfólio&body=Olá%20Valessa,%0D%0AVi%20seu%20portfólio%20e%20gostaria%20de%20conversar.",
                    "_blank"
                  )
                }
              >
                Contact me <Mail className="w-5 h-5" />
              </Button>

              <a href="/profile.pdf" target="_blank" rel="noopener noreferrer">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Find me on:</span>

              <a
                href="https://github.com/valessalsilva"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/valessa-lopes-da-silva-3bbaa0127/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <div className="relative max-w-md mx-auto">
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Valessa Lopes"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3">
                  <span className="text-sm font-medium">
                    Open to opportunities🚀
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I use
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-lg font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
