export namespace IEntity {
  export interface Category {
    id: number
    title: string
    description: string
  }
}

export namespace IApi {
  export namespace Categories {
    export interface Request {}
    export interface Response {
      categories: IEntity.Category[]
    }
  }
}
