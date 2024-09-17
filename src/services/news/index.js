import { service } from "..";

const mod = {
    newsAdd: data => service.post(`/news/news/${data}`),
    newsEdit: (id, data) => service.put('/news/news/' + id, data)
}

export default mod