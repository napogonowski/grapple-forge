import { Button } from "../../components/ui/button";
import { buttonVariants } from "../../components/ui/button";
import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>

      <Button ghost className="p-5 m-5 h-4 bg-inherit w-[200px] text-lg text-black border-b-2 rounded-none	hover:none border-neutral-950		" onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Log In" : "Sign Up"}
      </Button>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </main>
  );
}
