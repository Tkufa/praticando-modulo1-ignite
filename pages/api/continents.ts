import data from '../../../server.json'

export default function(req, res) {
  res.status(200).json(data)
}