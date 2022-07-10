import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, ManyToOne, Generated } from 'typeorm'

@Entity()

export class Company extends BaseEntity{
    @PrimaryColumn({type:"uuid"})
    @Generated("uuid") id: string;
     
    @Column()
    name:string 
    @Column()
    description:number
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
}
  