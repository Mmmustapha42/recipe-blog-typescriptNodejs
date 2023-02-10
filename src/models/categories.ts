import { required, string } from "joi";
import mongoose, {Schema, Document} from "mongoose";

export interface categoriesAttributes {
    name: string
    image: string
}

export interface Icategories extends categoriesAttributes, Document {}


const CategorySchema:Schema = new mongoose.Schema({
    name: {type:String, required:true},
    image: {type:String, required:true}

})

export default mongoose.model<Icategories>("Category", CategorySchema)