import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity('movies')
class Movie {
    @CreateDateColumn()

    @UpdateDateColumn()

    @DeleteDateColumn()

    @PrimaryGeneratedColumn()
    id:number

    @Column({type: 'varchar',length: 50, unique:true, nullable:false})
    name:string

    @Column({type: 'text', unique:false, nullable:true})
    description?:string | null | undefined

    @Column({type: 'int', unique:false, nullable:false})
    duration:number

    @Column({type: 'int', unique:false, nullable:false})
    price:number


}

export default Movie;
