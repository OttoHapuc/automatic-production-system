import { ObjectSchema } from "joi";
import GenericError from "../error";

export default function validate(schema:ObjectSchema, value:any){
    const {error} = schema.validate(value, {abortEarly:false});
    if (error) throw GenericError(error.details.map((d) => d.message),422)
}