import axios from "axios" ;

const http = axios.create({ baseURL: "http://localhost:5000" });

export async function getRecords(params) {
    const res = await http.get("/", {params})
    return res
}
  