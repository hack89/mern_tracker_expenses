export default (state, { type, payload }) => {
    switch (type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: payload
            }

        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: payload
            }

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(item => item._id !== payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, payload]
            }

        default:
            return state
    }
}