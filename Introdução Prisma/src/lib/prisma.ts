  //  import { PrismaClient } from '../generated/prisma'
   import { PrismaClient } from '../generated/prisma'
   export const prisma = new PrismaClient({
   // Habilita a exibição de informações no terminal do servidor como [queries, info, warnings, and errors] se preferir deixe apenas a visualização das query's.
  //  log: ["query", "info", "warn", "error"],
     log: ["query"],
   });

