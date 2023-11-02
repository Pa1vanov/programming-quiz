export namespace IEntity {
  export interface User {
    id: number
    full_name: string
    username: string
    email: string
  }

  export interface Tokens {
    refresh: string
    access: string
  }
}

export namespace IForm {
  export interface Register {
    full_name: string
    email: string
    username: string
    password: string
  }

  export interface Login {
    username: string
    password: string
  }

  export interface ForgotPassword {
    email: string
  }

  export interface ActivateCode {
    email: string
    activate_code: string
  }

  export interface ResetPasswordConfirm {
    email: string
    activation_code: string
    new_password: string
    confirm_password: string
  }
}

export namespace IApi {
  export namespace Login {
    export interface Request extends IForm.Login {}
    export interface Response {
      refresh: string
      access: string
    }
  }

  export namespace Register {
    export interface Request extends IForm.Register {}
    export interface Response extends IForm.Register {}
  }

  export namespace ForgotPassword {
    export interface Request extends IForm.ForgotPassword {}
    export interface Response {}
  }

  export namespace ActivateCode {
    export interface Request extends IForm.ActivateCode {}
    export interface Response {}
  }

  export namespace ResetPasswordConfirm {
    export interface Request extends IForm.ResetPasswordConfirm {}
    export interface Response {}
  }
  export namespace Profile {
    export interface Request {}
    export interface Response extends IEntity.User {}
  }
}

export namespace IContext {
  export interface Auth {
    user: IEntity.User | null
    isLoading: boolean
    isAuthenticated: boolean
    methods: {
      login: (user: IEntity.User) => void
      logout: () => void
    }
  }
}
