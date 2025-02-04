"use client";
import { HeroUIProvider } from "@heroui/react";
import { Messages, Inputs, SignUp } from "@/components";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  return (
    <HeroUIProvider>
      <div className="min-h-screen max-h-screen">
        {user ? (
          <>
            <Messages />
            <Inputs />
          </>
        ) : (
          <SignUp setUser={setUser} />
        )}
      </div>
    </HeroUIProvider>
  );
}