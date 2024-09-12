import { service } from "..";

export default {
    employeDelete: (id) => service.delete('/employe/' + id)
}