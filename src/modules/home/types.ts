export namespace IEntity {
  export interface Category {
    id: number
    title: string
    description: string
  }
  export interface Question {
    id: number
    question: string
    answer: Answer[]
  }
  export interface Answer {
    id: number
    answer: string
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
  export namespace Question {
    export interface Request {
      id: number
    }
    export interface Response {
      questions: IEntity.Question[]
    }
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

export namespace IQuery {
  export interface Questions {
    question: IEntity.Question[]
  }
}
