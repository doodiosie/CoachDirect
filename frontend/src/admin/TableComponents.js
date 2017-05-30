import React from "react";
import {withState, compose, withHandlers} from "recompose";
import {Button} from "react-bootstrap";

export const Pages = compose(
    withHandlers({
        nextPage: ({page, setPage}) => () => setPage(page+1),
        prevPage: ({page, setPage}) => () => setPage(page-1),
    }),
)(({prevPage, nextPage, page}) => (
    <div>
        <Button onClick={prevPage}>Prev</Button>
        <Button onClick={nextPage}>Next</Button>
    </div>
));
