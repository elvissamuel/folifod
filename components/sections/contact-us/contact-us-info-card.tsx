import { HomeIcon, MailIcon, PhoneIcon } from "@/components/shared/icons";

type ContactUsInfoCardProps = {
  type: "address" | "help" | "mail";
  title: string;
  lines: readonly string[];
};

const iconMap = {
  address: HomeIcon,
  help: PhoneIcon,
  mail: MailIcon,
} as const;

export function ContactUsInfoCard({ type, title, lines }: ContactUsInfoCardProps) {
  const Icon = iconMap[type];

  return (
    <article className="rounded-md bg-[#edf3f8] px-6 py-7">
      <Icon className="h-11 w-11 text-[#00aeef]" />
      <h2 className="mt-4 text-lg font-bold text-[#2f1c7a]">{title}</h2>
      <div className="mt-3 space-y-0.5 text-[15px] leading-7 text-[#444]">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}
