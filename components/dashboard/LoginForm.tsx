"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { login } from "@/actions/auth.actions";

import PrimaryButton from "../ui/buttons/PrimaryButton";
import PasswordInput from "../ui/forms/PasswordInput";
import TextInput from "../ui/forms/TextInput";
import RememberMe from "./RememberMe";

export default function LoginForm() {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    startTransition(async () => {
      const result = await login(email, password);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success("تم تسجيل الدخول");

      router.push("/admin/dashboard");

      router.refresh();
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <TextInput
        label="البريد الإلكتروني"
        type="email"
        placeholder="admin@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <PasswordInput
        label="كلمة المرور"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <RememberMe />

      <PrimaryButton
        type="submit"
        disabled={pending}
        className="w-full"
      >
        {pending
          ? "جارٍ تسجيل الدخول..."
          : "تسجيل الدخول"}
      </PrimaryButton>
    </form>
  );
}