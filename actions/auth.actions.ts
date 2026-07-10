"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

import {
  createSession,
  destroySession,
} from "@/lib/session";

export async function login(
  email: string,
  password: string
) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "البريد الإلكتروني غير صحيح",
    };
  }

  const valid = await bcrypt.compare(
    password,
    user.password
  );

  if (!valid) {
    return {
      success: false,
      message: "كلمة المرور غير صحيحة",
    };
  }

  await createSession(user.id);

  return {
    success: true,
  };
}

export async function logout() {
  await destroySession();

  redirect("/admin/login");
}