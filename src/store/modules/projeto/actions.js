import types from "./types";

export function allProjetos() {
    return { type : types.ALL_PROJETOS}
}

export function updateProjeto(projetos) {
    return { type : types.UPDATE_PROJETO, projetos }
}