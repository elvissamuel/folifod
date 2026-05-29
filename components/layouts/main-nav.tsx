import Link from "next/link";
import { NAV_LINKS, SERVICES_DROPDOWN_ITEMS } from "@/constants/site";
import { ChevronDownIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

type MainNavProps = {
  className?: string;
  onLinkClick?: () => void;
};

export function MainNav({ className, onLinkClick }: MainNavProps) {
  return (
    <nav className={cn(className)} aria-label="Main navigation">
      <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.label} className="group relative">
            <Link
              href={link.href}
              onClick={onLinkClick}
              className="inline-flex items-center gap-1 py-2 text-[15px] font-medium text-[#2d2d2d] transition-colors hover:text-[#00aeef] lg:py-0"
            >
              {link.label}
              {"hasDropdown" in link && link.hasDropdown ? (
                <ChevronDownIcon className="h-4 w-4 text-[#6b6b6b]" />
              ) : null}
            </Link>

            {"hasDropdown" in link && link.hasDropdown ? (
              <>
                <ul className="mt-1 space-y-1 border-l border-[#e8edf3] pl-4 lg:hidden">
                  {SERVICES_DROPDOWN_ITEMS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onLinkClick}
                        className="inline-flex py-1.5 text-[14px] font-medium text-[#4a4a4a] transition-colors hover:text-[#00aeef]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <ul className="hidden min-w-[190px] border border-[#e9eef4] bg-white py-2 shadow-[0_10px_24px_rgba(0,0,0,0.1)] lg:absolute lg:left-0 lg:top-full lg:z-50 lg:block lg:translate-y-2 lg:invisible lg:opacity-0 lg:transition lg:duration-150 lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:visible lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
                  {SERVICES_DROPDOWN_ITEMS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onLinkClick}
                        className="block px-4 py-2 text-[14px] font-medium text-[#2d2d2d] transition-colors hover:bg-[#f7fbff] hover:text-[#00aeef]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
