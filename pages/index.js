import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'

const DUMMY_MEETUPS = [
    {
        id:'m1',
        title:'First Meetup',
        image:'https://cianorte.pr.gov.br/thumb/1600x1080/noticias/4141/Portal-Cianorte_800x533.jpg',
        address:'Some address 1, some city',
        description: 'This is a first meetup'
    },
    {
        id:'m2',
        title:'Second Meetup',
        image:'https://cianorte.pr.gov.br/thumb/1600x1080/noticias/4141/Portal-Cianorte_800x533.jpg',
        address:'Some address 2, some city',
        description: 'This is a second meetup'
    },
    {
        id:'m3',
        title:'Third Meetup',
        image:'https://cianorte.pr.gov.br/thumb/1600x1080/noticias/4141/Portal-Cianorte_800x533.jpg',
        address:'Some address 3, some city',
        description: 'This is a third meetup'
    }
]

function HomePage(){
    return <Layout>
    <MeetupList meetups={DUMMY_MEETUPS}/>
    </Layout>
}

export default HomePage;