export interface Projeto {
  id: number
  titulo: string
  descricao: string
  imagemPrincipal: string
  github: string
  linkedin: string
  imagens: string[]
  classImg: string
  classBotao: string
  classImgPrincipal: string
  stack: {
    nome: string
    icon: string
  }[]
}
