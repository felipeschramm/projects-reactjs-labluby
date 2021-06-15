import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'

function HomePage(props) {
    return <>
        <Head>
            <title>React Meetups</title>
            <meta
            name="description"
            content="Browse a huge list of highly active React Meetups"
            />
        </Head>
        <MeetupList meetups={props.meetups} />
    </>
}



export async function getStaticProps() {
    const client = await MongoClient.connect(
        'mongodb+srv://felipe:Cdkag7mxpJ5jjsu1@cluster0.28t8l.mongodb.net/meetups'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 1,
    };
}

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     return{
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage;