import Vue from "vue";

export function getFilters() {
    return Vue.axios.get("http://api.inspex.com/filters");
}

export function runAnalysis(request) {
    return Vue.axios.post("http://api.inspex.com/analysis", request);
}