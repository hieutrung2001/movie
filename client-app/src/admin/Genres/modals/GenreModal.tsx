import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import UseGenreModal from '../hooks/useGenreModal'

const GenreModal = (props: any) => {
  const {
    id,
    item
  } = props

  const [form, setValues] = useState({
    name: "",
    slug: ""
  })

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = (e) => {
    console.log(form)
    e.preventDefault();
    UseGenreModal({ item })
  }

  useEffect(() => {
    if (item) {
      const {
        name,
        slug
      } = item
      setValues({ name, slug })
    }
  }, [item])

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
      {/* <submitForm>Submit</submitForm> */}
    </Form>
  )
}

export default GenreModal