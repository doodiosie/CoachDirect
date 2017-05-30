import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import {Table} from "react-bootstrap";
import {withState, withHandlers, compose} from "recompose";

import {ToggleTextFilter, ToggleCurFilter, ToggleDateFilter} from "../FilterComponents";
import {Pages, TableHeadData} from "../TableComponents";

const Template = ({data, onOrder, onFilter, loadMore, onDelete, setPage, page}) => (
    <div>
        <Table>
            <thead>
                <tr>
                    <th>
                        <TableHeadData onOrder={onOrder} onFilter={onFilter} field={{
                                name: "id",
                                label: "Id",
                            }}/>
                    </th>
                    <th>
                        <span onClick={() => onOrder("firstName")}>First Name</span>
                        <ToggleTextFilter onFilter={onFilter} field="firstName"/>
                    </th>
                    <th>
                        <span onClick={() => onOrder("lastName")}>Last Name</span>
                        <ToggleTextFilter onFilter={onFilter} field="lastName"/>
                    </th>
                    <th>
                        <span onClick={() => onOrder("pickupDate")}>Pickup Date</span>
                        <ToggleTextFilter onFilter={onFilter} field="pickupDate"/>
                    </th>
                    <th>
                        <span onClick={() => onOrder("pickupAddress")}>Pickup Address</span>
                        <ToggleTextFilter onFilter={onFilter} field="pickupAddress"/>
                    </th>
                    <th>
                        <span onClick={() => onOrder("destinationAddress")}>Destination Address</span>
                        <ToggleTextFilter onFilter={onFilter} field="destinationAddress"/>
                    </th>
                    <th>
                        <span onClick={() => onOrder("price")}>Price</span>
                        <ToggleTextFilter onFilter={onFilter} field="price"/>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map(booking => (
                    <tr key={booking.id} style={{
                            height: 40
                        }}>
                        <td>{booking.id}</td>
                        <td>{booking.firstName}</td>
                        <td>{booking.lastName}</td>
                        <td>{moment(booking.pickupDate, "x").format("DD/MM/YY")}</td>
                        <td>{booking.pickupAddress}</td>
                        <td>{booking.destinationAddress}</td>
                        <td>£{booking.price/100}</td>
                        <td>
                            <Link to={`/admin/bookings/edit/${booking.id}`}>
                                Edit
                            </Link>
                        </td>
                        <td>
                            <a onClick={() => onDelete(booking.id)}>Delete</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <Pages setPage={setPage} page={page}/>
    </div>
);

export default Template;
