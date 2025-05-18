import Image from "next/image";
import { Section } from "@/components/Section";
import data from "@/constants/about";

export default function About() {
  return (
    <Section id="profile" title={data.title} subTitle={data.subTitle}>
      <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
        <div className="mx-auto md:mx-0">
          <Image
            src={data.image}
            alt="Profile"
            width={300}
            height={300}
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p className="text-lg font-medium text-foreground">{data.tagLine}</p>
          {data.description.map((desc, index) => (
            <p key={index}>{desc.paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
