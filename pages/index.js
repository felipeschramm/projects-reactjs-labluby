import MeetupList from '../components/meetups/MeetupList'

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

function HomePage(props){
   return <MeetupList meetups={props.meetups}/>
}

export function getStaticProps(){
    return {
        props:{
            meetups:DUMMY_MEETUPS
        },
        revalidate:1
        //numbers of seconds that the update of data will happen in server. 
    }
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