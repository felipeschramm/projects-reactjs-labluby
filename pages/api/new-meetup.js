import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(
            'mongodb+srv://felipe:fepjmq25@cluster0.28t8l.mongodb.net/meetups?retryWrites=true&w=majority'
        );
        comsole.log('client'+ client)
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        meetupsCollection.insertOne(data);

        client.close();

        res.status().json({ message: 'Meetup inserted!' });
    }
}

export default handler;