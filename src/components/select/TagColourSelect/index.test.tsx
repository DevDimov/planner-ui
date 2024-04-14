/**
 * @jest-environment jsdom
 */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TagColourSelect from '.'
import { TagColor } from '../../../gql/codegen/graphql'

const defaultColorSelected = TagColor.Blue

test('renders without any props and has the default colour selected', async () => {
  render(<TagColourSelect />)
  await screen.findByRole('combobox')
  expect(
    screen.getByText(defaultColorSelected, { exact: false })
  ).toBeInTheDocument()
})

test('renders with a specific colour already selected', async () => {
  const defaultValue = TagColor.Red
  render(<TagColourSelect defaultValue={defaultValue} />)
  await screen.findByRole('combobox')
  expect(screen.getByText(defaultValue, { exact: false })).toBeInTheDocument()
})

/* NOTE: Interacting with the options cannot be tested for some reason. 
Try creating a test with Storybook or Cypress */
// test('user can select options', async () => {
//   const option1 = TagColor.Red
//   const option2 = TagColor.Yellow
//   render(<TagColourSelect />)
//   const button = await screen.findByRole('combobox')
//   fireEvent.click(button)
//   const options = await screen.findAllByRole('option')
//   expect(options.length).toBeGreaterThan(2)
// })
