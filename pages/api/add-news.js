import axios from '../../axios/axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const saveData = req.body;

		// const { id, title, imageUrl, description } = data;

		try {
			const { data } = await axios.post('/news', saveData);
			if (data) {
				res.status(201).json({ message: 'Berita dipublish', data });
			}
		} catch (error) {
			console.log(error);
      res.status(500).json({ message: 'Gagal menyimpan berita', detail: error });
		}
	}
}
