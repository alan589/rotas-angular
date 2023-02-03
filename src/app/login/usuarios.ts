export interface IUsuarios {
    id: number;
    nome: string;
    senha: string;
    admin: boolean;
}

export const usuarios: IUsuarios[] = [
  {id: 1, nome: 'alan', senha: '123', admin: true},
  {id: 2, nome: 'junior', senha: '123', admin: false},
  {id: 3, nome: 'victor', senha: '123', admin: false}
]
