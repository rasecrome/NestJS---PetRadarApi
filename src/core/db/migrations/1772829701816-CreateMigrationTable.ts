import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMigrationTable1772829701816 implements MigrationInterface {
    name = 'CreateMigrationTable1772829701816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Migration placeholder - tables are created by 1747181400000-CreatePetRadarTables
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // no-op
    }
}
