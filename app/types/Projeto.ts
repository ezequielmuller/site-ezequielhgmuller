export interface Projeto {
  id: number
  titulo: string
  descricaoCurta: string
  descricaoCompleta: string
  imagemPrincipal: string
  github: string
  linkedin: string
  imagens: string[]
  stack: {
    nome: string
    icon: string
  }[]
}
