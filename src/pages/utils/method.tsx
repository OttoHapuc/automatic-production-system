import GenericError from "@/server/error";

export default function Method(type:string, method?:string){
    if(type !== method) throw GenericError("Invalid Method",405)
}