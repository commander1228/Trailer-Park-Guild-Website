export interface Item {
    id:number
    name:string
    quality: Quality
    amount:number
}

enum Quality {
    Poor = "#9d9d9d",
    Common = "#ffffff",
    Uncommon = "#1eff00",
    Rare = "#0070dd",
    Epic = "#a335ee",
    Legendary = "#ff8000"
}