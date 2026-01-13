export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Tech <span className="text-primary">Stack</span>
        </h2>

        <p className="text-muted-foreground max-w-xl mx-auto mb-16">
          Technologies I use to build scalable, modern, and high-quality
          applications.
        </p>

        <div className="flex justify-center">
          <img
            src="/tech-stack.png.webp"
            alt="Tech Stack"
            className=" mx-auto max-w-4xl rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:-translate-y-2
  "
          />
        </div>
      </div>
    </section>
  );
};
