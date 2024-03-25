import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import {useAppSelector} from '../store.ts';
import {selectError} from '../app-selectors.ts';
import {useDispatch} from 'react-redux';
import {setErrorAC} from '../app-reducer.ts';

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setErrorAC(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}