import { object } from "../../../../../data";

export default function handler(req, res) {
    const { id } = req.query
    const news = [];
    object.forEach(item => {
        item.category.forEach(ct => {
            if(ct.id_string === id) {
                news.push(item);
            }
        })
    })
    if (news.length > 0) {
        res.status(200).json(news)
      } else {
        res.status(404).json({ message: `User with id: ${id} not found.` })
      }
}