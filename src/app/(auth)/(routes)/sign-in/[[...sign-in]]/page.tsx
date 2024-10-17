import { Github } from "@/assets/github";
import { Google } from "@/assets/google";
import { AuthCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <AuthCard
      headerTitle="Welcome Back"
      headerSubtitle="Please Sign In to continue."
      footerMessage="Don't have an Account?"
      footerLabel="Sign Up"
      footerHref="/sign-up"
    >
      <div className="relative flex flex-col gap-y-6 items-center justify-center">
        <Button className="bg-white px-12 hover:bg-white/80 text-black text-lg">
          <Google className="mr-2" />
          Continue With Google
        </Button>
        <div className="relative">
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 \px-2 text-sm text-white">
            Or
          </span>
        </div>
        <Button className="bg-white px-12 hover:bg-white/80 text-black text-lg">
          <Github className="mr-2" />
          Continue With Github
        </Button>
      </div>
    </AuthCard>
  );
}
