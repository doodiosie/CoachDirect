import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Link from "next/link";
import Table, {TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";

import {TextFilter} from "../FilterComponents";

export default ({data, onOrder, onFilter, loadMore}) => (
    <div>
        <Table
            height="70vh"
            fixedHeader={true}>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>
                        <span onClick={() => onOrder("id")}>Id</span>
                        <TextFilter onFilter={onFilter} field="id"/>
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        <span onClick={() => onOrder("title")}>Title</span>
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        Question
                    </TableHeaderColumn>
                    <TableHeaderColumn onClick={() => onOrder("answerText")}>
                        Answer
                    </TableHeaderColumn>
                    <TableHeaderColumn/>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map(card => (
                    <TableRow key={card.id}>
                        <TableRowColumn>{card.id}</TableRowColumn>
                        <TableRowColumn>{card.title}</TableRowColumn>
                        <TableRowColumn>{card.questionText}</TableRowColumn>
                        <TableRowColumn>{card.answerText}</TableRowColumn>
                        <TableRowColumn>
                            <Link href={`/admin/cards/edit?id=${card.id}`}>
                                <a>
                                    <RaisedButton>
                                        Edit
                                    </RaisedButton>
                                </a>
                            </Link>
                        </TableRowColumn>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <div>
            <button onClick={() => loadMore()} className="btn btn-primary">
                Load More
            </button>
        </div>
    </div>
);
