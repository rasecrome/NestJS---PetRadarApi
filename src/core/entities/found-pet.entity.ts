import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PetSpecies } from '../enums/pet-species.enum';

@Entity('found_pets')
export class FoundPet {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column({ type: 'int' })
  species!: PetSpecies;

  @Column()
  reporterContact!: string;

  @Column({ type: 'double precision' })
  latitude!: number;

  @Column({ type: 'double precision' })
  longitude!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}
