import { Card, CardContent, CardHeader } from "../ui/card";
import { AuthFooter } from "./auth-footer";
import { AuthHeader } from "./auth-header";

interface AuthCardProps {
  headerTitle: string;
  headerSubtitle: string;
  footerMessage: string;
  footerLabel: string;
  footerHref: string;
  children?: React.ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({
  headerTitle,
  headerSubtitle,
  footerMessage,
  footerLabel,
  footerHref,
  children,
}) => {
  return (
    <Card className="flex flex-col gap-y-4 items-center p-8 bg-[#060d18] text-white border-none rounded-xl max-w-md">
      <CardHeader>
        <AuthHeader title={headerTitle} subtitle={headerSubtitle} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <AuthFooter
        message={footerMessage}
        label={footerLabel}
        href={footerHref}
      />
    </Card>
  );
};
