import {Dispatch} from 'redux';
import {isAxiosError} from 'axios';
import {setErrorAC} from '../../app/app-reducer.ts';

type ServerError = {
    errorMessages: Array<{field: string, message: string}>
}

export const handleError =(dispatch: Dispatch, e: unknown)=> {
    let errorMessage: string
    if (isAxiosError<ServerError>(e)) {
        errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
    } else {
        errorMessage = (e as Error).message
    }
    dispatch(setErrorAC(errorMessage))
}