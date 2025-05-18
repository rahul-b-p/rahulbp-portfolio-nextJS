import { ISocialIcon } from "@/interfaces/landing";

export function SocialIcon({ icon: Icon, href, color, size }: ISocialIcon) {
  return (
    <a
      target="_blank"
      href={href}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
    >
      <Icon size={size} color={color} />
    </a>
  );
}
