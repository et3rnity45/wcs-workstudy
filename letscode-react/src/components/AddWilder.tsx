import React from "react";
import { Button, Form, Input, Label, Error } from "../styles/form-elements";
import { ReactComponent as LoadingIcon } from "../assets/icons/hourglass.svg";
import useWilderCreate from "../hooks/useWilderCreate";

function AddWilder(): JSX.Element {
  const {
    inputName,
    inputCity,
    formSubmission,
    loading,
    delayed,
    error,
  } = useWilderCreate();

  return (
    <Form onSubmit={formSubmission}>
      <Label htmlFor="name-input">Name :</Label>
      <Input
        id="name-input"
        type="text"
        placeholder="Type the name"
        required
        value={inputName.value}
        onChange={inputName.onChange}
      />
      <Label htmlFor="city-input">City :</Label>
      <Input
        id="city-input"
        type="text"
        placeholder="Type the city"
        required
        value={inputCity.value}
        onChange={inputCity.onChange}
      />
      {error !== "" && <Error>{error}</Error>}
      <Button disabled={loading} showLoading={loading && !delayed}>
        {loading && !delayed ? <LoadingIcon /> : "Add"}
      </Button>
    </Form>
  );
}

export default AddWilder;
