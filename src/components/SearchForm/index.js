import React from 'react'
import { useLocation } from 'wouter'
import useForm from './useForm'
import Button from 'components/Button'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const SearchForm = ({initialKeyword = '', initialRating = RATINGS[0]}) => {
  // eslint-disable-next-line
  const [_, pushLocation] = useLocation()

  const { keyword, rating, times, updateKeyword, updateRating } = useForm(initialKeyword, initialRating)

  const handleChange = evt => {
    updateKeyword(evt.target.value)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = evt => {
    updateRating(evt.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={keyword} onChange={handleChange} placeholder="Search a gif here..."/>
      <Button>Buscar</Button>
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating Type</option>
        {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
      </select>
      {times}
    </form>
  )
}

export default React.memo(SearchForm)
