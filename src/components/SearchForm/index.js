import React, { useState } from 'react'

const SearchForm = ({handleSubmit}) => {
  const [keyword, setKeyword] = useState('')

  const handleChange = evt => setKeyword(evt.target.value)

  const onSubmit = evt => {
    evt.preventDefault();
    handleSubmit(keyword)
  }

  return (
    <form onSubmit={onSubmit} role="form">
      <input type="text" value={keyword} onChange={handleChange} placeholder="Search a gif here..."/>
      <button>Buscar</button>
    </form>
  )
}

export default React.memo(SearchForm)
