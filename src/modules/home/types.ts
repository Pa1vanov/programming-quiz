export namespace IEntity {
  export interface Category {
    id: number
    title: string
    description: string
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

export namespace IApi {
  export namespace Feed {
    export interface Request extends IForm.Feed {}
    export interface Response {}
  }
  export namespace Category {
    export interface Request {
      category: IEntity.Category
    }
    export interface Response extends IEntity.Category {}
  }
}
