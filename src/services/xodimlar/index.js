import { service } from "..";

const mod = {
    employeDelete: (id) => service.delete('/employe/' + id)
}

export default mod