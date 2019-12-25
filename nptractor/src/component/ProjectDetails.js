import React from "react";
import { data } from "../data/projects"
import i18n from "i18next";

export function ProjectDetails(prop) {
    const getLanguage = () => i18n.language || window.localStorage.i18nextLng
    const proj = data.find(project => project.id == prop.match.params.id)
    return <h2>{proj.title[getLanguage()]}</h2>;
}