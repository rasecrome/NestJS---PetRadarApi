import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePetRadarTables1747181400000 implements MigrationInterface {
  name = 'CreatePetRadarTables1747181400000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "lost_pets" (
        "id" SERIAL NOT NULL,
        "petName" character varying NOT NULL,
        "species" integer NOT NULL,
        "description" character varying NOT NULL,
        "ownerContact" character varying NOT NULL,
        "latitude" double precision NOT NULL,
        "longitude" double precision NOT NULL,
        "isActive" boolean NOT NULL DEFAULT true,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_lost_pets" PRIMARY KEY ("id")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "found_pets" (
        "id" SERIAL NOT NULL,
        "description" character varying NOT NULL,
        "species" integer NOT NULL,
        "reporterContact" character varying NOT NULL,
        "latitude" double precision NOT NULL,
        "longitude" double precision NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_found_pets" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "found_pets"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "lost_pets"`);
  }
}
