import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import {Table, Col, Row, Grid, ListGroup, ListGroupItem} from "react-bootstrap";

import {ToggleTextFilter, ToggleCurFilter, ToggleDateFilter} from "../FilterComponents";

export default ({data, onOrder, onFilter, loadMore, onDelete}) => (
    <div>
        <Link to="/admin/bookings/add">
            Add a Booking
        </Link>
        <Grid>
            <Row>
                <Col xs={2}>
                    <strong>
                        <span onClick={() => onOrder("id")}>Id</span>
                    </strong>
                    <ToggleTextFilter onFilter={onFilter} field="id"/>
                </Col>
                <Col xs={1}>
                    <strong>
                        <span onClick={() => onOrder("firstName")}>First Name</span>
                    </strong>
                    <ToggleTextFilter onFilter={onFilter} field="firstName"/>
                </Col>
                <Col xs={1}>
                    <strong>
                        <span onClick={() => onOrder("lastName")}>Last Name</span>
                    </strong>
                    <ToggleTextFilter onFilter={onFilter} field="lastName"/>
                </Col>
                <Col xs={1}>
                    <strong>
                        <span onClick={() => onOrder("pickupDate")}>Pickup Date</span>
                    </strong>
                    <ToggleTextFilter onFilter={onFilter} field="pickupDate"/>
                </Col>
                <Col xs={2}>
                    <strong>
                        <span onClick={() => onOrder("pickupAddress")}>Pickup Address</span>
                    </strong>
                    <ToggleTextFilter onFilter={onFilter} field="pickupAddress"/>
                </Col>
                <Col xs={2}>
                    <strong>
                        <span onClick={() => onOrder("destinationAddress")}>Destination Address</span>
                    </strong>
                    <ToggleTextFilter onFilter={onFilter} field="destinationAddress"/>
                </Col>
                <Col xs={1}>
                    <strong>
                        <span onClick={() => onOrder("price")}>Price</span>
                    </strong>
                    <ToggleCurFilter onFilter={onFilter} field="price"/>
                </Col>
            </Row>
            <Row style={{
                    height: "70vh",
                    overflowY: "scroll"
                }}
                onScroll={({target}) => {
                    target.childNodes[0].offsetHeight-target.scrollTop === target.clientHeight ? loadMore() : "";
                }}>
                <ListGroup style={{
                        paddingTop: 10,
                        margin: 0,
                    }}>
                    {data.map(booking => (
                        <ListGroupItem key={booking.id} style={{
                                height: 40
                            }}>
                            <Col xs={2}>{booking.id}</Col>
                            <Col xs={1}>{booking.firstName}</Col>
                            <Col xs={1}>{booking.lastName}</Col>
                            <Col xs={1}>{moment(booking.pickupDate, "x").format("DD/MM/YY")}</Col>
                            <Col xs={2}>{booking.pickupAddress}</Col>
                            <Col xs={2}>{booking.destinationAddress}</Col>
                            <Col xs={1}>£{booking.price/100}</Col>
                            <Col xs={1}>
                                <Link to={`/admin/bookings/edit/${booking.id}`}>
                                    Edit
                                </Link>
                            </Col>
                            <Col xs={1}>
                                <a onClick={() => onDelete(booking.id)}>Delete</a>
                            </Col>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Row>
        </Grid>
    </div>
);
