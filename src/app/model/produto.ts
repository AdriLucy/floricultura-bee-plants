export class Produto {
    public codigo: number;
    public nome: string;
    public descritivo: string;
    public valor: number;
    public promo: number;
    public destaque: number;
    public estoque: number;
    constructor(){
        this.codigo = 0;
        this.nome = "";
        this.descritivo = "";
        this.valor = 0;
        this.promo = 0;
        this.destaque = 0;
        this.estoque = 0;
    }
}
