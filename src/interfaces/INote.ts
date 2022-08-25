import React from "react";

interface INote {
    id: string,
    title: string, 
    body: string,
    date: Date,
    color?: string
}

export default INote;