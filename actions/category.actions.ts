"use server";

import { prisma } from "@/lib/prisma";

export async function seedCategories() {
  const categories = [
    {
      name: "الأعشاب",
      slug: "herbs",
    },
    {
      name: "التوابل",
      slug: "spices",
    },
    {
      name: "العسل",
      slug: "honey",
    },
    {
      name: "الزيوت الطبيعية",
      slug: "oils",
    },
    {
      name: "المكسرات",
      slug: "nuts",
    },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        slug: category.slug,
      },
      update: {},
      create: category,
    });
  }
}