import React from "react";
import {ComponentMeta } from "@storybook/react"
import {Card} from "../src"

export default {
    title: "Components/Card",
    component: Card
} as ComponentMeta<typeof Card>

export const CardComponent = () => {
    return(
        <Card><h1>Oi</h1></Card>
    )
}