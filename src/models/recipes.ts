import mongoose,{Document, Schema} from "mongoose";

export interface RecipeAttributes {
    name: String,
    description:String,
    email:String,
    ingredients:Array<String>,
    category:String,
    image:String
}

export interface RecipeInstance extends RecipeAttributes, Document {}


const recipesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    email:{
        type:String
    },
    ingredients:{
        type:[String],
        required:true
    },
    category:{
        type:String,
        enum: ['Thai', 'American', 'Chinese', 'Spanish', 'Indian', 'Nigerian', 'Mexican'],
        required:true
    },
    image:{
        type:String,
        required:false
    }
})

recipesSchema.index({name: "text", description:'text'})

//recipesSchema.index({"$**": 'text'})

export default mongoose.model('Recipes', recipesSchema)