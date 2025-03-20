import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import useGenreModal from '../hooks/useGenreModal'

const GenreModal = (props: any) => {
  const {
    id,
    item
  } = props

  const {
    onChange,
    submitForm,
    form
  } = useGenreModal(item)

  console.log('form', form)
  
  return (
    <Form onSubmit={submitForm}>
      <FormGroup>
        <Label for="name">Thể loại</Label>
        <Input 
          type="text"
          name="name"
          id="name"
          onChange={onChange}
          value={form.name == null ? "" : form.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="slug">Slug</Label>
        <Input 
          type="text"
          name="slug"
          id="slug"
          onChange={onChange}
          value={form.slug == null ? "" : form.slug}
        />
      </FormGroup>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default GenreModal