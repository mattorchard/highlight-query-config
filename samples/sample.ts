const queries = [
  { text: `SELECT * FROM "table" WHERE "column" IS NOT NULL`, values: [] },
  { text: `UPDATE "table" SET "column" IS NULL`, values: [] },
];

const text = `DELETE FROM "table" WHERE "column" IS NOT NULL`;
