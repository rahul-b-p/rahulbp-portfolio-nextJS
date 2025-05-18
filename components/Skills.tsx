import { Section } from "@/components/Section";
import data from "@/constants/skills";

export default function Skills() {
  return (
    <Section id="skills" title={data.title} subTitle={data.subTitle}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8">
        {data.skillSet.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-muted stroke-current"
                  strokeWidth="4"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
                <circle
                  className="text-primary stroke-current"
                  strokeWidth="4"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 40 * (1 - skill.percentage / 100)
                  }`}
                  transform="rotate(-90 50 50)"
                />
                <text
                  x="50"
                  y="50"
                  dy="0.35em"
                  textAnchor="middle"
                  className="text-sm font-medium fill-current"
                >
                  {skill.percentage}%
                </text>
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-muted-foreground">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
