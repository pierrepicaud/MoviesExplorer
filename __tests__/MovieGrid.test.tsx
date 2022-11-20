import { cleanup, render, screen } from '@testing-library/react'
import MovieGrid from '../components/MovieGrid'
import '@testing-library/jest-dom'

afterEach(() => {
  cleanup()
})

describe('should render', () => {
  it('all details rendered', () => {
    const movies = [
      {
        adult: false,
        backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
        genre_ids: [28, 14, 878],
        id: 436270,
        original_language: 'en',
        original_title: 'Black Adam',
        overview: 'Nearly 5,000 years',
        popularity: 12157.649,
        poster_path: '/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
        release_date: '2022-10-19',
        title: 'Black Adam',
        video: false,
        vote_average: 6.8,
        vote_count: 1191,
      },
      {
        adult: false,
        backdrop_path: '/olPXihyFeeNvnaD6IOBltgIV1FU.jpg',
        genre_ids: [27, 9648, 53],
        id: 882598,
        original_language: 'en',
        original_title: 'Smile',
        overview: 'After witnessing a',
        popularity: 4162.737,
        poster_path: '/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg',
        release_date: '2022-09-23',
        title: 'Smile',
        video: false,
        vote_average: 6.8,
        vote_count: 695,
      },
    ]

    render(<MovieGrid movies={movies} title="test grid" />)

    const movieGridElem = screen.getByTestId('movie-882598')
    expect(movieGridElem).toBeInTheDocument()
    expect(movieGridElem).toHaveTextContent('Smile')

    const title = screen.getByTestId('grid-title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('test grid')
  })
})
