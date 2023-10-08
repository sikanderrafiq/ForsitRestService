import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    itemName: string

    @Column()
    description: string

    @Column()
    quantity: number

}

export default Product;
