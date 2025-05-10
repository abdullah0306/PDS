require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});

async function main() {
  const hashedPassword = await bcrypt.hash('Admin@123', 10);

  try {
    const admin = await prisma.user.upsert({
      where: { email: 'admin@pds.co' },
      update: {},
      create: {
        email: 'admin@pds.co',
        fullName: 'Admin User',
        password: hashedPassword,
        role: 'admin'
      },
    });

    console.log('Admin user created:', admin);
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
