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
}
