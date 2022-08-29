import React from "react";

interface INote {
    id: string,
    title: string, 
    body: string,
    date: Date,
    delete: Function
}

export default INote;