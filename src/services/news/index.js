import { service } from "..";

export default {
    newsAdd: data => service.post('/news/news' + data),
    newsEdit: (id, data) => service.put('/news/news/' + id, data)
}