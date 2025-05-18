import { Section } from "@/components/Section";
import data from "@/constants/education";

export default function Education() {
  return (
    <Section id="education" title={data.title} subTitle={data.subTitle}>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {data.educationSet.map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xl font-medium">{item.school}</h3>
            <p className="text-muted-foreground">
              {item.degree} - <span className="font-medium">Passout Year:</span>{" "}
              {item.year}
            </p>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
