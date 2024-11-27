import { Table, Column, Model, DataType, AutoIncrement } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: false, })
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey:true, 
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;
}