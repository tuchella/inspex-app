import Vue from "vue";

export function getFilters(root) {
    return Vue.axios.get(root + "/filters");
}

export function runAnalysis(root, request) {
    return Vue.axios.post(root + "/analysis", request);
}