
export const Reducer= (state,action) =>{

    switch(action.type){

        case("INITIAL_STATE"):
            const data = []
            action.payload.forEach((card) => {
                data.unshift(card)
            })
            return {
                cards: data
            }
        case("ADD"):
            return {
                cards : [action.payload,...state.cards]
            }
        default:
            return state
    }

}