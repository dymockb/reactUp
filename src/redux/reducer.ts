const defaultState = {
    user: { }
}

export default function reducer(
    state = defaultState,
    { type, payload }: {type: string, payload: any}
): any 
{
    console.log(type, payload)
    switch(type){
        case 'SET_USER_STATE':
            return {
                ...state,
                user: {
                    email: payload.email,
                    auth: payload.auth
                }
            }
    }

    return state
    
}