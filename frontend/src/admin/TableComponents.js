import React from "react";
import {withState, compose, withHandlers} from "recompose";
import {Button} from "react-bootstrap";
import {ToggleTextFilter} from "./FilterComponents";

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

export const TableHeadData = ({onFilter, onOrder, field}) => (
    <span>
        <span onClick={() => onOrder(field.name)}>{field.label}</span>
        <ToggleTextFilter onFilter={onFilter} field={field.name}/>
    </span>
);
