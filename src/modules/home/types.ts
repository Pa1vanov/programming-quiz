export namespace IEntity {
  export interface Category {
    id: number
    title: string
    description: string
  }
  export interface Answer {
    id: number
    answer: string
  }
  export interface Question {
    id: number
    question: string
    answer: Answer[]
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
      id: number
      questions: [
        {
          id: string
          question: string
          answer: [
            {
              answer: string
              id: number
            }
          ]
        }
      ]
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
