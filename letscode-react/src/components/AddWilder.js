import { Button, Form, Input, Label, Error } from "../styles/form-elements";
import { ReactComponent as LoadingIcon } from "../assets/icons/hourglass.svg";
import useWilderCreate from "../hooks/useWilderCreate";


function AddWilder({ onSuccess }) {
  const {
    inputName,
    inputCity,
    formSubmission,
    loading,
    delayed,
    error
  } = useWilderCreate(onSuccess)

  return (
    <Form onSubmit={formSubmission}>
      <Label htmlFor="name-input">Name :</Label>
      <Input
        id="name-input"
        type="text"
        placeholder="Type the name"
        required
        {...inputName}
      />
      <Label htmlFor="city-input">City :</Label>
      <Input
        id="city-input"
        type="text"
        placeholder="Type the city"
        required
        {...inputCity}
      />
      {error !== "" && <Error>{error}</Error>}
      <Button
        disabled={loading}
        showLoading={loading && !delayed}
      >
        {loading && !delayed ? <LoadingIcon /> : "Add"}
      </Button>
    </Form>
  );
}

export default AddWilder;