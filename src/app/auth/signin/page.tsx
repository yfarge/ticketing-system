"use client";

import { signIn } from "next-auth/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function SignIn() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Log in</CardTitle>
          <CardDescription>
            Authenticate to access the ticketing system
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            variant="default"
            onClick={() => signIn("auth0", { callbackUrl: "/" })}
          >
            Log In
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
