import React from "react";
import *as C from "./style";
import ResumeItem from "../ResumeItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";


function Resume() {
    return (
        <C.Container>
            <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp} value="1000" />
            <ResumeItem title="Saída" Icon={FaRegArrowAltCircleDown} value="1000" />
            <ResumeItem title="Total" Icon={FaDollarSign} value="1000" />
        </C.Container>
    );
}

export default Resume;