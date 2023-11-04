import { useCounter, useFetch } from '../hooks';
import {LoadingEpisode, Episode} from '../03-examples'


export const Layout = () => {

    const {counter, increment} = useCounter(1, 1, 51, 1);
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/episode/${counter}`)
    const {name, air_date} = !!data && data

    return (
        <>
            <h1>Rick and Morty Episodes</h1>
            <hr/>

            {isLoading ? <LoadingEpisode /> : <Episode episode={counter} name={name} air_date={air_date}/>}

            <button 
                className="btn btn-primary" 
                onClick={() => increment(1)}
                disabled={isLoading}
            >Next Episode</button>
        </>
    )
}