import { Section } from "@/components/Section";
import data from "@/constants/experience";

export default function Experience() {
  return (
    <Section id="experience" title={data.title} subTitle={data.subTitle}>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {data.experienceSet.map((exp, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xl font-medium">{exp.company}</h3>
            <p className="text-muted-foreground">
              {exp.position} / {exp.location} / {exp.period}
            </p>
            <p className="text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
