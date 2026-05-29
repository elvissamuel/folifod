import { TopBar } from "@/components/layouts/top-bar";
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";

type SiteShellProps = {
  children: React.ReactNode;
  floatingNav?: boolean;
};

export function SiteShell({ children, floatingNav = true }: SiteShellProps) {
  return (
    <>
      {floatingNav ? (
        <div className="relative z-30">
          <TopBar />
          <SiteHeader variant="floating" />
        </div>
      ) : (
        <>
          <TopBar />
          <SiteHeader variant="static" />
        </>
      )}
      {children}
      <SiteFooter />
    </>
  );
}
