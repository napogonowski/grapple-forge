import { Button } from "../../components/ui/button";
import { buttonVariants } from "../../components/ui/button";
import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1 className="p-10 text-4xl font-bold tracking-tight lg:text-5xl">
        GRAPPLE FORGE
      </h1>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
      <Button
        className="p-5 bg-inherit w-[200px] text-lg text-black border-2 rounded-full transition delay-150 hover:bg-amber-500 duration-300 border-neutral-950"
        onClick={() => setShowSignUp(!showSignUp)}
      >
        {showSignUp ? "Log In" : "Sign Up"}
      </Button>
    </main>
  );
}
