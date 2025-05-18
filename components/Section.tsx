import { SectionProps } from "@/interfaces/section";

export function Section({
  id,
  title,
  subTitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-wide text-gray-700 dark:text-gray-200">
            {title}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-primary"></div>
          <p className="mt-6 text-lg text-muted-foreground">{subTitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
