import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // إنشاء التصنيفات
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
    {
      name: "مستحضرات التجميل",
      slug: "cosmetics",
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

  console.log("✅ Categories created");

  // إنشاء المدير
  const email = "admin@attar.com";
  const password = await bcrypt.hash("12345678", 10);

  await prisma.user.upsert({
    where: {
      email,
    },
    update: {},
    create: {
      email,
      password,
      role: "ADMIN",
    },
  });

  console.log("✅ Admin created");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });