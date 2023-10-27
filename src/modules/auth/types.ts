export namespace IEntity {
  export interface User {
    fullName: string
  }
}

export namespace IContext {
  export interface Auth {
    isLoading: boolean
    isAuthenticated: boolean
    methods: {
      login: (user: IEntity.User) => void
      logout: () => void
    }
  }
}
