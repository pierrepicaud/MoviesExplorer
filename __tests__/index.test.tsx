import {cleanup, render, screen} from '@testing-library/react'
import Home from '../pages'
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup()
})

describe('should render', ()=>{
    it('result rendering', ()=>{
        const movies = {"page":1,"results":[{"adult":false,"backdrop_path":"/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg","genre_ids":[28,14,878],"id":436270,"original_language":"en","original_title":"Black Adam","overview":"Nearly 5,000 years after","popularity":12157.649,"poster_path":"/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg","release_date":"2022-10-19","title":"Black Adam","video":false,"vote_average":6.8,"vote_count":1191}],"total_pages":35966,"total_results":719317}

        render(<Home movies={movies}/>)

        const movieGridElem = screen.getByTestId("movie-436270")
        expect(movieGridElem).toBeInTheDocument()
        expect(movieGridElem).toHaveTextContent('Black Adam')

        const title = screen.getByTestId("grid-title")
        expect(title).toBeInTheDocument()
        expect(title).toHaveTextContent("What's Popular?")

    })
})