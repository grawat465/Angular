export class Movie{
    title:string;
    link:string;
    votes:number;

    constructor( title1:string,link1:string,votes?:number)
    {
        this.title=title1;
        this.link=link1;
        this.votes=votes||0;
    }
    upvote()
    {
        this.votes+=1;
    }
    downvote()
    {
        this.votes-=1;
    }
}
