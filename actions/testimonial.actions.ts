"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateTestimonialInput {
  name: string;
  comment: string;
  rating: number;
}

export async function createTestimonial(
  data: CreateTestimonialInput
) {
  await prisma.testimonial.create({
    data: {
      name: data.name,
      comment: data.comment,
      rating: data.rating,
    },
  });

  revalidatePath("/");
}

export async function getTestimonials() {
  return prisma.testimonial.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getPendingTestimonials() {
  return prisma.testimonial.findMany({
    where: {
      approved: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function approveTestimonial(id: string) {
  await prisma.testimonial.update({
    where: {
      id,
    },
    data: {
      approved: true,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/testimonials");
}

export async function deleteTestimonial(id: string) {
  await prisma.testimonial.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/testimonials");
}