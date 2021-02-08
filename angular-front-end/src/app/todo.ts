export class Todo
{
    id:number;
    status:number;
    todotittle:String;
    tododescription:String;
    createDateTime:String;
    updateDateTime:String;
    constructor(status:number,todotittle:String,tododescription:String)
    {
this.status=status;
this.todotittle=todotittle;
this.tododescription=tododescription;
    }

}