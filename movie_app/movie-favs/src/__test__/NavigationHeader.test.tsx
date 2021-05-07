import React from 'react'
import { render } from '@testing-library/react'
import NavigationHeader from '../components/NavigationHeader/index'

describe('Given a NavigationHeader component', () => {
  let component: any

  beforeEach(() => {
    component = (<NavigationHeader/>)
  })

  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })
})
