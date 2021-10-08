import { object } from "../../../../data";

export default function handler(req, res) {
    const { id } = req.query
    const filtered = object.filter((p) => p.id_string === id)
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
      } else {
        res.status(404).json({ message: `User with id: ${id} not found.` })
      }
}