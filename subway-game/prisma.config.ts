import "dotenv/config"
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("postgresql://neondb_owner:npg_i4TIDBCqxP3Y@ep-spring-forest-addod12h-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"),
  },
});
