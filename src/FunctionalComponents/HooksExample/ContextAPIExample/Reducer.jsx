export default function Reducer(state, action) {
    switch (action.type) {
        case "INC_NUM1":
            return { ...state, num1: state.num1 + 1 }
        case "INC_NUM2":
            return { ...state, num2: state.num2 + 1 }
        case "DEC_NUM1":
            if (state.num1 > 1)
                return { ...state, num1: state.num1 - 1 }
            else
                return state
        case "DEC_NUM2":
            if (state.num2 > 1)
                return { ...state, num2: state.num2 - 1 }
            else
                return state
        default:
            return state
    }
}
