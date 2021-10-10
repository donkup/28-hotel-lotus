class Hotel {
    public readonly name: string;
    public readonly adress: string;
    public readonly stars: number;
    public rooms : {}[];

    public constructor(name: string, 
                    adress: string,
                    stars: number){

        this.name = name;
        this.adress = adress;
        this.stars = stars;
        this.rooms = [];

    }

    

}
