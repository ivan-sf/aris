import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, ManyToOne, Generated } from 'typeorm'

@Entity()

export class Audit extends BaseEntity{
    @PrimaryColumn({type:"uuid"})
    @Generated("uuid") id: string;
     
    @Column()
    method:string 
    @Column()
    status:number 
    @Column()
    type:string 
    @Column()
    response:string
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
}
  