import {render} from "react-testing-library"
import "dom-testing-library/extend-expect";
import {Joke} from "../joke.js"

test("Joke component receivew props and then renders text", () => {
  const {getByTestId} = render(
    <Joke text="The funniest joke this year." />
  );

  expect(getByTestId("joke-text")).toHaveTextContent(
    "The funniest joke this year."
  );
})
