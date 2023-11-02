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

  export namespace Feed {
    export interface Request extends IForm.Feed {}
    export interface Response {}
  }
}

export namespace IForm {
  export interface Feed {
    name: string
    email: string
    phone: string
    message: string
  }
}
