export class Serie {
    public id: number;
    public name: string;
    public channel: string;
    public seasons: number;
    public description: string;
    public webpage: string;
    public poster: string;
    constructor(id: number, name: string, channel: string, seasons: number, description: string, webpage: string,poster : string){
        this.id= id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.webpage = webpage;
        this.poster = poster;
    }

}
