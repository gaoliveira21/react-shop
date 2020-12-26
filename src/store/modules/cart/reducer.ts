type IAction = {
  type: string
  payload: Record<string, any>
}

const initialState = []

export const cart = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state
  }
}
