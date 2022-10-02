import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../feature/reservationSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardType {
    name: string;
    index: number;
}

function ReservationCard({ name, index }: ReservationCardType) {
    const dispatch = useDispatch();
    return (
        <div
            className="reservation-card-container"
        >
            <p>{name}</p>
        </div>
    );
}

export default ReservationCard;