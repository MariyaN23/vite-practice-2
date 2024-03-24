import './App.css'
import {Decks} from '../features/decks/Decks.tsx'
import {GlobalError} from './GlobalError/GlobalError.tsx'
import {selectStatus} from './app-selectors.ts';
import {LinearLoader} from '../common/components/Loader/LinearLoader.tsx';
import {useAppSelector} from './store.ts';

export const App = () => {
    const status = useAppSelector(selectStatus)
    return (
        <div>
            {status === 'loading' && <LinearLoader/>}
            <Decks/>
            <GlobalError/>
        </div>
    )
}
