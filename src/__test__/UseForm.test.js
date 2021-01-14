import { act, renderHook } from '@testing-library/react-hooks'
import useForm from 'components/SearchForm/useForm'

test('should change keyword', () => {
  const { result } = renderHook(() => useForm())

  act(() => {
    result.current.updateKeyword('batman')
  })
  
  expect(result.current.keyword).toBe('batman')
})