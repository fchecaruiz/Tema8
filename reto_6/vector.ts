export class Vector {
    private elements: number[];

    constructor(n: number, k: number = 10) {
        this.elements = [];
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k));
        }
    }

    public print(): void {
        console.log(this.elements);
    }

    public add(v1: Vector): number[] {

      let suma: number[] = [];
      for (let i = 0; i < this.elements.length; i++) {
          suma[i] = this.elements[i] + v1.elements[i];
      }
        return suma;
    }

    public subs(v1: Vector): number[] {

        let resta: number[] = [];
        for (let i = 0; i < this.elements.length; i++) {
            resta[i] = this.elements[i] - v1.elements[i];
        }
          return resta;
    }

      public mult(v1: Vector): number[] {

        let producto: number[] = [];
        for (let i = 0; i < this.elements.length; i++) {
            producto[i] = this.elements[i] - v1.elements[i];
        }
          return producto;
    }

      public multNumber(n: number): number[] {
        let resultado: number[] = [];
        for (let i = 0; i < this.elements.length; i++) {
            resultado[i] = this.elements[i] * n; 
            
        }
        return resultado;
    }
    
}






