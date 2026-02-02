export interface Projeto {
  id: number
  titulo: string
  descricaoCurta: string
  descricaoCompleta: string
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
