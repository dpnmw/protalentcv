import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { ArrowRightIcon, EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useToggle } from "usehooks-ts";
import z from "zod";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/integrations/auth/client";

import { SocialAuth } from "./-components/social-auth";

export const Route = createFileRoute("/auth/register")({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (context.session) throw redirect({ to: "/dashboard", replace: true });
    if (context.flags.disableSignups) throw redirect({ to: "/auth/login", replace: true });
    return { session: null };
  },
});

const formSchema = z.object({
  name: z.string().min(3).max(64),
  username: z
    .string()
    .min(3)
    .max(64)
    .trim()
    .toLowerCase()
    .regex(/^[a-z0-9._-]+$/, {
      message: "Username can only contain lowercase letters, numbers, dots, hyphens and underscores.",
    }),
  email: z.email().toLowerCase(),
  password: z.string().min(6).max(64),
  agreedToTerms: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function RouteComponent() {
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, toggleShowPassword] = useToggle(false);
  const { flags, planConfig } = Route.useRouteContext();

  const hasLegalLinks = !!(planConfig.termsUrl || planConfig.privacyUrl);

  const form = useForm<FormValues>({
    resolver: zodResolver(
      hasLegalLinks
        ? formSchema.extend({ agreedToTerms: z.literal(true, { errorMap: () => ({ message: "You must agree to the Terms of Service and Privacy Policy." }) }) })
        : formSchema,
    ),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      agreedToTerms: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    const toastId = toast.loading(t`Signing up...`);

    const { error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      username: data.username,
      displayUsername: data.username,
      callbackURL: "/dashboard",
    });

    if (error) {
      toast.error(error.message, { id: toastId });
      return;
    }

    setSubmitted(true);
    toast.dismiss(toastId);
  };

  if (submitted) return <PostSignupScreen />;

  return (
    <>
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          <Trans>Create a new account</Trans>
        </h1>

        <div className="text-muted-foreground">
          <Trans>
            Already have an account?{" "}
            <Button
              variant="link"
              nativeButton={false}
              className="h-auto gap-1.5 px-1! py-0"
              render={
                <Link to="/auth/login">
                  Sign in now <ArrowRightIcon />
                </Link>
              }
            />
          </Trans>
        </div>
      </div>

      {!flags.disableEmailAuth && (
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Trans>Name</Trans>
                  </FormLabel>
                  <FormControl
                    render={
                      <Input min={3} max={64} autoComplete="section-register name" placeholder="John Doe" {...field} />
                    }
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Trans>Username</Trans>
                  </FormLabel>
                  <FormControl
                    render={
                      <Input
                        min={3}
                        max={64}
                        autoComplete="section-register username"
                        placeholder="john.doe"
                        className="lowercase"
                        {...field}
                      />
                    }
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Trans>Email Address</Trans>
                  </FormLabel>
                  <FormControl
                    render={
                      <Input
                        type="email"
                        autoComplete="section-register email"
                        placeholder="john.doe@example.com"
                        className="lowercase"
                        {...field}
                      />
                    }
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Trans>Password</Trans>
                  </FormLabel>
                  <div className="flex items-center gap-x-1.5">
                    <FormControl
                      render={
                        <Input
                          min={6}
                          max={64}
                          type={showPassword ? "text" : "password"}
                          autoComplete="section-register new-password"
                          {...field}
                        />
                      }
                    />

                    <Button size="icon" variant="ghost" onClick={toggleShowPassword}>
                      {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {hasLegalLinks && (
              <FormField
                control={form.control}
                name="agreedToTerms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-start gap-x-2">
                      <FormControl
                        render={
                          <Checkbox
                            id="agree-terms"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-0.5"
                          />
                        }
                      />
                      <label htmlFor="agree-terms" className="cursor-pointer text-sm leading-snug text-muted-foreground">
                        I agree to the{" "}
                        {planConfig.termsUrl ? (
                          <a
                            href={planConfig.termsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground underline underline-offset-2"
                          >
                            Terms of Service
                          </a>
                        ) : (
                          "Terms of Service"
                        )}
                        {planConfig.termsUrl && planConfig.privacyUrl ? " and " : ""}
                        {planConfig.privacyUrl ? (
                          <a
                            href={planConfig.privacyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground underline underline-offset-2"
                          >
                            Privacy Policy
                          </a>
                        ) : null}
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button type="submit" className="w-full">
              <Trans>Sign up</Trans>
            </Button>
          </form>
        </Form>
      )}

      <SocialAuth />
    </>
  );
}

function PostSignupScreen() {
  return (
    <>
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          <Trans>You've got mail!</Trans>
        </h1>
        <p className="text-muted-foreground">
          <Trans>Check your email for a link to verify your account.</Trans>
        </p>
      </div>

      <Alert>
        <AlertTitle>
          <Trans>This step is optional, but recommended.</Trans>
        </AlertTitle>
        <AlertDescription>
          <Trans>Verifying your email is required when resetting your password.</Trans>
        </AlertDescription>
      </Alert>

      <Button
        nativeButton={false}
        render={
          <Link to="/dashboard">
            <Trans>Continue</Trans> <ArrowRightIcon />
          </Link>
        }
      />
    </>
  );
}
